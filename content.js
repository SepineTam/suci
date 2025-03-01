// Global variables
let isProcessing = false;
let coursesToSelect = [];
let currentCourseIndex = 0;
let autoConfirm = true;

// Helper function to log messages back to the popup
function log(message) {
  chrome.runtime.sendMessage({
    action: 'log',
    message: message
  });
  console.log(`SHU Course Helper: ${message}`);
}

// Wait for an element to appear in the DOM
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Timeout waiting for element: ${selector}`));
    }, timeout);
  });
}

// Wait for a short time
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fill search fields and click search button
async function searchCourse(courseNumber, teacherNumber) {
  try {
    log(`搜索课程: ${courseNumber}, 教师号: ${teacherNumber}`);
    
    // Find search inputs
    const courseInput = document.querySelector('.search-item[data-type="KCH"] input');
    const teacherInput = document.querySelector('.search-item[data-type="JSH"] input');
    
    if (!courseInput || !teacherInput) {
      throw new Error('未找到搜索输入框');
    }
    
    // Clear previous inputs and set new values
    courseInput.value = '';
    teacherInput.value = '';
    courseInput.dispatchEvent(new Event('input', { bubbles: true }));
    teacherInput.dispatchEvent(new Event('input', { bubbles: true }));
    
    await wait(300);
    
    // Set values
    courseInput.value = courseNumber;
    teacherInput.value = teacherNumber;
    
    // Trigger input events to notify the website that values have changed
    courseInput.dispatchEvent(new Event('input', { bubbles: true }));
    teacherInput.dispatchEvent(new Event('input', { bubbles: true }));
    
    await wait(300);
    
    // Find and click the search button
    const searchButton = Array.from(document.querySelectorAll('.el-button--primary'))
      .find(button => button.textContent.includes('搜索'));
    
    if (!searchButton) {
      throw new Error('未找到搜索按钮');
    }
    
    searchButton.click();
    log('已点击搜索按钮');
    
    // Wait for results to load
    await wait(1000);
    
    return true;
  } catch (error) {
    log(`搜索失败: ${error.message}`);
    return false;
  }
}

// Check if the course is already selected
function isAlreadySelected(courseNumber) {
  // Look for course numbers in the already selected courses section
  const selectedCourseElements = document.querySelectorAll('.arranged-course-card .card-item');
  
  for (const element of selectedCourseElements) {
    const label = element.querySelector('.label');
    const value = element.querySelector('.value');
    
    if (label && value && label.textContent.includes('课程号') && 
        value.textContent.includes(courseNumber)) {
      return true;
    }
  }
  
  return false;
}

// Select the course when found in search results
async function selectCourse(courseNumber) {
  try {
    // Check if the course is already selected
    if (isAlreadySelected(courseNumber)) {
      log(`课程 ${courseNumber} 已经在已选课程中`);
      return true;
    }
    
    // Find the select button in search results
    const courseCards = document.querySelectorAll('.el-card__body');
    let selectButton = null;
    
    for (const card of courseCards) {
      const items = card.querySelectorAll('.card-item');
      let hasMatchingCourse = false;
      
      for (const item of items) {
        const label = item.querySelector('.label');
        const value = item.querySelector('.value');
        
        if (label && value && label.textContent.includes('课程号') && 
            value.textContent.includes(courseNumber)) {
          hasMatchingCourse = true;
          break;
        }
      }
      
      if (hasMatchingCourse) {
        // Find select button in this card
        selectButton = card.querySelector('.el-button--primary');
        if (selectButton && selectButton.textContent.includes('选择')) {
          break;
        }
      }
    }
    
    if (!selectButton) {
      log(`未找到课程 ${courseNumber} 的选择按钮`);
      return false;
    }
    
    // Check if the course is full
    let parentCard = selectButton.closest('.el-card__body');
    let limitElement = null;
    
    if (parentCard) {
      const limitItems = Array.from(parentCard.querySelectorAll('.card-item'));
      for (const item of limitItems) {
        const label = item.querySelector('.label');
        const value = item.querySelector('.value');
        
        if (label && value && label.textContent.includes('选课限制') && 
            value.textContent.includes('人数已满')) {
          limitElement = value;
          break;
        }
      }
    }
    
    if (limitElement) {
      log(`课程 ${courseNumber} 人数已满，无法选择`);
      return false;
    }
    
    // Click the select button
    log(`点击选择按钮，选择课程 ${courseNumber}`);
    selectButton.click();
    
    // If auto-confirm is enabled, wait for the confirmation dialog and confirm
    if (autoConfirm) {
      try {
        // Wait for the confirm button to appear
        await wait(1000);
        const confirmButton = Array.from(document.querySelectorAll('.el-button--primary'))
          .find(button => button.textContent.includes('确定'));
        
        if (confirmButton) {
          log('点击确定按钮');
          confirmButton.click();
          
          // Wait for the selection to complete
          await wait(1000);
          
          // Check if successful by looking for a success message or the course in selected list
          if (isAlreadySelected(courseNumber)) {
            log(`课程 ${courseNumber} 选择成功`);
            return true;
          } else {
            log(`课程 ${courseNumber} 可能选择失败，请检查已选课程列表`);
            return false;
          }
        } else {
          log('未找到确定按钮');
          return false;
        }
      } catch (error) {
        log(`确认选课时出错: ${error.message}`);
        return false;
      }
    } else {
      log('自动确认未启用，请手动点击确定按钮');
      return true;
    }
  } catch (error) {
    log(`选择课程时出错: ${error.message}`);
    return false;
  }
}

// Process next course in the queue
async function processNextCourse() {
  if (!isProcessing || currentCourseIndex >= coursesToSelect.length) {
    isProcessing = false;
    log('所有课程处理完毕');
    return;
  }
  
  const course = coursesToSelect[currentCourseIndex];
  log(`处理课程 ${currentCourseIndex + 1}/${coursesToSelect.length}: ${course.courseNumber}`);
  
  try {
    // Search for the course
    const searchResult = await searchCourse(course.courseNumber, course.teacherNumber);
    
    if (searchResult) {
      // Try to select the course
      await selectCourse(course.courseNumber);
    }
    
    // Move to next course
    currentCourseIndex++;
    processNextCourse();
  } catch (error) {
    log(`处理课程时出错: ${error.message}`);
    currentCourseIndex++;
    processNextCourse();
  }
}

// Start the course selection process
function startCourseSelection(courses, confirmOption) {
  if (isProcessing) {
    log('已有选课进程在运行，请先停止');
    return;
  }
  
  coursesToSelect = courses;
  currentCourseIndex = 0;
  autoConfirm = confirmOption;
  isProcessing = true;
  
  log(`开始选课进程，共 ${coursesToSelect.length} 门课程`);
  processNextCourse();
}

// Stop the course selection process
function stopCourseSelection() {
  isProcessing = false;
  log('选课进程已停止');
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'startSelection') {
    startCourseSelection(message.courses, message.autoConfirm);
    sendResponse({status: true, message: '选课进程已启动'});
  } else if (message.action === 'stopSelection') {
    stopCourseSelection();
    sendResponse({status: true, message: '选课进程已停止'});
  }
  return true;
});

// Notify when the content script has loaded
log('选课助手已加载，可以开始使用了');
document.addEventListener('DOMContentLoaded', function() {
    const courseListTextarea = document.getElementById('course-list');
    const autoConfirmCheckbox = document.getElementById('auto-confirm');
    const continuousModeCheckbox = document.getElementById('continuous-mode');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const statusLog = document.getElementById('status-log');
    
    let isRunning = false;
    let intervalId = null;
    
    // Load saved settings
    chrome.storage.local.get(['courseList', 'autoConfirm', 'continuousMode'], function(result) {
      if (result.courseList) courseListTextarea.value = result.courseList;
      if (result.autoConfirm !== undefined) autoConfirmCheckbox.checked = result.autoConfirm;
      if (result.continuousMode !== undefined) continuousModeCheckbox.checked = result.continuousMode;
    });
    
    // Save settings when changed
    function saveSettings() {
      chrome.storage.local.set({
        courseList: courseListTextarea.value,
        autoConfirm: autoConfirmCheckbox.checked,
        continuousMode: continuousModeCheckbox.checked
      });
    }
    
    courseListTextarea.addEventListener('input', saveSettings);
    autoConfirmCheckbox.addEventListener('change', saveSettings);
    continuousModeCheckbox.addEventListener('change', saveSettings);
    
    // Log function
    function log(message) {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      const timestamp = new Date().toLocaleTimeString();
      entry.textContent = `[${timestamp}] ${message}`;
      statusLog.prepend(entry);
    }
    
    // Start course selection process
    startButton.addEventListener('click', function() {
      const courseList = courseListTextarea.value.trim();
      if (!courseList) {
        log('请输入至少一个课程号和教师号');
        return;
      }
      
      // Parse course list
      const courses = [];
      const lines = courseList.split('\n');
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;
        
        // Parse "courseNumber:teacherNumber" format
        const parts = trimmedLine.split(':');
        if (parts.length !== 2) {
          log(`格式错误: "${trimmedLine}" - 应该是 "课程号:教师号"`);
          continue;
        }
        
        courses.push({
          courseNumber: parts[0].trim(),
          teacherNumber: parts[1].trim()
        });
      }
      
      if (courses.length === 0) {
        log('没有有效的课程信息');
        return;
      }
      
      isRunning = true;
      startButton.style.display = 'none';
      stopButton.style.display = 'block';
      
      // Send message to content script
      function startSelection() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          const activeTab = tabs[0];
          if (!activeTab || !activeTab.url.includes('jwxk.shu.edu.cn')) {
            log('请在上海大学选课系统页面上使用此扩展');
            stopProcess();
            return;
          }
          
          chrome.tabs.sendMessage(activeTab.id, {
            action: 'startSelection',
            courses: courses,
            autoConfirm: autoConfirmCheckbox.checked
          }, function(response) {
            if (response && response.status) {
              log(response.message);
            }
          });
        });
      }
      
      // Start immediately
      log(`开始选课进程，共 ${courses.length} 门课程`);
      startSelection();
      
      // Set up continuous mode if checked
      if (continuousModeCheckbox.checked) {
        log('持续模式已启用，每10秒尝试一次');
        intervalId = setInterval(startSelection, 10000);
      }
    });
    
    // Stop course selection process
    stopButton.addEventListener('click', stopProcess);
    
    function stopProcess() {
      isRunning = false;
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'stopSelection'}, function(response) {
          if (response && response.status) {
            log(response.message);
          }
        });
      });
      
      startButton.style.display = 'block';
      stopButton.style.display = 'none';
      log('选课进程已停止');
    }
    
    // Listen for messages from content script
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
      if (message.action === 'log') {
        log(message.message);
      }
      sendResponse({status: true});
      return true;
    });
  });
// Background script for SHU Course Selection Helper

// Listen for installation event
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install') {
    // Initialize storage with default values
    chrome.storage.local.set({
      courseList: '',
      autoConfirm: true,
      continuousMode: false
    });
    
    // Open welcome page or instructions
    chrome.tabs.create({
      url: 'https://jwxk.shu.edu.cn/'
    });
  }
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Forward log messages between content script and popup
  if (message.action === 'log') {
    chrome.runtime.sendMessage(message);
  }
  
  sendResponse({status: true});
  return true;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request && request.action=="queryGet"){
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {queryBank: request.queryBank});
    });
  }
});

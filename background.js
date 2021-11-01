let download = function(content, fileName, contentType) {
    let a = document.createElement("a");
    let file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request && request.action=="queryGet"){
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {queryBank: request.queryBank});
    });
  }
  else if (request && request.action=="output"){
    let queries = request.queryBank.split(/\r?\n/);
    let output = "query\n";
    for(i=0; i<queries.length; i++){
      let line = queries[i]+ ", " + request.result[queries[i]].join(", ") + "\n"
      output += line;
    }
    if(output){
      download(output, "googleScraper.csv", "text/plain");
    }
  }
});

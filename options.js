function dataReady(){
  var queryBank = document.getElementById("queryBank").value;
  if(queryBank){
    console.log(queryBank);
    chrome.runtime.sendMessage({action:"queryGet", queryBank:queryBank});
  }
}

document.addEventListener("DOMContentLoaded", function() {
 document.querySelector("#scrape").addEventListener("click", dataReady);
});

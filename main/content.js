//main function
chrome.runtime.onMessage.addListener(
  function(request, sender){
    let queries = request.queryBank.split(/\r?\n/);
    let result = {}
    for(let i=0; i<queries.length; i++){
      let googleUrl = "https://www.google.com/search?q=" + queries[i];
      let iframe = document.createElement("iframe");
      iframe.src = googleUrl;
      iframe.id = "scrapeTarget" + queries[i].replace(/\s+/g, "");
      iframe.style = "width: 43%; height: 500px"
      document.body.appendChild(iframe);
    }
  });

// sample function
let generate = function(query){
  const xpath = "descendant::h3";
  const idForFrame = "#scrapeTarget" + query.replace(/\s+/g, "");
  let results = document.querySelector(idForFrame).contentWindow.document.evaluate(xpath, document.querySelector(idForFrame).contentWindow.document, null, XPathResult.ANY_TYPE, null);
  let urlBank = [];
  let num = 0;
  let res;
  while (res = results.iterateNext()) {
    urlBank.push(res.textContent);
    num+=1;
  }
  return {urlBank, num};
}

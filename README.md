# extension_open_multiple_sites
This repository demonstrates the powerful combination of browser extension and iframe that can be used on many occasions. With this extension, you can open multiple search results pages on Google. 

![demo of the extension](https://github.com/bwlw3127/extension_open_multiple_sites/blob/main/demo.gif)


## How it works: 
1. We enter multiple search terms of interest in the extension's pop-up window. 
2. Click the button and the Google search results will open one by one at the bottom of the website.

## Customize: 
- Change the src of iframe to get your own targeted page.

  ```
  iframe.src = googleUrl;
  ```
 
 - Add customized function to interact with the iframe. <br />
   For instance, in the 'content.js' I added a sample function 'generate' that locate and extract the titles of each search result
   
   ```
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
    ```
    Build any function that fit your needs. And don't forget to add it into the main function for extension
 
 ## How to install unpacked extensions: 
 Go to the extension page (chrome://extensions/) > click the developer mode (top right) > click on load unapacked (top left) > upload the entire folder 


 ## To update the unpacked extensions: 
 Click on the extension's reload button. <br /><br />
  <img width="425" alt="update" src="https://user-images.githubusercontent.com/19240127/139778521-6e2ffddd-9d69-4de7-ad34-eace16e76633.png">
 

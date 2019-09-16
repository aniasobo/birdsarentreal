// get the content 
// run it through the bird counter

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'developer.chrome.com'},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == "runContentScript"){
      chrome.tabs.executeScript({
        file: 'contentScript.js'
      });
    }
 });

// pseudocode - run hideLies on window load 
// add listener: only toggle lies if popup toggle clicked 
hideLies.onload = function(element) {
  let paragraph = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code}
    )
  })
}

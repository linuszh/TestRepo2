```javascript
let currentUrl;
let summaryData;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'generateSummary') {
    currentUrl = request.url;
    getSummary(currentUrl).then(summary => {
      summaryData = summary;
      sendResponse({message: 'displaySummary', summary: summaryData});
    });
    return true; // indicates we wish to send a response asynchronously
  }
});

async function getSummary(url) {
  // Here you would call the OpenAI API to generate a summary of the website at the given URL
  // This is a placeholder implementation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Summary for ${url}`);
    }, 2000);
  });
}
```
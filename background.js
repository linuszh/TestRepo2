```javascript
let currentUrl;
let summaryData;

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    currentUrl = tabs[0].url;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'generateSummary') {
        getSummary(currentUrl).then(summary => {
            summaryData = summary;
            chrome.runtime.sendMessage({message: 'displaySummary', data: summaryData});
        });
    }
});

async function getSummary(url) {
    // Replace this with actual OpenAI API call
    // This is a placeholder function
    let summary = `Summary for ${url}`;
    return summary;
}
```
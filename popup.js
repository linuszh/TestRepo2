```javascript
let currentUrl;
let summaryData;

document.getElementById('summaryButton').addEventListener('click', getSummary);
document.getElementById('optionsButton').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    currentUrl = tabs[0].url;
});

function getSummary() {
    chrome.runtime.sendMessage({type: 'generateSummary', url: currentUrl}, function(response) {
        summaryData = response.summary;
        displaySummary();
    });
}

function displaySummary() {
    document.getElementById('summaryDisplay').textContent = summaryData;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'displaySummary') {
        summaryData = request.summary;
        displaySummary();
    }
});
```
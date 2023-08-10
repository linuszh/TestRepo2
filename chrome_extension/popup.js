document.addEventListener('DOMContentLoaded', function() {
    let summaryButton = document.getElementById('summaryButton');
    summaryButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({type: 'generateSummaryMessage'}, function(response) {
            let summaryContainer = document.getElementById('summaryContainer');
            summaryContainer.innerHTML = response.summary;
        });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'displaySummaryMessage') {
        let summaryContainer = document.getElementById('summaryContainer');
        summaryContainer.innerHTML = request.summary;
    }
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "generateSummaryMessage") {
      fetch('http://localhost:5000/generateSummary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: request.text}),
      })
      .then(response => response.json())
      .then(data => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {message: "displaySummaryMessage", summary: data.summary});
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
);
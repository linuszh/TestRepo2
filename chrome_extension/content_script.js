// chrome_extension/content_script.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "generateSummaryMessage") {
      let summary = generateSummary(document.body.innerText);
      sendResponse({summary: summary});
    }
  }
);

function generateSummary(text) {
  let openai_api = require('../openai_api');
  let summary = openai_api.generateSummary(text, openai_key);
  return summary;
}
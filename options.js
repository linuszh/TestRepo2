```javascript
// Save options to chrome.storage
function saveOptions() {
  let summaryLength = document.getElementById('summaryLength').value;
  chrome.storage.sync.set({
    summaryLength: summaryLength
  }, function() {
    // Update status to let user know options were saved.
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  chrome.storage.sync.get({
    summaryLength: '500'
  }, function(items) {
    document.getElementById('summaryLength').value = items.summaryLength;
  });
}

// Listeners
document.getElementById('save').addEventListener('click', saveOptions);
document.addEventListener('DOMContentLoaded', loadOptions);
```
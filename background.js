chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    const url = msg.url;

    chrome.downloads.download({url: url});
});
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    const { url, filename } = msg;

    chrome.downloads.download({
        url: url,
        filename: filename,
    });
});
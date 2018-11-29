// Help us to check if browser is chrome or not.
var isChrome = chrome.declarativeContent;

function setExtensionHost(fn) {
    if (isChrome !== undefined) {
        chrome.storage.sync.get('value', fn);
    } else {
        browser.storage.sync.get('value', fn);
    }
}

setExtensionHost(function(item) {
    var displayHost = item.value.host;

    if (displayHost !== undefined && displayHost !== '') {
        document.getElementById('host').value = displayHost;
        updateIconHref(displayHost);
    } else {
        updateIconHref('https://www.oxygenxml.com/xml_web_author.html');
    }   
});

function updateIconHref(host) {
    document.getElementById('oxygen-link').href = host;
}
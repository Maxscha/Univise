"use strict"

var url_to_search = "using-npm-to-install-or-update-required-packages-just-like-bundler-for-rubygems";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.history.search({text:url_to_search},callback);
});

function callback(result){
    var newURL = "http://localhost:8000/?length=" + result.length;
    chrome.tabs.create({ url: newURL });
}
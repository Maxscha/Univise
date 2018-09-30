"use strict"
alert("test");
chrome.browserAction.onClicked.addListener(function(tab) {
    var newURL = "http://localhost:8000/radarchart.html";
    chrome.tabs.create({ url: newURL });
});
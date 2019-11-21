/*
* Authored by : Aung Naing Oo
* Purpose: 		To stop peeing eyes from looking at the title of your Google Chrome tab
*/

'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.title = "' + Math.random().toString(36).substring(1) + '"; document.querySelector("link[rel=\'shortcut icon\']").href = "https://aadcdn.msauth.net/ests/2.1/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico";'})
  });
});
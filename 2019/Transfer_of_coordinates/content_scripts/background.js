(function()
{
    let button;

    window.addEventListener('DOMContentLoaded', () => {

        chrome.tabs.executeScript({file: "/content_scripts/end.js"});

        button = document.querySelector(".button");
        button.addEventListener('click', () => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {
                    command: "start"
                });
            });
        });
    });
})

()
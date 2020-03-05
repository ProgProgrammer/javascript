(function()
{
    let button;
    console.log("Hello");
    window.addEventListener('DOMContentLoaded', () => {
        console.log("Hello");

        chrome.tabs.executeScript({file: "/content_scripts/end.js"});

        button = document.querySelector(".button");
        console.log(button);
        button.addEventListener('click', () => {
            console.log("Hello2");
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {
                    command: "start"
                });
                console.log("Hello4");
            });
            console.log("Hello3");
        });
    });
})

()
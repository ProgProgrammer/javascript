(function()
{
    let buttons;

    window.addEventListener('DOMContentLoaded', () => {

        chrome.tabs.executeScript({file: "/content_scripts/end.js"});

        buttons = document.querySelectorAll(".button");

        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].addEventListener('click', () => {
                if (buttons[i].innerHTML === "Трансфер в Графогер")
                {
                    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                        chrome.tabs.sendMessage(tabs[0].id, {
                            command: "start-google"
                        });
                    });
                }
                else
                {
                    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                        chrome.tabs.sendMessage(tabs[0].id, {
                            command: "start-yandex"
                        });
                    });
                }
            });
        }
    });
})

()
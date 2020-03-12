(function()
{
    let buttons;
    let inputs;

    window.addEventListener('DOMContentLoaded', () => {

        chrome.tabs.executeScript({file: "/content_scripts/end.js"});

        buttons = document.querySelectorAll(".button");
        inputs = document.querySelectorAll(".label-input");

        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].addEventListener('click', () =>
            {
                if (i === 0)
                {
                    if (inputs[0].checked)
                    {
                        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                            chrome.tabs.sendMessage(tabs[0].id, {
                                command: "start-graphhopper-vkladka"
                            });
                        });
                    }
                    else {
                        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                            chrome.tabs.sendMessage(tabs[0].id, {
                                command: "start-graphhopper"
                            });
                        });
                    }
                }
                else
                {
                    if (inputs[0].checked)
                    {
                        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                            chrome.tabs.sendMessage(tabs[0].id, {
                                command: "start-yandex-vkladka"
                            });
                        });
                    }
                    else {
                        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                            chrome.tabs.sendMessage(tabs[0].id, {
                                command: "start-yandex"
                            });
                        });
                    }
                }
            });
        }
    });
})

()
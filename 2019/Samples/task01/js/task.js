(function()
{
    let buttons;
    let button;
    let name;
    let input;
    let checkName;
    let inputText;
    
    function User(name)
    {
        this.check = "Vova";
        this.name = name;
        this.input = document.querySelector(".main-block-input");
        
        this.checkName = function()
        {
            this.input.value = "";

            if (this.name === this.check)
            {
                return "Добро пожаловать";
            }
            else
            {
                return "Неверный пароль";
            }            
        }
        
        this.putText = function(value)
        {
            this.input.value = value;
        }
    }
    
    window.addEventListener('DOMContentLoaded', () =>
    {
        input = document.querySelector(".main-block-input");
        buttons = document.querySelectorAll(".main-block-button");

        for (let i = 0; i < buttons.length; i++)
        {
            buttons[i].addEventListener('click', () =>
            {
                button = buttons[i].dataset.name;
                name = input.value;
                checkName = new User(name);
                if (button === "check-Volgograd")
                {
                    checkName.nameCity = "Volgograd";
                }
                else if (button === "check-Moskow")
                {
                    checkName.check = "Roma";
                    checkName.nameCity = "Moskow";
                }
                else
                {
                    input.value = "";
                    return;
                }
                inputText = checkName.checkName();
                checkName.putText(inputText);
                checkName.checkCity = function ()
                {
                    checkName.input.value += " - ";
                    checkName.input.value += checkName.nameCity;
                }

                checkName.checkCity();
            });
        }
    });
})

()
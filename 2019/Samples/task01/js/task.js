(function()
{
    let buttons;
    let button;
    let name;
    let input;
    let user;
    let inputText;
    
    function User(name)
    {
        this.password = "Vova";
        this.name = name;
        this.input = document.querySelector(".main-block-input");
        
        this.checkName = function()
        {
            this.input.value = "";

            if (this.name === this.password)
            {
                return "Добро пожаловать";
            }
            else
            {
                return "Неверный пароль";
            }            
        }
        
        this.setText = function(value)
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
                user = new User(name);

                if (button === "check-Volgograd")
                {
                    user.nameCity = "Volgograd";
                }
                else if (button === "check-Moskow")
                {
                    user.password = "Roma";
                    user.nameCity = "Moskow";
                }
                else
                {
                    input.value = "";
                    return;
                }
                inputText = user.checkName();
                user.setText(inputText);
                user.checkCity = function ()
                {
                    user.input.value += " - ";
                    user.input.value += user.nameCity;
                }

                user.checkCity();
            });
        }
    });
})

()
(function()
{
    let button;
    let name;
    let input;
    let checkName;
    let inputText;
    let value;
    
    function User(name)
    {
        this.check = "Vova";
        this.name = name;
        this.input = document.querySelector(".main-block-input");
        
        this.checkName = function()
        {
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
        button = document.querySelector(".main-block-button");
        
        button.addEventListener('click', () =>
        {
            name = input.value;
            checkName = new User(name);
            inputText = checkName.checkName();
            checkName.putText(inputText);
            
            checkName.nameCity = "Volgograd";
            checkName.checkCity = function ()
            {
                checkName.input.value += " - ";
                checkName.input.value += checkName.nameCity;
            }
            
            checkName.checkCity();
        });
    });
})

()
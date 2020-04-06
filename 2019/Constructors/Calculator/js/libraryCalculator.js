export  { Calculator };

function Calculator()
{
    this.numbersExpression = 0;
    this.arraySymbols = [];
    this.arrayAllSymbols = [];
    this.resultOfExpression = [];
    this.input = document.querySelector(".main-blocks-input");
    this.input.value = "";
    this.stringInput = "";
    this.checkSymbol = "";
    this.variable = "";
    this.elementFocus;
    this.mainFocus;

    this.focusDelete = function(elementFocus, mainFocus)
    {
        this.elementFocus = elementFocus;
        this.mainFocus = mainFocus;

        if (this.elementFocus.length === undefined && document.activeElement === this.elementFocus)
        {
            this.mainFocus.focus();
        }
        else
        {
            for (this.i = 0; this.i < this.elementFocus.length; this.i++)
            {
                if (document.activeElement === this.elementFocus[this.i])
                {
                    this.mainFocus.focus();
                }
            }
        }
    }

    this.checkSymbols = function(arraySymbols)
    {
        this.checkSymbol = arraySymbols;
        this.checkSymbol = String(this.checkSymbol);

        for (this.a = 0; this.a < this.checkSymbol.length; this.a++)
        {
            if (arraySymbols[this.a] === "-")
            {
                return true;
            }
        }

        return false;
    }

    this.clearAllButton = function()
    {
        this.input.value = this.input.value.replace(/ /gi, "");
        this.input.value = "";
        this.arraySymbols = [];
        this.resultOfExpression = [];
        this.numbersExpression = 0;
    }

    this.clearButton = function()
    {
        this.input.value = this.input.value.replace(/ /gi, "");
        this.stringInput = this.input.value;

        for(this.i = 0; this.i < this.stringInput.length; this.i++)
        {
            if (this.stringInput[this.i] === "=" && typeof(this.stringInput[this.i + 1]) === "number")
            {
                this.input.value = "";
                this.arraySymbols = [];
                this.resultOfExpression = [];
                this.numbersExpression = 0;
                return;
            }
        }

        this.arraySymbols.splice(this.arraySymbols.length - 1, 1);
        this.resultOfExpression = [];
        this.numbersExpression = 0;
        this.input.value = "";

        for(this.a = 0; this.a < this.arraySymbols.length; this.a++)
        {
            this.input.value += this.arraySymbols[this.a];
        }

        return;
    }

    this.deleteButton = function()
    {
        this.input.value = this.input.value.replace(/ /gi, "");
        this.stringInput = this.input.value;
        this.string = this.stringInput;


        for(this.i = 0; this.i < this.stringInput.length; this.i++)
        {
            if (this.stringInput[this.i] === "=" && this.stringInput[this.i + 1] !== "")
            {
                this.arraySymbols.splice(0, this.arraySymbols.length - 2);
                this.input.value = this.arraySymbols[0];
                this.numbersExpression = this.arraySymbols[0];
                return;
            }
        }

        this.stringInput = this.arraySymbols[this.arraySymbols.length - 2];
        this.stringInput += this.arraySymbols[this.arraySymbols.length - 1];

        if (this.stringInput[this.stringInput.length - 1] !== "" &&
            String(this.stringInput[this.stringInput.length - 2]) === "-" &&
            this.stringInput[this.stringInput.length - 3] !== undefined)
        {
            this.arraySymbols.splice(this.arraySymbols.length - 1, 1);
            this.input.value = "";

            for (this.a = 0; this.a < this.arraySymbols.length; this.a++)
            {
                this.input.value += this.arraySymbols[this.a];
            }
            return;
        }
        else if (this.string[this.string.length - 1] !== "" &&
            this.string[this.string.length - 2] === "-")
        {
            this.arraySymbols.splice(this.arraySymbols.length - 1, 1);
            this.input.value = "";

            for (this.a = 0; this.a < this.arraySymbols.length; this.a++)
            {
                this.input.value += this.arraySymbols[this.a];
            }
            return;
        }

        this.lastSymbol = this.arraySymbols[this.arraySymbols.length - 1];
        this.lastSymbol = String(this.lastSymbol);
        this.lastSymbol = this.lastSymbol.substring(0, this.lastSymbol.length - 1);
        this.arraySymbols[this.arraySymbols.length - 1] = this.lastSymbol;
        this.input.value = "";

        if (this.arraySymbols[this.arraySymbols.length - 1] === "")
        {
            this.arraySymbols.splice(this.arraySymbols.length - 1, 1);
        }

        for(this.b = 0; this.b < this.arraySymbols.length; this.b++)
        {
            this.input.value += this.arraySymbols[this.b];
        }

        if (this.arraySymbols[0] === undefined)
        {
            this.numbersExpression = 0;
        }
        else
        {
            this.numbersExpression = this.arraySymbols[0];
        }

        return;
    }

    this.signChangeButton = function()
    {
        if (this.arraySymbols[this.arraySymbols.length - 1] !== "*" &&
            this.arraySymbols[this.arraySymbols.length - 1] !== "/" &&
            this.arraySymbols[this.arraySymbols.length - 1] !== "+" &&
            this.arraySymbols[this.arraySymbols.length - 1] !== "-")
        {
            if (this.checkSymbols(this.arraySymbols[this.arraySymbols.length - 1]) === true)
            {
                this.arraySymbols[this.arraySymbols.length - 1] = this.arraySymbols[this.arraySymbols.length - 1].replace(/-/i, "");
                this.input.value = "";
                for(this.b = 0; this.b < this.arraySymbols.length; this.b++)
                {
                    this.input.value += this.arraySymbols[this.b];
                }
            }
            else
            {
                this.arraySymbols[this.arraySymbols.length - 1] = String(this.arraySymbols[this.arraySymbols.length - 1]).replace(/-/i, "");
                this.variable = this.arraySymbols[this.arraySymbols.length - 1];
                this.arraySymbols[this.arraySymbols.length - 1] = "-";
                this.arraySymbols[this.arraySymbols.length - 1] += this.variable;
                this.input.value = "";
                for(this.b = 0; this.b < this.arraySymbols.length; this.b++)
                {
                    this.input.value += this.arraySymbols[this.b];
                }
            }
        }

        return;
    }

    this.inputValue = function(symbol)
    {
        this.symbol = symbol;
        this.input.value = this.input.value.replace(/ /gi, "");

        if (this.symbol !== "=")
        {
            if (this.arraySymbols.length === 0 ||
                /\d/gi.test(this.symbol) === false && this.symbol !== "." ||
                /\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
            {
                if (this.symbol === "." && /\d/gi.test(this.arraySymbols[this.arraySymbols.length - 1]) === false)
                {
                    this.arraySymbols.push("0");
                    this.arrayAllSymbols.push("0");
                    this.input.value += "0";
                    this.arraySymbols[this.arraySymbols.length - 1] += this.symbol;
                    this.arrayAllSymbols[this.arraySymbols.length - 1] += this.symbol;
                    this.input.value += this.symbol;
                }
                else if (this.symbol === "+" && /\d/gi.test(this.arraySymbols[this.arraySymbols.length - 1]) === true ||
                    this.symbol === "-" && /\d/gi.test(this.arraySymbols[this.arraySymbols.length - 1]) === true ||
                    this.symbol === "*" && /\d/gi.test(this.arraySymbols[this.arraySymbols.length - 1]) === true ||
                    this.symbol === "/" && /\d/gi.test(this.arraySymbols[this.arraySymbols.length - 1]) === true)
                {
                    this.arraySymbols.push(this.symbol);
                    this.arrayAllSymbols.push(this.symbol);
                    this.input.value += this.symbol;
                }
                else if (this.symbol !== "+" &&
                    this.symbol !== "-" &&
                    this.symbol !== "*" &&
                    this.symbol !== "/")
                {
                    this.arraySymbols.push(this.symbol);
                    this.arrayAllSymbols.push(this.symbol);
                    this.input.value += this.symbol;
                }
            }
            else
            {
                this.arraySymbols[this.arraySymbols.length - 1] += this.symbol;
                this.arrayAllSymbols[this.arrayAllSymbols.length - 1] += this.symbol;
                this.input.value += this.symbol;
            }
        }
        else
        {
            if (/\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
            {
                return;
            }
            this.input.value += this.symbol;
        }
    }

    this.calculateValue = function()
    {
        this.counterSymbols = 0;

        for (let a = 0; a < this.arraySymbols.length; a++)
        {
            if (/\d/gi.test(this.arraySymbols[a]) === false && /\d/gi.test(this.arraySymbols[a + 1]) === true)
            {
                this.counterSymbols++;

                if (this.counterSymbols <= 1 && /\d/.test(this.arraySymbols[a - 1]) === true)
                {
                    this.numbersExpression = Number(this.arraySymbols[a - 1]);
                }

                if (this.arraySymbols[a] === "+")
                {
                    this.numbersExpression = Number(this.numbersExpression) + Number(this.arraySymbols[a + 1]);
                }
                else if (this.arraySymbols[a] === "-")
                {
                    this.numbersExpression = Number(this.numbersExpression) - Number(this.arraySymbols[a + 1]);
                }
                else if (this.arraySymbols[a] === "*")
                {
                    this.numbersExpression = Number(this.numbersExpression) * Number(this.arraySymbols[a + 1]);
                }
                else if (this.arraySymbols[a] === "/")
                {
                    this.numbersExpression = Number(this.numbersExpression) / Number(this.arraySymbols[a + 1]);
                }
            }
            else if (/\d/gi.test(this.arraySymbols[a]) === true)
            {
                if (this.numbersExpression === 0 && this.arraySymbols.length - 1 !== a)
                {
                    this.numbersExpression = Number(this.arraySymbols[a]);
                }
            }
        }

        if (/\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
        {
            return;
        }

        if (this.numbersExpression === Infinity)
        {
            this.numbersExpression = 0;
        }

        this.input.value += this.numbersExpression;
        this.resultOfExpression[0] = this.numbersExpression;
        this.arraySymbols = [];
        this.arraySymbols[0] = this.resultOfExpression[0];
    }
}
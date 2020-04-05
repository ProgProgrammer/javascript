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
            console.log(document.activeElement);
            console.log(" - document.activeElement");
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
        console.log(this.checkSymbol + " - this.checkSymbol");
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
                console.log(this.stringInput + " - this.stringInput");
                this.input.value = "";
                this.arraySymbols = [];
                this.resultOfExpression = [];
                this.numbersExpression = 0;
                return;
            }
        }
        console.log(this.stringInput + " - this.stringInput11");
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
        for(this.i = 0; this.i < this.stringInput.length; this.i++)
        {
            if (this.stringInput[this.i] === "=" && typeof(this.stringInput[this.i + 1]) === "number")
            {
                console.log(this.stringInput + " - this.stringInput2");
                this.arraySymbols.splice(0, this.arraySymbols.length - 2);
                this.input.value = this.arraySymbols[0];
                this.numbersExpression = this.arraySymbols[0];
                return;
            }
        }
        if (typeof(Number(this.stringInput[this.stringInput.length - 1])) === "number" &&
            String(this.stringInput[this.stringInput.length - 2]) === "-")
        {
            this.arraySymbols.splice(this.arraySymbols.length - 1, 1);
            console.log(this.arraySymbols + " - ДЕФИС");
        }
        console.log(this.stringInput + " - this.stringInput22");
        console.log(this.arraySymbols);
        console.log(this.arraySymbols[0] + " - this.arraySymbols1");
        this.lastSymbol = this.arraySymbols[this.arraySymbols.length - 1];
        this.lastSymbol = String(this.lastSymbol);
        console.log(this.arraySymbols);
        console.log(typeof(this.lastSymbol) + " - lastSymbol1");
        this.lastSymbol = this.lastSymbol.substring(0, this.lastSymbol.length - 1);
        console.log(this.lastSymbol + " - lastSymbol2");
        this.arraySymbols[this.arraySymbols.length - 1] = this.lastSymbol;
        console.log(this.arraySymbols + " - this.arraySymbols2");
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
        console.log(this.numbersExpression + " - this.numbersExpression return");
        console.log(this.arraySymbols + " - this.arraySymbols3");
        return;
    }

    this.signChangeButton = function()
    {
        console.log(this.arraySymbols[this.arraySymbols.length - 1] + " - this.checkSymbols(this.arraySymbols)");
        if (this.arraySymbols[this.arraySymbols.length - 1] !== "*" &&
            this.arraySymbols[this.arraySymbols.length - 1] !== "/" &&
            this.arraySymbols[this.arraySymbols.length - 1] !== "+" &&
            this.arraySymbols[this.arraySymbols.length - 1] !== "-")
        {
            if (this.checkSymbols(this.arraySymbols[this.arraySymbols.length - 1]) === true)
            {
                this.arraySymbols[this.arraySymbols.length - 1] = this.arraySymbols[this.arraySymbols.length - 1].replace(/-/i, "");
                console.log(this.arraySymbols[this.arraySymbols.length - 1] + " - this.arraySymbols[this.arraySymbols.length - 1]");
                this.input.value = "";
                for(this.b = 0; this.b < this.arraySymbols.length; this.b++)
                {
                    this.input.value += this.arraySymbols[this.b];
                }
                console.log(this.arraySymbols[this.arraySymbols.length - 1] + " - this.arraySymbols[this.arraySymbols.length - 1]1");
                console.log(this.numbersExpression + " - this.numbersExpression1");
            }
            else
            {
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
            console.log(/\d/gi.test(this.symbol));
            console.log(this.arraySymbols[this.arraySymbols.length - 1] + " - this.number");
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
                    console.log(this.arraySymbols[0] + " - this.arraySymbols2");
                    this.arraySymbols.push(this.symbol);
                    this.arrayAllSymbols.push(this.symbol);
                    this.input.value += this.symbol;
                    console.log(this.arraySymbols);
                }
                else if (this.symbol !== "+" &&
                    this.symbol !== "-" &&
                    this.symbol !== "*" &&
                    this.symbol !== "/")
                {
                    console.log(this.arraySymbols[0] + " - this.arraySymbols2");
                    this.arraySymbols.push(this.symbol);
                    this.arrayAllSymbols.push(this.symbol);
                    this.input.value += this.symbol;
                    console.log(this.arraySymbols);
                }
            }
            else
            {
                this.arraySymbols[this.arraySymbols.length - 1] += this.symbol;
                this.arrayAllSymbols[this.arrayAllSymbols.length - 1] += this.symbol;
                this.input.value += this.symbol;
                console.log(this.arraySymbols);
            }
        }
        else
        {
            if (/\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
            {
                console.log("ОТМЕНА");
                return;
            }
            this.input.value += this.symbol;
            console.log(this.symbol);
        }
        console.log(this.arraySymbols);
    }

    this.calculateValue = function()
    {
        this.counterSymbols = 0;
        console.log(this.arraySymbols);
        for (let a = 0; a < this.arraySymbols.length; a++)
        {
            //console.log(Number(this.arraySymbols[a]));
            if (/\d/gi.test(this.arraySymbols[a]) === false && /\d/gi.test(this.arraySymbols[a + 1]) === true)
            {
                this.counterSymbols++;

                if (this.counterSymbols <= 1 && /\d/.test(this.arraySymbols[a - 1]) === true)
                {
                    this.numbersExpression = Number(this.arraySymbols[a - 1]);
                }

                if (this.arraySymbols[a] === "+")
                {
                    console.log(this.numbersExpression + " - this.numbersExpression");
                    console.log(Number(this.arraySymbols[a + 1]) + " - Number(this.arraySymbols[a + 1]");
                    this.numbersExpression = Number(this.numbersExpression) + Number(this.arraySymbols[a + 1]);
                    console.log(this.numbersExpression);
                }
                else if (this.arraySymbols[a] === "-")
                {
                    this.numbersExpression = Number(this.numbersExpression) - Number(this.arraySymbols[a + 1]);
                    console.log(this.numbersExpression);
                }
                else if (this.arraySymbols[a] === "*")
                {
                    console.log(Number(this.numbersExpression) + " - Number(this.numbersExpression)");
                    console.log(Number(this.arraySymbols[a + 1]) + " - Number(this.arraySymbols[a + 1])");
                    this.numbersExpression = Number(this.numbersExpression) * Number(this.arraySymbols[a + 1]);
                    console.log(this.numbersExpression);
                }
                else if (this.arraySymbols[a] === "/")
                {
                    this.numbersExpression = Number(this.numbersExpression) / Number(this.arraySymbols[a + 1]);
                    console.log(this.numbersExpression);
                }
            }
            else if (/\d/gi.test(this.arraySymbols[a]) === true)
            {
                if (this.numbersExpression === 0 && this.arraySymbols.length - 1 !== a)
                {
                    console.log(a + " - this.numbersExpression");
                    this.numbersExpression = Number(this.arraySymbols[a]);
                    console.log(this.numbersExpression);
                }
            }
        }

        if (/\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
        {
            console.log("ОТМЕНА3");
            return;
        }

        if (this.numbersExpression === Infinity)
        {
            this.numbersExpression = 0;
        }
        console.log(this.numbersExpression + " - number");
        this.input.value += this.numbersExpression;
        this.resultOfExpression[0] = this.numbersExpression;
        this.arraySymbols = [];
        this.arraySymbols[0] = this.resultOfExpression[0];
    }
}
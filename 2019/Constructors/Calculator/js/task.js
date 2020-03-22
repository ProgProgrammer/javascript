(function()
{
  let calculate;
  let buttons;
  let buttonValue;

  function Calculator()
  {
    this.numbersExpression = 0;
    this.arraySymbols = [];
    this.arrayAllSymbols = [];
    this.resultOfExpression = [];
    this.input = document.querySelector(".main-blocks-input");

     this.inputValue = function(symbol)
     {
          this.symbol = symbol;
          this.input.value = this.input.value.replace(/ /gi, "");
          if (this.symbol === "delete" || this.symbol === "clear" ||
              this.symbol === "clear-all")
          {
                if (this.symbol === "clear-all")
                {
                    this.input.value = "";
                    this.arraySymbols = [];
                    this.resultOfExpression = [];
                    this.numbersExpression = 0;
                }
          }
          else if (this.symbol !== "=")
          {
              console.log(/\d/gi.test(this.symbol));
              if (this.arraySymbols.length === 0 ||
                  /\d/gi.test(this.symbol) === false && this.symbol !== "." ||
                  /\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
              {
                  this.arraySymbols.push(this.symbol);
                  this.arrayAllSymbols.push(this.symbol);
                  this.input.value += this.symbol;
                  console.log(this.arraySymbols);
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
              this.input.value += this.symbol;
              console.log(this.symbol);
          }
          console.log(this.arraySymbols);
     }

      this.calculateValue = function()
      {
          console.log(this.arraySymbols);
          for (let a = 0; a < this.arraySymbols.length; a++)
          {
              //console.log(Number(this.arraySymbols[a]));
              if (/\d/gi.test(this.arraySymbols[a]) === false && /\d/gi.test(this.arraySymbols[a + 1]) === true)
              {
                  if (this.arraySymbols[a] === "+")
                  {
                      this.numbersExpression = this.numbersExpression + Number(this.arraySymbols[a + 1]);
                      console.log(this.numbersExpression);
                  }
                  else if (this.arraySymbols[a] === "-")
                  {
                      this.numbersExpression = this.numbersExpression - Number(this.arraySymbols[a + 1]);
                      console.log(this.numbersExpression);
                  }
                  else if (this.arraySymbols[a] === "*")
                  {
                      this.numbersExpression = this.numbersExpression * Number(this.arraySymbols[a + 1]);
                      console.log(this.numbersExpression);
                  }
                  else if (this.arraySymbols[a] === "/")
                  {
                      this.numbersExpression = this.numbersExpression / Number(this.arraySymbols[a + 1]);
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
          if (this.numbersExpression === "Infinity")
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

  window.addEventListener('DOMContentLoaded', () =>
  {
      console.log("Hello");
      buttons = document.querySelectorAll(".main-blocks-buttons-button");
      calculate = new Calculator();

      for (let i = 0; i < buttons.length; i++)
      {
          buttons[i].addEventListener('click', () =>
          {
              buttonValue = buttons[i].dataset.name;
              console.log(buttonValue);
              calculate.inputValue(buttonValue);
              if (buttonValue === "=")
              {
                  calculate.calculateValue();
              }
          });
      }
  });
})

()
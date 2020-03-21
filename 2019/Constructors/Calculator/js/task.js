(function()
{
  let calculate;
  let buttons;
  let buttonValue;

  function Calculator()
  {
    this.numbersExpression = 0;
    this.arraySymbols = [];
    this.input = document.querySelector(".main-blocks-input");

     this.inputValue = function(symbol)
     {
          this.symbol = symbol;
          this.input.value = this.input.value.replace(/ /gi, "");
          if (this.symbol !== "=")
          {
              console.log(/\d/gi.test(this.symbol));
              if (this.arraySymbols.length === 0 ||
                  /\d/gi.test(this.symbol) === false ||
                  /\d/gi.test(this.arraySymbols[this.arraySymbols.length-1]) === false)
              {
                  this.arraySymbols.push(this.symbol);
                  this.input.value += this.symbol;
                  console.log(this.arraySymbols);
              }
              else
              {
                  this.arraySymbols[this.arraySymbols.length - 1] += this.symbol;
                  this.input.value += this.symbol;
                  console.log(this.arraySymbols);
              }
          }
          else
          {
              this.input.value += this.symbol;
              console.log(this.symbol);
          }
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
              }
              else if (/\d/gi.test(this.arraySymbols[a]) === true)
              {
                  if (this.numbersExpression === 0)
                  {
                      this.numbersExpression = Number(this.arraySymbols[a]);
                      console.log(this.numbersExpression);
                  }
              }
          }
          console.log(this.numbersExpression);
          this.input.value += this.numbersExpression;
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
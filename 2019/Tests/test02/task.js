(function()
{
    const controlNumber = "0";
    const decreaseNumber = "59";
    const timeOut = 1000;
    const nameFunctionSeconds = "countDown";
    const nameFunctionMinutes = "changeMinutes";
    const nameFunctionHours = "changeHour";
    let idInterval;
    let numbersTime;

    const calculationsTime = (numbersTime, numberOne, numberTwo, nameFunction) =>
    {
        let number;
        let timeStop;
        number = Number(numberOne.innerHTML + numberTwo.innerHTML);
        if (String(number) !== controlNumber)
        {
            number -= 1;
        }
        else
        {
            if (nameFunction === nameFunctionSeconds)
            {
                timeStop = changeMinutes(numbersTime);
                if (timeStop === false)
                {
                    clearInterval(idInterval);
                    return;
                }
                number = decreaseNumber;
            }
            else if (nameFunction === nameFunctionMinutes)
            {
                changeHour(numbersTime);
                number = decreaseNumber;
            }
        }
        number = String(number);
        if (number.length === 1)
        {
            number = 0 + number;
        }
        numberOne.innerHTML = number[0];
        numberTwo.innerHTML = number[1];
    }

    const changeHour = (numbersTime) =>
    {
        if (Number(numbersTime[0].innerHTML + numbersTime[1].innerHTML) == controlNumber)
        {
            return;
        }
        else
        {
            calculationsTime(numbersTime, numbersTime[0], numbersTime[1], nameFunctionHours);
        }
    }

    const changeMinutes = (numbersTime) =>
    {
        if (Number(numbersTime[0].innerHTML + numbersTime[1].innerHTML) == controlNumber &&
            Number(numbersTime[2].innerHTML + numbersTime[3].innerHTML) == controlNumber)
        {
            return false;
        }
        else
        {
            calculationsTime(numbersTime, numbersTime[2], numbersTime[3], nameFunctionMinutes);
        }
    }

    const countDown = (numbersTime) =>
    {
        calculationsTime(numbersTime, numbersTime[4], numbersTime[5], nameFunctionSeconds);
    }

    window.addEventListener('DOMContentLoaded', () =>
    {
        numbersTime = document.querySelectorAll(".timer-block-ul-li");
        idInterval = setInterval(() => countDown(numbersTime), timeOut);
    });
})

()
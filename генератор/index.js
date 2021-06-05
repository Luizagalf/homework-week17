let numberMinMax = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random()*(max-min+1))+min);
}

let getNumber = () => {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(numberMinMax (-10, 10));
    }

    let min = numbers[0];
    for (number of numbers) {
        if (number < min) {
            min = number;
        }
    }

    let max = numbers[0];
    for (number of numbers) {
        if (number > max) {
            max = number;
        }
    }

    let sum = 0;
    for(number of numbers) {
        sum += number;
    }

    let middle = sum / numbers.length;

    let multiplication = 1;
    for(number of numbers) {
        multiplication *= number;
    }
    

    document.getElementById("generator").value =`Числа: ${numbers}`;
    document.getElementById("min").value = `Минимальное: ${min}`;
    document.getElementById("max").value = `Максимальное: ${max}`;
    document.getElementById("middle").value = `Среднее арифметическое: ${middle}`;
    document.getElementById("sum").value = `Сумма чисел: ${sum}`;
    document.getElementById("multiplication").value = `Произведение чисел: ${multiplication}`;
}


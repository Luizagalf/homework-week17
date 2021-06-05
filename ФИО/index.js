let information = () => {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let patronymic = document.getElementById("patronymic").value

    let smallName = (x) => {
        if (!x) return x;
        let y = parseFloat(x);
        if (Number.isNaN(y) == true) {
            x = x.replace(" ", "");
            return x[0].toUpperCase() + x.slice(1).toLowerCase();
        }
        else return "";
    }

    let result = `Имя: ${smallName(name)}, Фамилия: ${smallName(surname)}, Отчество: ${smallName(patronymic)}`;

    document.getElementById("result").value = result;
    document.getElementById("surname").value = "";
    document.getElementById("name").value = "";
    document.getElementById("patronymic").value = "";
}

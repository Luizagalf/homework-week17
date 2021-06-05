let checkSpam = (str) => {
    if (!str) return str;
    str = str.replace(/viagra/i, "***");
    str = str.replace(/xxx/i, "***");
    return str;
}

let comments = [];
let send = () => {
    let message = document.getElementById("message").value;
    comments.push(checkSpam (message));
    document.getElementById("comments").value = comments.join(" ");
    document.getElementById("message").value = "";
}
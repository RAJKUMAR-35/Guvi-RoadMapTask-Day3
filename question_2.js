// Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    let out = JSON.parse(request.response);
    for (let i = 0; i < out.length; i++) {
        console.log(out[i].flags)
    }
}

// 3. Use the same rest countries and print all countries names, regions, sub-region and populations

let request_1 = new XMLHttpRequest();
request_1.open("GET", "https://restcountries.com/v3.1/all");
request_1.send();

request_1.onload = function () {
    let result = JSON.parse(request_1.response);
    for (let i = 0; i < result.length; i++) {
        console.log('Counter Name: ', result[i].name.common);
        console.log('Region: ', result[i].region);
        console.log('sub-Region: ', result[i].subregion);
        console.log('Population: ', result[i].population);
        console.log("");
    }
}
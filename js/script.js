let jobName = document.getElementById("job");
let button = document.getElementById("btn");


/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
*/

async function getData() {
    let data = await fetch('../lib/OpenJsonData.json');
    let json = await data.json();
}

getData();
function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())// convert a json promise
    .then((data) => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}
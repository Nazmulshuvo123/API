function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => showUserData(data))
}

function showUserData(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    }
   
}


function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => res.json())
    .then((data) => showAlbumsData(data))
}

function showAlbumsData(data){
    const ul = document.getElementById('albums-title')
    for(const albums of data){
        console.log(albums.title);
        const li = document.createElement('li');
        li.innerText = albums.title;
        ul.appendChild(li);
    }
}
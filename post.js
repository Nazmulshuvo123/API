function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => showPostData(data))
}
/**
 * 1. Get the element container where you want to add the new elements
 * 2. Create child elements
 * 3. Set innerText or innerHTML
 * 4. AppendChild
 */

function showPostData(data){
    // console.log(data)
    const postContainer = document.getElementById('post-container')
    for(const post of data){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>UserID : ${post.id} </h3>
            <h4>Title : ${post.title} </h4>
            <p>Post Body: ${post.body} </p>
        `;
        postContainer.appendChild(postDiv);
    }
}

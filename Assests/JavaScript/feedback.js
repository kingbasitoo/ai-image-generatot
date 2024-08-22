const btn = document.querySelector(".btn");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");


btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () =>{
        post.style.display = "none";
        widget.style.display = "block";
    }
    return false;
}
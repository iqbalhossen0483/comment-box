document.getElementById('submit-comment').addEventListener('click', function () {
    //comment feild
    let commentFeild = document.getElementById('write-comment');
    let comment = commentFeild.value;
    //create comment
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.innerText = comment;
    p2.innerHTML = `<i id="close" class="fas fa-times"></i>`;
    //delete comment
    p2.onclick = function (event) {
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }
    h4.appendChild(p1);
    h4.appendChild(p2);

    //add cmment
    let commentArea = document.getElementById('comment-area');
    commentArea.appendChild(h4);

    commentFeild.value = '';
});
//post comment by cliking enter
document.getElementById('write-comment').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit-comment').click();
    }
})
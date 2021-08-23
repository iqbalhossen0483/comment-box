document.getElementById('submit-comment').addEventListener('click', function () {
    //comment feild
    let commentFeild = document.getElementById('comment-field');
    let comment = commentFeild.value;
    //create comment
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.innerText = comment;
    p2.innerHTML = `<i id="close" class="fas fa-times"></i>`;
    //delete comment
    p2.onclick = function (event) {
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }
    if (commentFeild.value === '') {
        console.log(typeof (comment));
        console.log('empty');
        return;
    }

    else {
        console.log(commentFeild.value);
        console.log('not empty');
        div.appendChild(p1);
        div.appendChild(p2);
        //add cmment
        let commentArea = document.getElementById('comment-area');
        commentArea.appendChild(div);
    }

    commentFeild.value = '';
});
//post comment by cliking enter
document.getElementById('comment-field').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit-comment').click();
    }
})
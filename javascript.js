const commentForm = document.getElementById('comment-form');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const submitBtn = document.getElementById('submit-btn');
const commentContainer = document.getElementById('comments-container');

let comments= [];
submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const nameValue=nameInput.value.trim();
    const commentValue=commentInput.value.trim();
    
    if (nameValue==='' || commentValue==='') {
        alert('Please enter your name and comment');
        return;
    }else{

    const comment ={
        name:nameValue,
        comment:commentValue,
        timestamp:new Date().toLocaleString()
    };

    comments.push(comment);
    displayComments();
    nameInput.value='';
    commentInput.value='';
}

});

function displayComments() {
    const commentsHtml = comments.slice(-1).map((comment, index) => {
        return `
        <div class="comment">
        <p class="comment-name">${comment.name}</p>
        <p>${comment.comment}</p>
        <p class="comment-timestamp">${comment.timestamp}</p>
        </div>
        `;

    }).join('');
    commentContainer.innerHTML = commentsHtml;

    setInterval(() => {

        displayComments();
    }, 1000);
}

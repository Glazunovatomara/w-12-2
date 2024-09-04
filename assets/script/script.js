const firstName = document.getElementById('firstName');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const template = document.getElementById('template');
const chatList = document.querySelector('.content__comment_chat');

const showMessage = () => {
    const firstNameValue = firstName.value;
    const avatarValue = avatar.value;
    let commentValue = comment.value;

    const nameRight = firstNameValue[0].toUpperCase() + firstNameValue.slice(1).toLowerCase();

    if ( commentValue.toLowerCase().indexOf('xxx' || commentValue.toLowerCase().indexOf('viagra')) !== -1) {
        commentValue = commentValue.replace(/viagra/ig, '***');
        commentValue = commentValue.replace(/xxx/ig, '***');
    }
    
    const templateNew = template.content.cloneNode(true);
    templateNew.getElementById('img_avatar').src = avatarValue;
    templateNew.getElementById('template_name').textContent = nameRight;
    templateNew.getElementById('template_text').textContent = commentValue;
    chatList.append(templateNew);

    firstName.value = '';
    avatar.value = '';
    comment.value = '';
}

const button = document.getElementById('btn');
button.addEventListener('click', showMessage);

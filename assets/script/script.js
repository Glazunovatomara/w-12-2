const firstName = document.getElementById('firstName');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const template = document.getElementById('template');
const chatList = document.querySelector('.content__comment_chat');


const firstNameValue = firstName.value;
const avatarValue = avatar.value;
const commentValue = comment.value;

const showMessage = () => {
    const nameRight = firstName.value[0].toUpperCase() + firstName.value.slice(1).toLowerCase();

    const templateNew = template.content.cloneNode(true);
    templateNew.getElementById('img_avatar').src = avatar.value;
    templateNew.getElementById('template_name').textContent = nameRight;
    templateNew.getElementById('template_text').textContent = comment.value;
    chatList.append(templateNew);

    firstName.value = '';
    avatar.value = '';
    comment.value = '';
}

const button = document.getElementById('btn');
button.addEventListener('click', showMessage);

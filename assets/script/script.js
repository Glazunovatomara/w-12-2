const firstName = document.getElementById('firstName');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const template = document.getElementById('template');
const chatList = document.querySelector('.content__comment_chat');
const radioNo = document.getElementById('no');
const radioYes = document.getElementById('yes')


//под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;
const hiddenBlock = () => {
    const hidden = document.getElementById('hidden');

    if(radioNo.checked === true) {
        hidden.style.display = 'none'
    } 
};
radioNo.addEventListener('click', hiddenBlock)

const showBlock = () => {
    const hidden = document.getElementById('hidden');

    if(radioYes.checked === true) {
        hidden.style.display = 'flex'
    }
}
radioYes.addEventListener('click', showBlock)

const showMessage = () => {
    let firstNameValue = firstName.value;
    let avatarValue = avatar.value;
    let commentValue = comment.value;

    const currentDate = new Date();

    const options = { 
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day:'numeric',
    };
    const date = currentDate.toLocaleString('ru-RU', options);
    const time = currentDate.toLocaleTimeString('ru-RU');

    if (firstNameValue === '') {
        firstNameValue = 'Username';
    }  else {
        firstNameValue = firstNameValue.charAt(0).toUpperCase() + firstNameValue.slice(1).toLowerCase();
    }

    if (avatarValue === '') {
        let random = Math.ceil(Math.random()*8)
        avatarValue = `./assets/img/${random}.png`
    }

    if (commentValue.toLowerCase().includes('xxx') || commentValue.toLowerCase().includes('viagra')) {
        commentValue = commentValue.replace(/viagra/ig, '***').replace(/xxx/ig, '***');
    }
    
    const templateNew = template.content.cloneNode(true);
    templateNew.querySelector('.template_img').src = avatarValue;
    templateNew.querySelector('.template_name').textContent = firstNameValue;
    templateNew.querySelector('.template_text').textContent = commentValue;
    templateNew.querySelector('.template_date').textContent = `${date.toLowerCase()} ${time}`;
    chatList.append(templateNew); 

    firstName.value = '';
    avatar.value = '';
    comment.value = '';
}

const button = document.getElementById('btn');
button.addEventListener('click', showMessage);
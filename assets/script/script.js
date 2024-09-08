const firstName = document.getElementById('firstName');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const template = document.getElementById('template');
const chatList = document.querySelector('.content__comment_chat');
const radio = document.getElementById('no');

const hiddenBlock = () => {
    const hidden = document.getElementById('hidden');

    if(radio.checked === true) {
        hidden.style.display = 'none'
    } else {
        hidden.style.display = 'flex'
    }
};

radio.addEventListener('click', hiddenBlock())


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
    templateNew.getElementById('img_avatar').src = avatarValue;
    templateNew.getElementById('template_name').textContent = firstNameValue;
    templateNew.getElementById('template_text').textContent = commentValue;
    templateNew.getElementById('date').textContent = `${date.toLowerCase()} ${time}`;
    chatList.append(templateNew); 

    firstName.value = '';
    avatar.value = '';
    comment.value = '';
}

const button = document.getElementById('btn');
button.addEventListener('click', showMessage);

//под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;

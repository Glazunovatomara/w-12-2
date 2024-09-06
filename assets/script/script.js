const firstName = document.getElementById('firstName');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const template = document.getElementById('template');
const chatList = document.querySelector('.content__comment_chat');

const showMessage = () => {
    const firstNameValue = firstName.value;
    const avatarValue = avatar.value;
    let commentValue = comment.value;

    const currentDate = new Date();

    const options = { weekday: 'short'};
    const toDayOfWeek = currentDate.toLocaleString('ru-RU', options);

    const date = currentDate.getDate();
    const month = currentDate.getMonth();

    if (month === 0) {
        currentMonth = '01';
    } else if (month === 1) {
        currentMonth = '02';
    } else if (month === 2) {
        currentMonth = '03';
    } else if (month === 3) {
        currentMonth = '04';
    } else if (month === 4) {
        currentMonth = '05';
    } else if (month === 5) {
        currentMonth = '06';
    } else if (month === 6) {
        currentMonth = '07';
    } else if (month === 7) {
        currentMonth = '08';
    } else if (month === 8) {
        currentMonth = '09';
    } else if (month === 9) {
        currentMonth = '10';
    } else if (month === 10) {
        currentMonth = '11';
    } else if (month === 11) {
        currentMonth = '12';
    } else {
        currentMonth = 'Неизвестный месяц';
    }

    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const min = currentDate.getMinutes();


    const nameRight = firstNameValue[0].toUpperCase() + firstNameValue.slice(1).toLowerCase();

    if (commentValue.toLowerCase().includes('xxx') || commentValue.toLowerCase().includes('viagra')) {
        commentValue = commentValue.replace(/viagra/ig, '***').replace(/xxx/ig, '***');
    }
    
    const templateNew = template.content.cloneNode(true);
    templateNew.getElementById('img_avatar').src = avatarValue;
    templateNew.getElementById('template_name').textContent = nameRight;
    templateNew.getElementById('template_text').textContent = commentValue;
    templateNew.getElementById('date').textContent = `${toDayOfWeek.toUpperCase()} ${date}.${currentMonth}.${year}, ${hours}:${min}`;
    chatList.append(templateNew);

    firstName.value = '';
    avatar.value = '';
    comment.value = '';
}

const button = document.getElementById('btn');
button.addEventListener('click', showMessage);

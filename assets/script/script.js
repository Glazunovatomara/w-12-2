const firstName = document.getElementById('firstName');
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');

const firstNameValue = firstName.value;
const avatarValue = avatar.value;
const commentValue = comment.value;

const showMessage = () => {
    const nameRight = firstName.value[0].toUpperCase() + firstName.value.slice(1).toLowerCase();

    alert(nameRight);

    function checkSpam(avatarValue) {
        if(comment.value.includes(viagra) != false) {
            return comment.value.replace(/viagra/gi, '***'); 
        }
        if(comment.value.includes(xxx) != false) {
            return comment.value.replace(/xxx/gi, '***'); 
        }
    }
//alert(checkSpam())
    alert(avatar.value);


    firstName.value = '';
    avatar.value = '';
    comment.value = '';
}

const button = document.getElementById('btn');
button.addEventListener('click', showMessage);

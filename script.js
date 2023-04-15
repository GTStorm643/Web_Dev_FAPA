const data = new Array()

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

console.log(data)
data.forEach((contato)=>{incluirLinhaTabela(contato)})

function addRegistration() {
    let contato = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password2').value
    }
    document.getElementById('username').value = ''
    document.getElementById('email').value= ''
    document.getElementById('password2').value = ''
    data.push(contato)
    incluirLinhaTabela(contato)
    console.log(data)
}

function incluirLinhaTabela(user) {

    const tr = document.createElement('tr');
    console.log(tr)
    const td1 = document.createElement('td')
    td1.innerText = user.name
    const td2 = document.createElement('td')
    td2.innerText = user.email
    const td3 = document.createElement('td')
    td3.innerText = user.password

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    console.log(tr)
    document.getElementById('bodyAgenda').appendChild(tr)
    td1.classList.add('bold')    
}

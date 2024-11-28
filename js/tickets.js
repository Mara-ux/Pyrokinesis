const TOKEN = '7745480054:AAGLL4zuq502YksSXBewPtO4sZusWeLC_aU';
const CHAT_ID = '-4714147127';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector('.succes');
const error = document.querySelector('.error');


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = 'Санкт-Петербург Юбилейный 13.04.25\n' + 'ФИО: ' + this.name.value + '\n' +  'Номер телефона: ' + this.phone.value + '\n' + 'Промокод: ' + this.gift.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        succes.classList.remove('disp');
    })
    .catch((err) => {
        error.classList.remove('err');
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    })
})

document.getElementById('form2').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = 'Москва ЦСКА Арена 16.05.25\n' + 'ФИО: ' + this.name.value + '\n' +  'Номер телефона: ' + this.phone.value + '\n' + 'Промокод: ' + this.gift.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        succes.classList.remove('disp');
    })
    .catch((err) => {
        error.classList.remove('err');
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    })
})
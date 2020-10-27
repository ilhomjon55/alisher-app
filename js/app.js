/* // LESSON - 1 =========================================================

var welcome = 'Let`s get started!';
alert(welcome);
var userName = prompt('Please enter your name:');
var userLastName = prompt('Please enter your lastname:');
var userAge = prompt('Please enter your age:');
var userEducation = prompt('Please enter your education:');
var userTelegramLink = prompt('Please enter your telegram link:');

console.log('New client: ' + userName + ' ' + userLastName +
    '\nAge: ' + userAge +
    '\nAge: ' + userEducation
    var message = `Yangi foydalanuvchi ro'yxatdan o'tdi.
Ism: ${name} ${surname}
Yosh: ${age}
Kasb/O'qish: ${jobOrStudy}
Telegram: ${telegramHandle}
Ishonchingiz uchun rahmat.`; */


// LESSON 2 ===============================================================

// WELCOMING
var clientName = `Alisher`;
var welcomeClient = `Welcome ${clientName} to our travel agency!`;
alert(welcomeClient);

// CURRENCY
var dollar = 9433.34;
var euro = 10354.03;

// TRIP INFO
var flyExpense = 500 * dollar;
var hotelExpense = 250 * dollar;
var museumExpense = 120 * euro;
var travelExpenses = flyExpense + hotelExpense + museumExpense;

var travelExpensesShower = document.querySelector('.result-expenses');
travelExpensesShower.textContent = `Overall expenses: ${travelExpenses} UZS`;

var budgetRequest = parseFloat(prompt(`Please ${clientName}, enter your budget in UZS`).trim(), 10);

var budgetShower = document.querySelector('.result-budget');
budgetShower.textContent = `Your budget: ${budgetRequest} UZS`;

var resultBox = document.querySelector('.result-box');
var resultShower = document.querySelector('.result-shower');

if (budgetRequest >= travelExpenses) {
  resultShower.textContent = `${clientName}, your budget is enough for the trip! 😊`;
  resultBox.classList.add('alert-success');
} else {
  resultShower.textContent = `Sorry ${clientName}, your budget is not enough for the trip! 😞`;
  resultBox.classList.add('alert-danger');
}
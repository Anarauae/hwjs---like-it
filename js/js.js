//// ----------HOME WORK----------------
//// ---------------1------------------
let numb = prompt("Введите число")
if (numb % 2 === 0) {
  console.log("Четное число")
} else {
  console.log("Нечетное число")
}

//// -- -- -- -- -- -- -- - 2-- -- -- -- -- -- -- -- --
let month = prompt("Напишите название месяца, и мы определим к какому сезону он пренадлежит")
if (month == 'январь') {
  alert(`${month} - Зима`)
} else if (month == 'февраль') {
  alert(`${month} - Зима`)
} else if (month == 'декабрь') {
  alert(`${month} - Зима`)
} else if (month == 'март') {
  alert(`${month} - Весна`)
} else if (month == 'апрель') {
  alert(`${month} - Весна`)
} else if (month == 'май') {
  alert(`${month} - Весна`)
} else if (month == 'июнь') {
  alert(`${month} - Лето`)
} else if (month == 'июль') {
  alert(`${month} - Лето`)
} else if (month == 'август') {
  alert(`${month} - Лето`)
} else if (month == 'сентябрь') {
  alert(`${month} - Осень`)
} else if (month == 'октябрь') {
  alert(`${month} - Осень`)
} else if (month == 'ноябрь') {
  alert(`${month} - Осень`)
}
// //---------------3------------------
let userYear = prompt("Ваш год рождения: ")
let cycle = 12

if (userYear % cycle === 0) {
  alert("Ваш знак зодиака по китайскому гороскопу: Обезьяна")
} else if (userYear % cycle === 1) {
  alert("Ваш знак зодиака по китайскому гороскопу: Петух")
} else if (userYear % cycle === 2) {
  alert("Ваш знак зодиака по китайскому гороскопу: Собака")
} else if (userYear % cycle === 3) {
  alert("Ваш знак зодиака по китайскому гороскопу: Кабан")
} else if (userYear % cycle === 4) {
  alert("Ваш знак зодиака по китайскому гороскопу: Крыса")
} else if (userYear % cycle === 5) {
  alert("Ваш знак зодиака по китайскому гороскопу: Бык")
} else if (userYear % cycle === 6) {
  alert("Ваш знак зодиака по китайскому гороскопу: Тигр")
} else if (userYear % cycle === 7) {
  alert("Ваш знак зодиака по китайскому гороскопу: Кролик")
} else if (userYear % cycle === 8) {
  alert("Ваш знак зодиака по китайскому гороскопу: Дракон")
} else if (userYear % cycle === 9) {
  alert("Ваш знак зодиака по китайскому гороскопу: Змея")
} else if (userYear % cycle === 10) {
  alert("Ваш знак зодиака по китайскому гороскопу: Лошадь")
} else if (userYear % cycle === 11) {
  alert("Ваш знак зодиака по китайскому гороскопу: Коза")
} else {
  console.log("Год рождения введен не правильно")
}
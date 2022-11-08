

// Витончені дражнилки
// Удоскональте генератор дражнилок, щоб він створював дражнинилки такого типу: "У тебе [частина тіла] ще більш [прикметник], ніж [частина тіла тварини] у [тварини]".

const randomBodyParts = ["голова", "нога", "рукa"];
const randomAnimalBodyParts = ["хвіст", "кігті", "паща"];
const randomAdjectives = ["велика", "страшна", "крива"];
const randomAnimals = ["крокодила", "бобра", "горили", "страуса", "щура"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

const randomInsult = `У тебе ${randomBodyPart} ще більш ${randomAdjective} ніж ${randomAnimalBodyPart} у ${randomAnimal} !!!`;
console.log(randomInsult);


// Оператор + чи join?
// Зробіть дві версії свого генератора дражнилок: одна нехай використовує для складання дражнилки оператор +, а інша створює масив зі словами і з'єднує їх через пробіл за допомогою join. Який варіант вам більше подобається і чому?


const randomBodyParts2 = ["голова", "нога", "рукa"];
const randomAnimalBodyParts2 = ["хвіст", "кігті", "паща"];
const randomAdjectives2 = ["велика", "страшна", "крива"];
const randomAnimals2 = ["крокодила", "бобра", "горили", "страуса", "щура"];

let randomBodyPart2 = randomBodyParts2[Math.floor(Math.random() * randomBodyParts2.length)];
let randomAnimalBodyPart2 = randomAnimalBodyParts2[Math.floor(Math.random() * randomAnimalBodyParts2.length)];
let randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];
let randomAnimal2 = randomAnimals2[Math.floor(Math.random() * randomAnimals2.length)];

const randomRezult = ["У тебе", randomBodyPart2, "ще більш", randomAdjective2, "ніж", randomAnimalBodyPart2, "у", randomAnimal2, "!!!"].join(' ');
console.log(randomRezult);



// З'єднання чисел
// Як за допомогою методу join перетворити масив [3, 2, 1] на рядок "3 більше, ніж 2 більше, ніж 1"?

const number = [3, 2, 1].join(" більше, ніж ");
console.log(number);


// Підрахунок очок
// Уявіть, що ви граєте в якусь гру зі своїми друзями і вам потрібно вести рахунок. Створіть для цього об'єкт і назвіть його scores. Нехай ключами будуть імена ваших друзів, а значеннями - набрані ними очки (0 або більше). Рахунок гравців треба буде збільшувати в міру того, як вони заробляють нові очки. Як ви будете змінювати рахунок гравця, що зберігається в об'єкті scores?

const scores = {
	Oleg: 0,
	Anna: 0,
	Maks: 0,
};

scores.Oleg += 50;
scores.Anna += 100;
scores.Maks += 30;

console.log(scores);


// Углиб об'єктів і масивів
// Нехай у вас є такий об'єкт:

const myCrazyObject = {
	"name": "Безглуздий об'єкт",
	"some array": [7, 9, { purpose: "плутанина", number: 123 }, 3.3],
	"random animal": "Бананова акула"
};
// Як одним рядком JavaScript-коду витягти з цього об'єкта число 123? Перевірте своє рішення, запустивши його в консолі.

console.log(myCrazyObject["some array"][2].number);

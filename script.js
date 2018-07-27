// let number = 5;

// // console.log('hello');

// // alert('Hello')

// // let answer = confirm("Вам 18 лет?");
// let answer = prompt("Вам 18 лет?");

// console.log(answer);



// let answers = [],
// 	questions = [
// 	"Как ваше имя?",
// 	"Как ваша фамилия?",
// 	"Сколько вам лет?"
// 	];

// for(let i = 0; questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers)

// let age = prompt("Сколько вам лет");



// if (age > 18) {
// 	alert("Вы можете войти!")
// } else {
// 	alert("Рановато ещё!")
// }


// function humanSayHello(obj) {
// 	document.write("Hello " + obj + "!")
// }
// humanSayHello("Ivan");
// humanSayHello("Anna");
// humanSayHello("Egor");


// function calc(a,b) {
// 	console.log(a + b)
// };

// calc(4,5);
// calc(5,5);
// calc(5,15);


function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name +  " и это моя первая программа");

	function showSkills() {
		let skills = [ 
		'photoshop', 
		'html', 
		'css' 
		];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Тебе есть 18, ты проходишь!")
		} else {
			alert("Тебе нет 18, ты не проходишь!")
		}
	}

	function calcPow(num) {
 		alert(num + " в квадрате = " + num*num)
	}
	calcPow(4)
}

myFirstApp("Artur", 35)
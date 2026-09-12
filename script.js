let savedSkills = JSON.parse(localStorage.getItem("skills")) || ["HTML", "CSS", "Javascript", "python"];

const grid = document.querySelector(".grid");

savedSkills.forEach(function(skill) {
  const skillCard = document.createElement("div");
  skillCard.textContent = skill;
  skillCard.className = "bg-white p-5 rounded-lg text-center shadow hover:scale-105 transition";
  grid.appendChild(skillCard);
});
console.log("Hello, Priscilla!");
let name= "Priscilla";
console.log(name);
let age= 20;

if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're a minor.");
}
for (let i=1; i <= 5; i++ ) {
    console.log(i);
}

function greet(personName) {
  console.log(`Hello, ${personName}!`);
}

greet("Priscilla");
greet("Joshua");

function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5, 3);
console.log(result);

const evenOdd = (number) => {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOdd(4));
console.log(evenOdd(7));

let skills= ["HTML", "CSS", "Javascript", "Python"];
console.log(skills);

let [first, second] = skills;
console.log(first);
console.log(second);
console.log(skills[2]);
console.log(skills[3]);

console.log(skills.length);

skills.push("React");
console.log(skills);

console.log(skills.includes("CSS"));
console.log(skills.includes("Java"));

skills.forEach(function(skill) {
    console.log(skill);
})

let moreSkills = [...skills, "TypeScript", "SQL"];
console.log(moreSkills);

let numbers = [4, 8, 15, 16, 23, 42];
function sumNumbers(arr) {
  let total = 0;
  
arr.forEach(function(num) {
  total += num;
});
  
  return total;
}
console.log(sumNumbers(numbers));

function findMax (arr) {
  let max = arr [0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(numbers))


function countVowels (word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
  }
 
console.log(countVowels("Priscilla"));
console.log(countVowels("Apple"));

function reverseString(word) {
  let reversed = "";

  for(let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const heading = document.getElementById("page-heading");
console.log(heading);

heading.textContent = "Welcome, Priscilla";

heading.addEventListener("click", function() {
  heading.textContent = "you clicked me!";
})



const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", function() {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", function() {
  modal.style.display ="none";
});

const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill-btn");

addSkillBtn.addEventListener("click", function() {
  const skillValue = skillInput.value;

  savedSkills.push(skillValue);
  localStorage.setItem("skills", JSON.stringify(savedSkills));
  
  const newSkill = document.createElement("div");
  newSkill.textContent = skillValue;
  newSkill.className =  "bg-white p-5 rounded-lg text-center shadow hover:scale-105 transition";

  grid.appendChild(newSkill);

  skillInput.value = "";

});

localStorage.setItem("username", "Priscilla");
console.log(localStorage.getItem("username"));

function getNewJoke() {
fetch("https://api.chucknorris.io/jokes/random")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById("joke-text").textContent = data.value;
  })
   .catch(function(error) {
    document.getElementById("joke-text").textContent = "Couldn't load a joke. Try again!";
    console.log(error);
  });
  }
 
getNewJoke();


const newJokeBtn = document.getElementById("new-joke-btn");

newJokeBtn.addEventListener("click", function() {
  getNewJoke();
});


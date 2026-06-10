const foods = {

pizza:{
name:"Pizza",
calories:285,
protein:"12g",
carbs:"36g",
fat:"10g",
health:55,
swap:"Try a roasted vegetable flatbread on wholegrain crust for more fibre and nutrients while still keeping the flavour of pizza.",
swapImage:"images/healthy-flatbread.jpg",
image:"images/pizza.jpg"
},

burger:{
name:"Burger",
calories:354,
protein:"17g",
carbs:"29g",
fat:"18g",
health:40,
swap:"Try swapping for a grilled turkey burger with avocado and lettuce, which provides leaner protein and healthier fats.",
swapImage:"images/turkey-burger.jpg",
image:"images/burger.jpg"
},

salad:{
name:"Salad",
calories:120,
protein:"5g",
carbs:"10g",
fat:"4g",
health:95,
swap:"Already healthy! Try a quinoa nourish bowl with roasted vegetables and chickpeas for additional protein and fibre.",
swapImage:"images/quinoa-bowl.jpg",
image:"images/salad.jpg"
},

apple:{
name:"Apple",
calories:95,
protein:"0.5g",
carbs:"25g",
fat:"0.3g",
health:98,
swap:"Already healthy! Try pairing apples with peanut butter and yoghurt for a more balanced nutritious snack.",
swapImage:"images/apple-peanutbutter.jpg",
image:"images/apple.jpg"
},

fries:{
name:"Fries",
calories:365,
protein:"4g",
carbs:"48g",
fat:"17g",
health:30,
swap:"Try swapping to baked sweet potato wedges which contain more fibre and micronutrients than regular fries.",
swapImage:"images/sweet-potato-fries.jpg",
image:"images/fries.jpg"
},

friedChicken:{
name:"Fried Chicken",
calories:420,
protein:"28g",
carbs:"15g",
fat:"27g",
health:35,
swap:"Try a grilled herb chicken with roasted vegetables, which offers high protein with far less saturated fat.",
swapImage:"images/herb-chicken-veggies.jpg",
image:"images/fried-chicken.jpg"
},

proteinShake:{
name:"Protein Shake",
calories:220,
protein:"30g",
carbs:"12g",
fat:"5g",
health:90,
swap:"Already healthy! But try a berry smoothie bowl with oats, chia seeds and yoghurt, which provides extra fibre and antioxidants with a similiar taste!.",
swapImage:"images/berry-smoothie-bowl.jpg",
image:"images/protein-shake.jpg"
},

iceCream:{
name:"Ice Cream",
calories:270,
protein:"5g",
carbs:"31g",
fat:"14g",
health:45,
swap:"Swap it to frozen Greek yoghurt topped with berries! This provides more protein and less added sugar and still tastes delcious.",
swapImage:"images/frozen-yoghurt.jpg",
image:"images/ice-cream.jpg"
},

sushi:{
name:"Sushi",
calories:210,
protein:"15g",
carbs:"28g",
fat:"5g",
health:88,
swap:"Already pretty healthy but try a salmon poke bowl with brown rice and edamame, as it offers more fibre and omega-3 healthy fats.",
swapImage:"images/salmon-poke-bowl.jpg",
image:"images/sushi.jpg"
},

steak:{
name:"Steak",
calories:320,
protein:"35g",
carbs:"0g",
fat:"20g",
health:75,
swap:"Instead of just steak try lean beef strips with quinoa and leafy greens to create a more balanced protein-rich meal!",
swapImage:"images/beef-quinoa-greens.jpg",
image:"images/steak.jpg"
}

};

function analyseFood(){

const selected =
document.getElementById("foodSelect").value;

if(selected === ""){

alert("Please select a food.");
return;

}

const food = foods[selected];

document.getElementById("foodName").innerText =
food.name;

document.getElementById("calories").innerText =
food.calories + " kcal";

document.getElementById("protein").innerText =
food.protein;

document.getElementById("carbs").innerText =
food.carbs;

document.getElementById("fat").innerText =
food.fat;

document.getElementById("healthScore").innerText =
food.health + "%";

document.getElementById("healthySwap").innerText =
food.swap;

document.getElementById("foodImage").src =
food.image;

document.getElementById("swapImage").src =
food.swapImage;

const degrees =
(food.health / 100) * 360;

document.querySelector(".progress-ring").style.background =
`conic-gradient(
#52b788 0deg,
#52b788 ${degrees}deg,
#d8f3dc ${degrees}deg
)`;

}

let waterChart;
let calorieChart;
let sleepChart;

function saveWater(){

const water =
parseInt(document.getElementById("waterInput").value);

const target =
parseInt(document.getElementById("waterTarget").value);

if(!water || !target){

alert("Please enter valid values.");
return;

}

localStorage.setItem("water",water);
localStorage.setItem("waterTarget",target);

document.getElementById("waterResult").innerText =
water + " Glasses";

const percentage =
(water / target) * 100;

document.getElementById("waterProgress").style.width =
percentage + "%";

updateCharts();

}

function saveCalories(){

const calories =
parseInt(document.getElementById("calorieInput").value);

const target =
parseInt(document.getElementById("calorieTarget").value);

if(!calories || !target){

alert("Please enter valid values.");
return;

}

localStorage.setItem("calories",calories);
localStorage.setItem("calorieTarget",target);

document.getElementById("calorieResult").innerText =
calories + " kcal";

const percentage =
(calories / target) * 100;

document.getElementById("calorieProgress").style.width =
percentage + "%";

updateCharts();

}

function saveSleep(){

const sleep =
parseInt(document.getElementById("sleepInput").value);

const target =
parseInt(document.getElementById("sleepTarget").value);

if(!sleep || !target){

alert("Please enter valid values.");
return;

}

localStorage.setItem("sleep",sleep);
localStorage.setItem("sleepTarget",target);

document.getElementById("sleepResult").innerText =
sleep + " Hours";

const percentage =
(sleep / target) * 100;

document.getElementById("sleepProgress").style.width =
percentage + "%";

updateCharts();

}

function createCharts(){

const waterCanvas =
document.getElementById("waterChart");

const calorieCanvas =
document.getElementById("calorieChart");

const sleepCanvas =
document.getElementById("sleepChart");

if(waterCanvas){

waterChart = new Chart(waterCanvas,{

type:'doughnut',

data:{
labels:['Consumed','Remaining'],
datasets:[{
data:[
localStorage.getItem("water") || 0,
(localStorage.getItem("waterTarget") || 10) - (localStorage.getItem("water") || 0)
]
}]
},

options:{
responsive:true,
plugins:{
legend:{
display:true
}
}
}

});

}

if(calorieCanvas){

calorieChart = new Chart(calorieCanvas,{

type:'bar',

data:{
labels:['Calories'],
datasets:[{
label:'Calories',
data:[
localStorage.getItem("calories") || 0
]
}]
},

options:{
responsive:true
}

});

}

if(sleepCanvas){

sleepChart = new Chart(sleepCanvas,{

type:'line',

data:{
labels:['Sleep'],
datasets:[{
label:'Hours',
data:[
localStorage.getItem("sleep") || 0
]
}]
},

options:{
responsive:true
}

});

}

}

function updateCharts(){

if(waterChart){
waterChart.destroy();
}

if(calorieChart){
calorieChart.destroy();
}

if(sleepChart){
sleepChart.destroy();
}

createCharts();

}

if(document.getElementById("waterChart")){
createCharts();
}

function filterMeals(){

const value =
document.getElementById("dietSelect").value;

const meals =
document.querySelectorAll(".meal-card");

meals.forEach(meal => {

if(value === "all"){

meal.style.display = "block";

}

else if(meal.classList.contains(value)){

meal.style.display = "block";

}

else{

meal.style.display = "none";

}

});

}

function toggleRecipe(recipeId){

const recipe =
document.getElementById(recipeId);

if(recipe.style.display === "block"){

recipe.style.display = "none";

}

else{

recipe.style.display = "block";

}

}

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target =
+counter.getAttribute('data-target');

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(updateCounter,20);

}

else{

counter.innerText = target;

}

}

updateCounter();

});

const darkToggle =
document.getElementById("darkModeToggle");

if(darkToggle){

darkToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

darkToggle.innerHTML = "☀️";

}

else{

localStorage.setItem("theme","light");

darkToggle.innerHTML = "🌙";

}

});

}

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark-mode");

if(darkToggle){

darkToggle.innerHTML = "☀️";

}

}
// ===== Healthy Eating Page Interactions =====

// toggle expand/collapse for cards
function toggleCard(card) {
    const text = card.querySelector(".hidden-text");

    if (text.style.display === "block") {
        text.style.display = "none";
    } else {
        text.style.display = "block";
    }
}


// ===== Simple Quiz System =====
const quizQuestions = [
    {
        question: "Which nutrient is the body's main energy source?",
        options: ["Protein", "Carbohydrates", "Fats"],
        answer: "Carbohydrates"
    },
    {
        question: "Which food is high in protein?",
        options: ["Chicken", "Candy", "Soda"],
        answer: "Chicken"
    },
    {
        question: "Which is a healthy fat?",
        options: ["Avocado", "Lollies", "Soft drink"],
        answer: "Avocado"
    }
];

let quizIndex = 0;

function startQuiz() {
    const q = quizQuestions[quizIndex];

    const userAnswer = prompt(
        q.question + "\n" +
        q.options.join(", ")
    );

    if (userAnswer === q.answer) {
        document.getElementById("quizResult").innerText = "Correct!";
    } else {
        document.getElementById("quizResult").innerText = "Not quite — answer: " + q.answer;
    }

    quizIndex++;
    if (quizIndex >= quizQuestions.length) quizIndex = 0;
}


// ===== Healthy swaps =====
function generateSwap() {
    const swaps = [
        "Chips → Air-popped popcorn",
        "Soft drink → Sparkling water",
        "Ice cream → Greek yoghurt",
        "White bread → Wholegrain bread",
        "Chocolate → Dark chocolate"
    ];

    const random = swaps[Math.floor(Math.random() * swaps.length)];
    document.getElementById("swapResult").innerText = random;
}

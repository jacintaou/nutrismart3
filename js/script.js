const foods = {

pizza:{
name:"Pizza",
calories:285,
protein:"12g",
carbs:"36g",
fat:"10g",
health:55,
swap:"Try a roasted vegetable flatbread on wholegrain crust for more fibre and nutrients.",
swapImage:"https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop"
},

burger:{
name:"Burger",
calories:354,
protein:"17g",
carbs:"29g",
fat:"18g",
health:40,
swap:"A grilled turkey burger with lettuce and avocado provides leaner protein and healthier fats.",
swapImage:"https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop"
},

salad:{
name:"Salad",
calories:120,
protein:"5g",
carbs:"10g",
fat:"4g",
health:95,
swap:"Try a quinoa nourish bowl with chickpeas and roasted vegetables for extra protein and fibre.",
swapImage:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop"
},

apple:{
name:"Apple",
calories:95,
protein:"0.5g",
carbs:"25g",
fat:"0.3g",
health:98,
swap:"Pair apples with almond butter and nuts for a more balanced healthy snack.",
swapImage:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1400&auto=format&fit=crop"
},

fries:{
name:"Fries",
calories:365,
protein:"4g",
carbs:"48g",
fat:"17g",
health:30,
swap:"Sweet potato wedges baked in olive oil contain more fibre and nutrients.",
swapImage:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1400&auto=format&fit=crop"
},

friedChicken:{
name:"Fried Chicken",
calories:420,
protein:"28g",
carbs:"15g",
fat:"27g",
health:35,
swap:"Grilled herb chicken with vegetables provides high protein with less saturated fat.",
swapImage:"https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1400&auto=format&fit=crop"
},

proteinShake:{
name:"Protein Shake",
calories:220,
protein:"30g",
carbs:"12g",
fat:"5g",
health:90,
swap:"Try a berry yoghurt smoothie with oats and chia seeds for additional fibre.",
swapImage:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1400&auto=format&fit=crop"
},

iceCream:{
name:"Ice Cream",
calories:270,
protein:"5g",
carbs:"31g",
fat:"14g",
health:45,
swap:"Frozen Greek yoghurt with fruit offers more protein and less added sugar.",
swapImage:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1400&auto=format&fit=crop"
},

sushi:{
name:"Sushi",
calories:210,
protein:"15g",
carbs:"28g",
fat:"5g",
health:88,
swap:"Try salmon poke bowls with brown rice and edamame for extra fibre and omega-3 fats.",
swapImage:"https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1400&auto=format&fit=crop"
},

steak:{
name:"Steak",
calories:320,
protein:"35g",
carbs:"0g",
fat:"20g",
health:75,
swap:"Lean beef strips with quinoa and greens provide a balanced high-protein option.",
swapImage:"https://images.unsplash.com/photo-1600891963935-c1b4b11d3f3b?q=80&w=1400&auto=format&fit=crop",
image:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
}

};

function analyseFood(){

const selected = document.getElementById("foodSelect").value;

if(selected === ""){
alert("Please select a food.");
return;
}

const food = foods[selected];

document.getElementById("foodName").innerText = food.name;
document.getElementById("calories").innerText = food.calories + " kcal";
document.getElementById("protein").innerText = food.protein;
document.getElementById("carbs").innerText = food.carbs;
document.getElementById("fat").innerText = food.fat;
document.getElementById("healthScore").innerText = food.health + "%";
document.getElementById("healthySwap").innerText = food.swap;

document.getElementById("foodImage").src = food.image;
document.getElementById("swapImage").src = food.swapImage;

const degrees = (food.health / 100) * 360;

document.querySelector(".progress-ring").style.background =
`conic-gradient(
#52b788 0deg,
#52b788 ${degrees}deg,
#d8f3dc ${degrees}deg
)`;

}

function saveWater(){

const water =
document.getElementById("waterInput").value;

const target =
document.getElementById("waterTarget").value;

localStorage.setItem("water",water);

document.getElementById("waterResult").innerText =
water + " Glasses";

const percentage = (water / target) * 100;

document.getElementById("waterProgress").style.width =
percentage + "%";

location.reload();

}

function saveCalories(){

const calories =
document.getElementById("calorieInput").value;

const target =
document.getElementById("calorieTarget").value;

localStorage.setItem("calories",calories);

document.getElementById("calorieResult").innerText =
calories + " kcal";

const percentage = (calories / target) * 100;

document.getElementById("calorieProgress").style.width =
percentage + "%";

location.reload();

}

function saveSleep(){

const sleep =
document.getElementById("sleepInput").value;

const target =
document.getElementById("sleepTarget").value;

localStorage.setItem("sleep",sleep);

document.getElementById("sleepResult").innerText =
sleep + " Hours";

const percentage = (sleep / target) * 100;

document.getElementById("sleepProgress").style.width =
percentage + "%";

location.reload();

}

let waterChart;
let calorieChart;
let sleepChart;

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
10 - (localStorage.getItem("water") || 0)
]
}]
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
}
});

}

}

createCharts();

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

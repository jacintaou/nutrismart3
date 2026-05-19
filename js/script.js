const foods = {

  pizza: {
    name: "Pizza",
    calories: 285,
    protein: "12g",
    carbs: "36g",
    fat: "10g",
    health: 55,
    swap: "Wholegrain vegetable pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
  },

  burger: {
    name: "Burger",
    calories: 354,
    protein: "17g",
    carbs: "29g",
    fat: "18g",
    health: 40,
    swap: "Lean turkey burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
  },

  salad: {
    name: "Salad",
    calories: 120,
    protein: "5g",
    carbs: "10g",
    fat: "4g",
    health: 95,
    swap: "Already healthy!",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
  }

};

function analyseFood(){

  const selected = document.getElementById("foodSelect").value;

  const food = foods[selected];

  document.getElementById("foodName").innerText = food.name;
  document.getElementById("calories").innerText = food.calories;
  document.getElementById("protein").innerText = food.protein;
  document.getElementById("carbs").innerText = food.carbs;
  document.getElementById("fat").innerText = food.fat;
  document.getElementById("healthScore").innerText = food.health + "/100";
  document.getElementById("healthySwap").innerText = food.swap;
  document.getElementById("foodImage").src = food.image;

  document.getElementById("ratingFill").style.width = food.health + "%";
}

function saveWater(){

  const water = document.getElementById("waterInput").value;

  localStorage.setItem("water", water);

  document.getElementById("waterResult").innerText =
    water + " Glasses";
}

function saveCalories(){

  const calories = document.getElementById("calorieInput").value;

  localStorage.setItem("calories", calories);

  document.getElementById("calorieResult").innerText =
    calories + " kcal";
}

function saveSleep(){

  const sleep = document.getElementById("sleepInput").value;

  localStorage.setItem("sleep", sleep);

  document.getElementById("sleepResult").innerText =
    sleep + " Hours";
}

const chartCanvas = document.getElementById("healthChart");

if(chartCanvas){

  new Chart(chartCanvas, {

    type: 'bar',

    data: {
      labels: ['Water', 'Calories', 'Sleep'],

      datasets: [{
        label: 'Health Metrics',

        data: [
          localStorage.getItem("water") || 0,
          localStorage.getItem("calories") || 0,
          localStorage.getItem("sleep") || 0
        ]
      }]
    }
  });
}

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    } else {

      counter.innerText = target;
    }
  }

  updateCounter();
});

const darkToggle = document.getElementById("darkModeToggle");

if(darkToggle){

  darkToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

  });
}

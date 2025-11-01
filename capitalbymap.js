let score = 0;
let questionCount = 0;
let selectedList = [];
const totalQuestions = 10;
let result = document.getElementById("result");
const lists = {
  easy: [
    {
        name: "United States", 
        code: "us",
        capital: "Washington, D.C."
    },
    {
        name: "United Kingdom", 
        code: "gb",
        capital: "London"
    },
    {
        name: "Canada", 
        code: "ca",
        capital: "Ottawa"
    },
    {
        name: "China", 
        code: "cn",
        capital: "Beijing"
    },
    {
        name: "France", 
        code: "fr",
        capital: "Paris"
    },
    {
        name: "Germany", 
        code: "de",
        capital: "Berlin"
    },
    {
        name: "Australia", 
        code: "au",
        capital: "Canberra"
    },
    {
        name: "Japan", 
        code: "jp",
        capital: "Tokyo"
    },
    {
        name: "India", 
        code: "in",
        capital: "New Delhi"
    },
    {
        name: "Brazil", 
        code: "br",
        capital: "Brasília"
    },
    {
        name: "Mexico", 
        code: "mx",
        capital: "Mexico City"
    },
    {
        name: "Spain", 
        code: "es",
        capital: "Madrid"
    },
    {
        name: "Netherlands", 
        code: "nl",
        capital: "Amsterdam"
    },
    {
        name: "Argentina", 
        code: "ar",
        capital: "Buenos Aires"
    },
    {
        name: "Sweden", 
        code: "se",
        capital: "Stockholm"
    },
    {
        name: "Turkey", 
        code: "tr",
        capital: "Ankara"
    },
    {
        name: "Russia", 
        code: "ru",
        capital: "Moscow"
    },
    {
      name: "South Korea", 
      code: "kr",
      capital: "Seoul"
    },
    { 
      name: "Austria", 
      code: "at" ,
        capital: "Vienna"
    },
  ],
  medium: [ 
    { 
        name: "South Africa",
        code: "za",
        capital: "Pretoria"
    }, 
    {
        name: "Philippines",
        code: "ph",
        capital: "Manila"
    },
    {
        name: "Colombia",
        code: "co",
        capital: "Bogotá"
    },
    {
        name: "Vietnam",
        code: "vn",
        capital: "Hanoi"
    },
    {
        name: "Egypt",
        code: "eg",
        capital: "Cairo"
    },
    {
        name: "New Zealand",
        code: "nz",
        capital: "Wellington"
    }, 
    {
        name: "Saudi Arabia",
        code: "sa",
        capital: "Riyadh"
    }, 
    {
        name: "Turkey",
        code: "tr",
        capital: "Ankara"
    },
    {
        name: "Iran",
        code: "ir",
        capital: "Tehran"
    },
    {
        name: "United Arab Emirates",
        code: "ae",
        capital: "Abu Dhabi"
    },
    {
        name: "Morocco",
        code: "ma",
        capital: "Rabat"
    },
    {
        name: "Lebanon",
        code: "lb",
        capital: "Beirut"
    },
    {
        name: "North Korea",
        code: "kp",
        capital: "Pyongyang"
    },
    {
        name: "Chile",
        code: "cl",
        capital: "Santiago"
    },
    {
        name: "Croatia",
        code: "hr",
        capital: "Zagreb"
    },
    {
        name: "Czechia",
        code: "cz",
        capital: "Prague"
    },
    {
        name: "Denmark",
        code: "dk",
        capital: "Copenhagen"
    },
    {
        name: "Finland",
        code: "fi",
        capital: "Helsinki"
    },
    {   name: "Latvia"
        ,code: "lv",
        capital: "Riga"
    },
    {
        name: "Greece",
        code: "gr",
        capital: "Athens"
    },
    {
        name: "Hungary",
        code: "hu",
        capital: "Budapest"
    },
    {   name: "Lithuania"
        ,code: "lt",
        capital: "Vilnius"
    },
    {
        name: "Bahrain",
        code: "bh",
          capital: "Manama"
      },
      {
        name: "Slovakia",
        code: "sk",
          capital: "Bratislava"
      },
      {
        name: "Sudan",
        code: "sd",
          capital: "Khartoum"
      },
      {
        name: "Ukraine",
        code: "ua",
          capital: "Kyiv"
      },
      {
        name: "Oman",
        code: "om",
          capital: "Muscat"
      },
  ],
  hard: [
    {
        name: "Kiribati",
        code: "ki",
        capital: "Tarawa"
    },
    {
        name: "Liechtenstein",
        code: "li",
        capital: "Vaduz"
    },
    {
        name: "Mozambique",
        code: "mz",
        capital: "Maputo"
    },
    {
        name: "Namibia",
        code: "na",
        capital: "Windhoek"
    },
    {
        name: "Rwanda",
        code: "rw",
        capital: "Kigali"
    },
    {
        name: "Seychelles",
        code: "sc",
        capital: "Victoria"
    },
    {
        name: "Suriname",
        code: "sr",
        capital: "Paramaribo"
    },
    {
        name: "Yemen",
        code: "ye",
        capital: "Sana'a"
    },
    {
      name: "Bahrain",
      code: "bh",
        capital: "Manama"
    },
    {
        name: "Azerbaijan",
        code: "az",
        capital: "Baku"
    },
    {        
      name: "Malta",
      code: "mt",
        capital: "Valletta"
    },
    {        
      name: "Maldives",
      code: "mv",
      capital: "Mali"
    },
    {
        name: "Barbados",
        code: "bb",
        capital: "Bridgetown"
    },
    {
        name: "Cameroon",
        code: "cm",
        capital: "Yaoundé"
    },
    {
        name: "Mongolia",
        code: "mn",
        capital: "Ulaanbaatar"
    },
    { 
      name: "Benin", 
      code: "bj" ,
        capital: "Porto-Novo"
    },
    {
        name: "Bhutan",
        code: "bt",
        capital: "Thimphu"
    },
    {
        name: "Belize",
        code: "bz",
        capital: "Belmopan"
    },
    {
        name: "Togo",
        code: "tg",
        capital: "Lomé"
    },
    {
        name: "Angola",
        code: "ao",
        capital: "Luanda"
    },
    {
        name: "Vanuatu",
        code: "vu",
        capital: "Port Vila"
    },
    {
        name: "Tajikistan",
        code: "tj",
        capital: "Dushanbe"
    },
    {
        name: "Timor-Leste",
        code: "tl",
        capital: "Dili"
    },
    {
        name: "Tuvalu",
        code: "tv",
        capital: "Funafuti"
    },
    { 
      name: "Brunei Darussalam", 
      code: "bn",
      capital: "Bandar Seri Begawan"
    },
    { 
      name: "Cabo Verde", 
      code: "cv",
      capital: "Praia"
    },
    { 
      name: "Côte d'Ivoire", 
      code: "ci",
        capital: "Yamoussoukro"
    },
    { 
      name: "Lesotho", 
      code: "ls" ,
        capital: "Maseru"
    },
    {
      name: "Gabon",
      code: "ga",
        capital: "Libreville"
    },
    {
      name: "Gambia",
      code: "gm",
        capital: "Banjul"
    },
    {
      name: "Guinea-Bissau",
      code: "gw",
        capital: "Bissau"
    },  
    {
      name: "Luxembourg",
      code: "lu",
        capital: "Luxembourg"
    },
    {
      name: "Indonesia",
      code: "id",
        capital: "Jakarta"
    },
    {
      name: "Poland",
      code: "pl",
        capital: "Warsaw"
    },
    
  ],
};

const options = Array.from(document.querySelectorAll(".option"));
const scoreDisplay = document.getElementById("score");
const mapImg = document.getElementById("map");

function setDifficulty(level) {
  selectedList = lists[level]; 
  document.getElementById("difficulty-select").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  newQuestion();
}

function newQuestion() {
  if (questionCount >= totalQuestions) {
    alert("Game over! You got " + score + "/10 correct.");
    window.location.reload();
    return;
  }

  let correctCountry;
  function generateCountry() {
    var nezh = Math.floor(Math.random() * selectedList.length);
    correctCountry = selectedList[nezh];
    selectedList.push(selectedList.splice(nezh, 1)[0]);
    selectedList.pop();
  }

  generateCountry();
  let otherOptions = [];
  const mapImg = document.getElementById("map");
  mapImg.src = "https://vemaps.com/uploads/img/large/" + correctCountry.code + "-03.jpg";
  mapImg.alt = correctCountry.capital + " map";

  while (otherOptions.length < 3) {
    const random = selectedList[Math.floor(Math.random() * selectedList.length)].capital;
    if (random !== correctCountry.capital && !otherOptions.includes(random)) {
      otherOptions.push(random);
    }
  }

  const answers = [...otherOptions, correctCountry.capital].sort(() => Math.random() - 0.5);
  for (let i = 0; i < options.length; i++) {
    options[i].innerText = answers[i];
    options[i].onclick = () => handleAnswer(answers[i], options[i].id, correctCountry.capital);
  }

  questionCount++;
  scoreDisplay.textContent = `Score: ${score} / 10`;

  function handleAnswer(selected, button, correct) {
    const correctOption = options.find(opt => opt.innerText === correct);

    if (selected === correct) {
      score++;
      document.getElementById(button).style.backgroundColor = "green";
    } else {
      document.getElementById(button).style.backgroundColor = "red";
      if (correctOption) correctOption.style.backgroundColor = "green";
    }

    setTimeout(() => {
      options.forEach(opt => opt.style.backgroundColor = "#f5b934");
      newQuestion();
    }, 750);
  }
}
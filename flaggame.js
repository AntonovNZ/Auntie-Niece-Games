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
        name: "Italy", 
        code: "it",
        capital: "Rome"
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
        name: "Afghanistan",
        code: "af",
        capital: "Kabul"
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
        name: "Malawi",
        code: "mw",
        capital: "Lilongwe"
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
    {
      name: "Monaco",
      code: "mc",
        capital: "Monaco"
    },
  ],
  impossible: [
    { 
      name: "Anguilla", 
      code: "ai" ,
      capital: "The Valley"
    },
    {
      name: "Guernsey",
      code: "gg",
        capital: "St. Peter Port"
    },
    {
      name: "Isle of Man",
      code: "im",
        capital: "Douglas"
    },
    { 
      name: "Jersey",   
      code: "je",
        capital: "Saint Helier"
    },
    { 
      name: "Cayman Islands", 
      code: "ky" ,
        capital: "George Town"
    },
    { 
      name: "Cook Islands", 
      code: "ck" ,
        capital: "Avarua"
    },
    { 
      name: "Bonaire", 
      code: "bq" ,
        capital: "Kralendijk"
    },
    { 
      name: "American Samoa", 
      code: "as" ,
        capital: "Pago Pago"
    },
    {
      name: "Antartica",
      code: "aq",
        capital: "No official capital"
    },
    { 
      name: "Aruba", 
      code: "aw" ,
        capital: "Oranjestad"
    },
    { 
      name: "Bermuda", 
      code: "bm" ,
        capital: "Hamilton"
    },
    { 
      name: "British Virgin Islands", 
      code: "vg" ,
        capital: "Road Town"
    },
    { 
      name: "British Indian Ocean Territory", 
      code: "io" ,
        capital: "Diego Garcia"
    },
    { 
      name: "Cocos (Keeling) Islands", 
      code: "cc" ,
        capital: "West Island"
    },
    { 
      name: "Christmas Island", 
      code: "cx" ,
        capital: "Flying Fish Cove"
    },
    { 
      name: "Curaçao", 
      code: "cw" ,
        capital: "Willemstad"
    },
    { 
      name: "Falkland Islands (Malvinas)", 
      code: "fk" ,
        capital: "Stanley"
    },
    { 
      name: "French Guiana", 
      code: "gf" ,
        capital: "Cayenne"
    },
    {
      name: "French Polynesia", 
      code: "pf" ,
        capital: "Papeete"
    },
    { 
      name: "French Southern Territories", 
      code: "tf" ,
        capital: "Port-aux-Français"
    },
    { 
      name: "Guam", 
      code: "gu" ,
        capital: "Hagåtña"
    },
    { 
      name: "New Caledonia", 
      code: "nc" ,
        capital: "Nouméa"
    },
    { 
      name: "Norfolk Island", 
      code: "nf" ,
        capital: "Kingston"
    },
    {
      name: "Pitcairn", 
      code: "pn" ,
        capital: "Adamstown"
    },
    { 
      name: "Puerto Rico", 
      code: "pr",
        capital: "San Juan"
    },
    { 
      name: "Réunion", 
      code: "re" ,
        capital: "Saint-Denis"
    },
    { 
      name: "Saint Barthélemy", 
      code: "bl" ,
        capital: "Gustavia"
    },
    { 
      name: "Sint Maarten", 
      code: "sx" ,
        capital: "Philipsburg"
    },
    { 
      name: "Saint Pierre and Miquelon", 
      code: "pm" ,
        capital: "Saint-Pierre"
    },
    { 
      name: "Svalbard & Jan Mayen", 
      code: "sj" ,
        capital: "Longyearbyen"
    },
    { 
      name: "Bouvet Island", 
      code: "bv" ,
        capital: "No official capital"
    },
    { 
      name: "Tristan da Cunha, Ascension & Saint Helena", 
      code: "sh" ,
        capital: "Jamestown"
    },
    { 
      name: "Macau",
      code: "mo" ,
        capital: "No official capital"
    },
    { 
      name: "U.S. Virgin Islands", 
      code: "vi" ,
        capital: "Charlotte Amalie"
    },
    { 
      name: "British Virgin Islands", 
      code: "vg" ,
        capital: "Road Town"
    },
    { 
      name: "Wallis and Futuna", 
      code: "wf",
        capital: "Mata-Utu" 
    },
    { 
      name: "Åland Islands", 
      code: "ax" ,
        capital: "Mariehamn"
    },
    { 
      name: "Saint Martin", 
      code: "mf" ,
        capital: "Marigot"
    },
    { 
      name: "United States Minor Outlying Islands", 
      code: "um" ,
        capital: "No official capital"
    },
  ]
};

const flagImg = document.getElementById("flag");
const options = Array.from(document.querySelectorAll(".option"));
const scoreDisplay = document.getElementById("score");

function setDifficulty(level) {
    selectedList = lists[level];
    document.getElementById("difficulty-select").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    newQuestion();
}

function newQuestion() {
    if (questionCount >= totalQuestions) {
      alert("Game over! You got "+ score + "/10 correct.");
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
      flagImg.src = "https://www.flagpedia.net/data/flags/w580/" + correctCountry.code + ".webp";

      if(correctCountry.code == "ci"){
        otherOptions.push("Ireland")
        while (otherOptions.length <= 2) {
          const random = selectedList[Math.floor(Math.random() * selectedList.length)].name;
          if (random !== correctCountry.name && !otherOptions.includes(random)) {
            otherOptions.push(random);
          }
        }
      }
      else if(correctCountry.code == "lu"){
        otherOptions.push("Netherlands")
        while (otherOptions.length <= 2) {
          const random = selectedList[Math.floor(Math.random() * selectedList.length)].name;
          if (random !== correctCountry.name && !otherOptions.includes(random)) {
            otherOptions.push(random);
          }
        }
      }
      else if(correctCountry.code == "pl" ){
        otherOptions.push("Monaco")
        otherOptions.push("Indonesia")
        const random = selectedList[Math.floor(Math.random() * selectedList.length)].name;
        if (random !== correctCountry.name && !otherOptions.includes(random)) {
          otherOptions.push(random);
        }
      }
      else if(correctCountry.code == "mc" ){
        otherOptions.push("Poland")
        otherOptions.push("Indonesia")
        const random = selectedList[Math.floor(Math.random() * selectedList.length)].name;
        if (random !== correctCountry.name && !otherOptions.includes(random)) {
          otherOptions.push(random);
        }
      }
      else if(correctCountry.code == "id" ){
        otherOptions.push("Monaco")
        otherOptions.push("Indonesia")
        const random = selectedList[Math.floor(Math.random() * selectedList.length)].name;
        if (random !== correctCountry.name && !otherOptions.includes(random)) {
          otherOptions.push(random);
        }
      }
      else{
        while (otherOptions.length < 3) {
        const random = selectedList[Math.floor(Math.random() * selectedList.length)].name;
        if (random !== correctCountry.name && !otherOptions.includes(random)) {
          otherOptions.push(random);
        }
      }
      }
      
      const answers = [...otherOptions, correctCountry.name].sort(() => Math.random() - 0.5);
      for (let i = 0; i < options.length; i++) {
        options[i].innerText = answers[i];
        options[i].onclick = () => handleAnswer(answers[i], options[i].id, correctCountry.name);
      }
  
      questionCount++;
      scoreDisplay.textContent = "Score: "+ score + " / 10";
  
      function handleAnswer(selected, button, correct) {
        function flashColour(){
            document.getElementById(button).style.backgroundColor = "#f5b934";
            options.find(opt => opt.innerText === correct).style.backgroundColor = "#f5b934";
            newQuestion();
        }
        if (selected === correct) {
          score++;
          document.getElementById(button).style.backgroundColor = "green";
        }
        else{
            document.getElementById(button).style.backgroundColor = "red";    
            options.find(opt => opt.innerText === correct).style.backgroundColor = "green";
        }
        setTimeout(flashColour, 750);
  
      }
  }

const api ={
  key: '92c68d0449f3c310633852c40bd661c1',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const searchBox= document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
  if(evt.keyCode ==13){
      getResults(searchBox.value);
      //console.log(searchBox.value)
  }
}
//then it will run a fetch request which is going to say .we are gonna get the API dot base of this. we are gonna attach the weather at the end we are then gonna pass through a query which is got from our search box
//then we are gonna set a units like celsius and then we will set the APP id which is equal to the Api key as well.then this will return our weather.we are going to confer into json and then we are going to pass that json through our display results named as weather now.
function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
.then(weather =>{
    return weather.json();
}).then(displayResults);

}
function displayResults(weather){
  //console.log(weather);
  let city =document.querySelector('.location .city');
  city.innerText = `${weather.name} ${weather.sys.country}`;

  let now = new Date()
  let date = document.querySelector('.location .date');
  date.innerText=dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML= `${Math.round(weather.main.temp)}<span>C</span>`
  let weather_el =document.querySelector('.current .weather');
  weather_el.innerText=weather.weather[0].main;
  let hilow =document.querySelector('.hi-low');
  hilow.innerText= `${Math.round(weather.main.temp_min)} C / ${Math.round(weather.main.temp_max)} C`;
}

function dateBuilder(d){
  let months =['january', 'feb', 'march','april', 'june', 'july','august', 'september', 'october', 'november', 'december'];
  let days= ['sunday','monday', 'tuesday', 'wednesday', 'thursday','friday', 'saturday'];
   let day = days[d.getDay()];
   let date = d.getDate();
   let month= months[d.getMonth()];
   let year =d.getFullYear();

   return `${day} ${date} ${month} ${year}`;
}
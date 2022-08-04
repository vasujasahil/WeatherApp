let long;
let lat;
let apiid;
let api="3ab048289c037f4dc089d11595ad448d";
let loc=document.querySelector(".location");
let tem=document.querySelector(".temp");
let d=document.querySelector(".des");
let hum=document.querySelector(".humidity");
let inputfeild=document.querySelector(".input");
const ele=document.querySelector(".search");
inputfeild.addEventListener("keyup", e=>{
    console.log("keyup")
    if(e.key == "Enter" && inputfeild.value != ""){
        requestApi(inputfeild.value);
    }
});
function requestApi(city){
    console.log(city)
    apiid=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    fetchText();
}
//  ele.addEventListener("click",()=>{
//     console.log("start");
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position)=>{
//             console.log(position);
//             long=position.coords.longitude;
//             lat=position.coords.latitude;
//             apiid=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}}`;
           
            
//             fetchdata();
//         })
//     }
   

// });
async function fetchText() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=sangrur&appid=3ab048289c037f4dc089d11595ad448d');
    let data = await response.json();
    console.log(data);
    // loc.textContent=data.name + data.sys.country;
    // tem.textContent=math.floor(data.main.temp-273) + "C";
    // d.textContent=data.weather[0].description;
    // hum.textContent=data.main.humidity;
}


// function fetchdata(){
// fetch(apiid).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     // let city=input.value;
//     loc.textContent=data.name + data.sys.country;
//     tem.textContent=math.floor(data.main.temp-273) + "C";
//     d.textContent=data.weather[0].description;
//     hum.textContent=data.main.humidity;
// }).catch((error)=>{
//     console.log("ERRORRRR")
//     console.log(error);
// })
// }
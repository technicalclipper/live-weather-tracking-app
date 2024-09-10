async function getweather(city){
    const key="ca576177abd3f14b43d77cdda8359f57";
    const received=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&units=metric");
    
    const data=await received.json();
    var temp=data.main.temp;
    var city=data.name;
    var windspeed=data.wind.speed;
    var humidity=data.main.humidity;
    $(".temp").text(temp+"° C");
    $(".city").text(city);
    $(".humid-value").text(humidity+" %");
    $(".wind-value").text(windspeed+" Km/h")
    var climate=data.weather[0].main;
    console.log(climate);
    switch(climate){
        case "Clouds":
            $("#weatherimage").attr("src","Clouds.png");
            break;
        case "Rain":
            $("#weatherimage").attr("src","rain.png");
            break;
        case "Clear":
            $("#weatherimage").attr("src","Clear.png");
            break;
        case "Drizzle":
            $("#weatherimage").attr("src","drizzle.png");
            break;
        case "Mist":
            $("#weatherimage").attr("src","mist.png");
            break;
        default:
            $("#weatherimage").attr("src","haze.png");

    }
}

$("#search").on("click",()=>{
    var input=$("#input").val();
    getweather(input)
    $("#input").val("");
})

$("#input").on("keypress",(event)=>{
    if(event.key=="Enter"){
        var input=$("#input").val();
        getweather(input)
        $("#input").val("");
    }
})



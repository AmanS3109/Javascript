function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather data")
            resolve("success")
        }, 2000)
    })
}

async function getWeatherData(){
    await api();
    await api();
}

getWeatherData();
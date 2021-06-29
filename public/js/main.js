const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real = document.getElementById("temp_real");
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal==="") {
        city_name.innerText = "Please enter the valid city name";
        datahide.classList.add('data_hide');
    }
    else{
        try{
            const appid="appid=4998eb4205ec0c0fb45c37ed33ea1fdb";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&${appid}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear")
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68'></i>";
            else if(tempMood=="Clouds")
            temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #f1f2f6'></i>";
            else if(tempMood=="Rain")
            temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color: #a4b0be'></i>";
            else
            temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68'></i>"
            datahide.classList.remove('data_hide');
        }

        catch{
            city_name.innerText = "Please write the city correctly....";
            console.log(cityVal)
            datahide.classList.add('data_hide');;
        }
    }

}
submitBtn.addEventListener("click",getInfo);
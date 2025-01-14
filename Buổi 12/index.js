let getUserData = [];
(async function getData(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric');
        const data= await response.json();
        getUserData = data.list;
        console.log(data);
        let htmlContent = '';
        getUserData.forEach((weater) =>{
            htmlContent +=ListWeater(weater);
        });
        containerWeater.innerHTML = htmlContent;
    } catch(error){
        console.log('error',error);
        console.log('Lỗi khi tải dữ liệu:', error);
        console.log(containerWeater);
        containerWeater.innerHTML = '<p>Lỗi khi tải dữ liệu. Vui lòng thử lại sau.</p>';
    }
})();
const containerWeater = document.getElementById('list-user');
function ListWeater(item){
    return`
    <div class="col-sm-6 col-md-4 col-lg-3 mt-3 content-main">
        <div class="main">
            <div class="overlay"></div>
            <p class="date">${item.dt_txt}</p>
            <div class="card-body row">
                <div class="col-md-8 left-content">
                    <h5 class="card-title">${item.main.temp}°C</h5>
                    <p class="card-title">${item.weather[0].description}</p> 
                </div>
                <div class="col-md-4 right-cotent">
                    <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="Weather Icon" class="weather-icon">
                </div>
            </div>
         </div>
    </div>
    `
}
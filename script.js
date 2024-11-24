$(document).ready(function () {
    setInterval(function(){
        let a = moment().format('DD MMMM YYYY')
        let b = moment().format('hh : mm : ss A')
        $('.date').text(a)
        $('.time').text(b)
    },1000)

    $('#cityname').click(function () {
        $('#sec2').removeClass('sec2')
        $('.sidebox').removeClass('sidebox1')
        $('.datetime').removeClass('sidebox1')
        $('#maincontainer').removeClass('mainbg')
    })
    $('#btn').click(function () {

        $('#sec2').addClass('sec2')
        $('#maincontainer').addClass('mainbg')
        $('.sidebox').addClass('sidebox1')
        $('.datetime').addClass('sidebox1')

        let city = $("#cityname").val()
        let API_key = "4a08e06f02062978666b0cb491aad8c4"
        let temp = $('#temp');
        let feel = $('.feeltemp')
        let wind = $('.wind')

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(function (response) {
                // handle success
                console.log(response);
                temp.text(`${Math.round(response.data.main.temp)}`)
                feel.text(`${Math.round(response.data.main.feels_like)}°C`)
                wind.text(`${Math.floor(response.data.wind.speed * 3.6)} km/h`)
                
                if (temp.text() <= 22) {
                    temp.text(`${Math.round(response.data.main.temp)}°C`)
                    $('#icon').attr('src', './image/cloud_50dp_FFFFFF_FILL1_wght400_GRAD0_opsz48.png')
                    $('#maincontainer').attr('src', './image/beautiful-night-sky-background-ai-generated-photo.jpg')
                    $('.feelicon').attr('src', './image/cloud_50dp_FFFFFF_FILL1_wght400_GRAD0_opsz48.png');
                    $('.sideicon1').attr('src', './image/cloud_50dp_FFFFFF_FILL1_wght400_GRAD0_opsz48.png')
                }
                if (temp.text() > 22) {
                    temp.text(`${Math.round(response.data.main.temp)}°C`)
                    temp.text()+'°C'
                    $('#icon').attr('src', './image/sunny_50dp_FFFF55_FILL1_wght400_GRAD0_opsz48.png')
                    $('#maincontainer').attr('src', './image/[freepicdownloader.com]-blue-sky-with-sun-morning-large.jpg')
                    $('.feelicon').attr('src', './image/sunny_50dp_FFFF55_FILL1_wght400_GRAD0_opsz48.png');
                    $('.sideicon1').attr('src', './image/sunny_50dp_FFFF55_FILL1_wght400_GRAD0_opsz48.png')
                }
            })
            .catch(function (error) {
                // handle error
                temp.text(`Not Found`)
                feel.text(`Not Found`)
                console.log(error.message);
            })
    })
})
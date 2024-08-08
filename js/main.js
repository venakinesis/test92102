
const apiKey = '9d9fe448ed5d4963948afbf1a49ff37b'
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const input = document.querySelector(".input")
const button = document.querySelector(".btn")
const img = document.querySelector(".weather")
const main = document.querySelector(".main")
const error = document.querySelector(".error")

async function getWeather(city) {
	const data = await fetch(url + city + `&appid=${apiKey}`)
	const data2 = await data.json()
	if (data.status === 404) {
		error.style.display = 'block'
		main.style.display = 'none'
	}
	document.querySelector(".humidity-text").innerHTML = data2.main.humidity + '%'
	document.querySelector(".wind-text").innerHTML = data2.wind.speed + 'km/h'
	document.querySelector(".city").innerHTML = data2.name
	document.querySelector(".temp").innerHTML = Math.round(data2.main.temp) + '&#8451'

	main.style.display = 'block'
	error.style.display = 'none'
}
button.addEventListener('click', () => {
	getWeather(input.value)
	input.value = ''
})


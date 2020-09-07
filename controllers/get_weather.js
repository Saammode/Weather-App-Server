const handleWeather = async (req, res, fetch) => {
    const { lat, lon } = req.body;
    let api = 'API_KEY';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api}&units=metric`
    )
    const weather = await response.json()
    res.json(weather)
};



module.exports ={handleWeather: handleWeather}
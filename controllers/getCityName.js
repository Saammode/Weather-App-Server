const handleCityName = async (req, res, fetch) => {
    const { lat, lon } = req.body;
    let api_geocode = 'API_KEY';
    const response = await fetch(
        `https://geocode.xyz/${lat},${lon}?json=1&auth=${api_geocode}`,
    )
    const cityName = await response.json()
    res.json(cityName)
}

module.exports = { handleCityName: handleCityName }
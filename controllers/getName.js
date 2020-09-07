const handleGetName = async (req, res, fetch) => {
    const { lat, lon } = req.body;
    let api_name = 'API_KEY';
    const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${api_name}`,
    )
    const getName = await response.json()
    res.json(getName)
}

module.exports = { handleGetName: handleGetName }
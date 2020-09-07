const handleTides = async (req, res, fetch) => {
    const { lat, lon, date } = req.body;
    const key = 'API_KEY'
    const url = `https://www.worldtides.info/api/v2?heights&date=${date}&days=1&lat=${lat}&lon=${lon}&key=${key}`;

    let fetchData = {
        method: 'GET',
    }
    const response = await fetch(url, fetchData)
    const getTides = await response.json()
    res.json(getTides)
}

module.exports = { handleTides: handleTides }
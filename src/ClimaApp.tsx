import { useState } from "react"

export const ClimaApp = () => {

    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = 'ef0624360c0722294dc7275597088259'

    const [city, setCity] = useState('')
    const [dataWheather, setDataWheather] = useState(null)

    const handleCityChange = (e: any) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(city.length > 0) fetchWheather()
    }

    const fetchWheather = async () => {
        try {
            
            const response = await fetch(`${url}?q=${city}&appid=${apiKey}`)
            const data = await response.json()
            setDataWheather(data)

        } catch (error) {
            console.error('Ocurrio un error: ', error)
        }
    }
    
  return (
    <div className="container">
        <h1>Aplicacion del clima</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa el nombre de la ciudad" value={city} onChange={handleCityChange}/>
            <button className="btn-buscar" type="submit">Buscar</button>
        </form>
        
        {
            dataWheather && ( //si data != null, sigue con el codigo
            <div>
                <h2>{dataWheather.name}</h2>
                <p>Temperatura: {parseInt(dataWheather?.main?.temp) - 273}°C</p>
                <img src={`https://openweathermap.org/img/wn/${dataWheather.weather[0].icon}@2x.png`}/>
            </div>
            )
        }
    </div>
  )
}

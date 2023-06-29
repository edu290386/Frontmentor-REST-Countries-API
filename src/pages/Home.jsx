
import { useState } from "react"
import Cards from "../components/Cards"
import {data} from "../helpers/data"

const Home = () => {
    let [search, setSearch] = useState("");
    const [dataCountry, setDataCountry] = useState(data);
    const [region, setRegion] = useState("");

    const handleChangeRegion = (e) => {
        setRegion(e.target.value);
    }


    const handleInputChange = (e) => {
        setSearch(e.target.value)
    
    }
    
    const filterCountry = dataCountry.filter( country => search == "" || country.name.toLocaleLowerCase().includes(search.toLowerCase()));
    const filterRegion = filterCountry.filter( country => region == "" || country.region == region) 

    return (
        <div>
            <form action="" className="flex justify-between">
                <input type="text" onChange={handleInputChange} className="border px-4 h-10 w-60 rounded-lg" placeholder="Where in the world" />
                <select onChange={handleChangeRegion} id=""  className="w-60 border">
                    <option value="">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
            <article className="flex flex-wrap gap-6 justify-center mt-4">
            {filterRegion && filterRegion.length > 0 && filterRegion.map((country, index) => (
                <Cards key={index} name={country.name} region={country.region} population={country.population} capital={country.capital} image={country.flags.svg}/>
            ))}
            </article>
        </div>
    )
}

export default Home
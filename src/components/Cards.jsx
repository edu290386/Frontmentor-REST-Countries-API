import { Link } from "react-router-dom"
const Cards = (props) => {

    return (
    <Link to={`country/${props.name}`} className="w-[240px] shadow-lg rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-150">
        <article className="w-[240px] h-[156px] rounded-t-lg">
            <img src={props.image} alt="" className="w-full h-full object-cover rounded-t-lg"/>
        </article>
        <article className="rounded-b-lg p-4">
            <h1 className="text-lg font-bold mb-2">
                {props.name}
            </h1>
            <h3>
                <span className="text-sm font-semibold mr-1">
                    Population: 
                </span>
                {props.population}
            </h3>
            <h3>
                <span className="text-sm font-semibold mr-1">
                    Region:
                </span>
                {props.region}
            </h3>
            <h3>
                <span className="text-sm font-semibold mr-1">
                    Capital:
                </span>
                {props.capital}
            </h3>    
        </article>
    </Link>
  )
}

export default Cards
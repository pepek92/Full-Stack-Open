import Weather from "./Weather"

const CountryInfo = (props) => {
    return (
        <div>
            <h2>{props.country.name}</h2>
            <p>Capital {props.country.capital}</p>
            <p>Population {props.country.population}</p>
            <h3>Languages</h3>
            <ul>
                {props.country.languages.map((x, i) => <li key={i}>{x.name}</li>)}
            </ul>
            <img src={props.country.flag} height="200dp" border="1px" alt="flag"></img>
            <Weather city={props.country.capital}/>
        </div>
    )
}

export default CountryInfo
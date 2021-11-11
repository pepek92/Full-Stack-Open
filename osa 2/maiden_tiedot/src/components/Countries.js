/* eslint-disable array-callback-return */
import React from 'react'
import Weather from './Weather'

const Countries = (props) => {

    let results = []
    props.countriesList.map((x) => {
        if (x.name.toLowerCase().includes(props.filter.toLowerCase())) {
            results.push(x)
        }})

    const OneCountry = (props) => {
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

    const TooMany = () => {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    const TenCountries = () => {
        return (
            <div>
                <ul>
                    {results.map((x, i)  => <li key={i}>{x.name}</li>)}
                </ul>
            </div>
        )
    }

    return (
        <div>
            {results.length > 10 && <TooMany />}
            {results.length < 10 && results.length > 1 && <TenCountries />}
            {results.length === 1 && <OneCountry country={results[0]} />}
            {results.length === 0 && <p>No results</p>}
        </div>

    )
}

export default Countries
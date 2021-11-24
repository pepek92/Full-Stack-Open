/* eslint-disable array-callback-return */
import CountryInfo from './CountryInfo'
import React, { useState } from 'react';

const Countries = (props) => {
    const [Info, toggleInfo] = useState(false)
    const [countryIndex, setCountryIndex] = useState(null)

    let results = []
    props.countriesList.map((x) => {
        if (x.name.toLowerCase().includes(props.filter.toLowerCase())) {
            results.push(x)
        }})

    const TooMany = () => {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    const handleInfoButton = (prop) => {
        setCountryIndex(prop)

        if (prop === countryIndex) {
            toggleInfo(!Info)
        } else {
            setCountryIndex(prop)
            toggleInfo(true)
        }

    }

    const TenCountries = () => {
        return (
            <div>
                <ul>
                    {results.map((x, i)  => 
                    <li key={i}>{x.name}
                    <button onClick={() => handleInfoButton(x)}>show</button>
                    </li>)}
                </ul>
                {Info && <CountryInfo country={countryIndex} />}
            </div>
        )
    }

    return (
        <div>
            {results.length > 10 && <TooMany />}
            {results.length < 10 && results.length > 1 && <TenCountries/>}
            {results.length === 1 && <CountryInfo country={results[0]} />}
            {results.length === 0 && <p>No results</p>}
        </div>

    )
}

export default Countries
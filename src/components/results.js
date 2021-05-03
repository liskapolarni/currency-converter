import React, { useEffect, useState } from 'react'
import Result from './result.js'

const Results = ({ inputValue, fromCurrency, currencyNames, fetchRates, showCurrencies, setShowCurrencies, currencyObject }) => {
    
    const [rates, setRates] = useState({})

    useEffect(() => {
        const getRates = async () => {
            const get_rates = await fetchRates()
            setRates(get_rates)
        }
        getRates()
    },[fetchRates])

    const remainingCurrencies = () => {
        return currencyNames.length - showCurrencies;
    }

    const showMore = () => {
        if (remainingCurrencies() > 0) {
            setShowCurrencies(showCurrencies + remainingCurrencies())
        } else {
            if (currencyNames.length > 6) {
                setShowCurrencies(6)
            } else {
                setShowCurrencies(currencyNames.length)
            }
        }
    }

    const totalShow = currencyNames.filter((currency) => currencyObject[currency] === true).length-1
    let count = 0

    return (
        <section id="content">
            <div id="results">
                {currencyNames.filter((cur) => {
                    if (cur !== fromCurrency && count < showCurrencies && currencyObject[cur] === true) {
                        count++
                        return true
                    } else {
                        return false
                    }
                })
                .map(cur => {
                    const id = cur.substring(cur.length-4,cur.length-1)
                    const flag_url = `https://flagcdn.com/32x24/${id.substring(0,2).toLowerCase()}.png`
                    const image_description = `${id.substring(0,2)} flag`
                    const result_value = Object.keys(rates).length > 0 && rates[id.toLowerCase()] !== undefined ?
                                         Math.round(rates[id.toLowerCase()].rate*inputValue*100)/100 : "loading"

                    return (
                        <Result resultValue={result_value} flagUrl={flag_url}
                        imageDescription={image_description} currency={cur} />
                    )
                })}
            </div>
            <div className={totalShow > 6 ? "show" : "hide"}>
                <div className={remainingCurrencies() > 0 ? "blue-btn" : "gray-btn"} onClick={showMore}>
                    {remainingCurrencies() > 0 ? "Show more" : "Show less"}
                </div>
            </div>
        </section>
    )
}

export default Results
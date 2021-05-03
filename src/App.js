import CurrencyForm from './components/currency_form.js'
import Results from './components/results.js'
import Settings from './components/settings.js'
import React, { useState } from 'react'

const App = () => {
  const currency_names = {
    "Euro (EUR)": true,
    "Czech koruna (CZK)": true,
    "United States dollar (USD)": true,
    "Pound sterling (GBP)": true,
    "Swiss franc (CHF)": true,
    "Canadian dollar (CAD)": true,
    "Australian dollar (AUD)": true,
    "Polish zloty (PLN)": true,
    "Hungarian forint (HUF)": true,
    "Japanese yen (JPY)": true,
    "Chinese yuan (CNY)": true,
    "Swedish krona (SEK)": true,
    "South Korean won (KRW)": true,
    "Singapore dollar (SGD)": true,
    "Norwegian krone (NOK)": true,
    "Russian rouble (RUB)": true,
    "Brazilian real (BRL)": false,
    "Hong Kong dollar (HKD)": false,
    "New Zealand dollar (NZD)": false,
    "Mexican peso (MXN)": false,
    "Indian rupee (INR)": false,
    "Romanian leu (RON)": false
  }

  if (localStorage.getItem("currencies") === null) {
    localStorage.setItem("currencies", JSON.stringify(currency_names))
  }

  const [inputValue, setInputValue] = useState(10)
  const [fromCurrency, setFromCurrency] = useState(Object.keys(currency_names)[0])
  const [showCurrencies, setShowCurrencies] = useState(6)
  const [showSettings, setShowSettings] = useState(false)
  const [allCurrencies, setAllCurrencies] = useState(JSON.parse(localStorage.getItem("currencies")))

  const fetchRates = async () => {
    const short = fromCurrency.substring(fromCurrency.length-4,fromCurrency.length-1).toLowerCase()
    const res = await fetch(`http://www.floatrates.com/daily/${short}.json`)
    const data = await res.json()

    return data
  }

  return (
    <div>
      <section id="main">
        <CurrencyForm
        setInputValue={setInputValue} inputValue={inputValue}
        setFromCurrency={setFromCurrency} currencyNames={Object.keys(allCurrencies)}
        showSettings={showSettings} setShowSettings={setShowSettings} />
      </section>
      <Settings showSettings={showSettings} currencyNames={allCurrencies}
      setShowSettings={setShowSettings} setAllCurrencies={setAllCurrencies} />
      <Results
      inputValue={inputValue} fromCurrency={fromCurrency}
      currencyNames={Object.keys(allCurrencies)} fetchRates={fetchRates}
      showCurrencies={showCurrencies} setShowCurrencies={setShowCurrencies}
      currencyObject={allCurrencies} />
      <footer><a href="https://github.com/liskapolarni/currency-converter"><b>GitHub repository</b></a></footer>
    </div>
  )
}

export default App;
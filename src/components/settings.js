import Checkbox from './checkbox.js'

const Settings = ({ showSettings, setShowSettings, currencyNames, setAllCurrencies }) => {
    return (
        <section id="settings">
            <div id="background-dim" class={showSettings ? "show" : "hide"}
            onClick={() => setShowSettings(false)}></div>
            <div id="settings-menu" class={showSettings ? "show" : "hide"}>
                <h2>Settings</h2>
                <div className="line"></div>
                <div id="settings-options">
                    {Object.keys(currencyNames).map((currency) => {
                        const currency_code = currency.substring(currency.length-4,currency.length-2).toLowerCase()
                        const img_source = `https://flagcdn.com/24x18/${currency_code}.png`
                        const alt = `${currency_code} flag`
                        return (
                            <p>
                                <img src={img_source} alt={alt}></img>
                                {currency}
                                <Checkbox id={currency}
                                show={currencyNames[currency]}
                                allCurrencies={currencyNames}
                                setAllCurrencies={setAllCurrencies}/>
                            </p>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Settings
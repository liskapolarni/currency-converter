import Input from './input.js'

const currencyForm = ({ setInputValue, setFromCurrency, currencyNames, inputValue, showSettings, setShowSettings }) => {
    return (
        <div>
            <h1>Currency converter</h1>
            <div id="form_box">
                <Input setInputValue={setInputValue} setFromCurrency={setFromCurrency}
                currencyNames={currencyNames} inputValue={inputValue} ></Input>
            </div>

            <div className={showSettings ? "clear-btn top-right fixed" : "clear-btn top-right"} onClick={() => setShowSettings(!showSettings)}>
                <img src={showSettings ? "assets/close.png" : "assets/settings.png"} alt="Settings" className="settings-icon"></img>
            </div>
        </div>
    )
}

export default currencyForm
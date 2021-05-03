const Input = ({ setInputValue, setFromCurrency, currencyNames, inputValue }) => {

    const inputChange = () => {
        let get_value = document.querySelector('#currency_value').value
        if (get_value.length > 0) {
            setInputValue(parseInt(get_value))
        } else {
            setInputValue(0)
        }
    }

    const currencyChange = () => {
        setFromCurrency(document.querySelector('#currency_type').value)
    }

    return (
        <form id="currency_form">
            <input type="text" onChange={inputChange} id="currency_value" value={inputValue !== 0 ? inputValue : ""} ></input>
            <select id="currency_type" onChange={currencyChange}>
                {currencyNames.map((cur) => {
                    return (
                        <option value={cur}>{cur}</option>
                    )
                })}
            </select>
        </form>
    )
}

export default Input
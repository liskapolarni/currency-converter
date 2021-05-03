import React, { useState } from 'react'

const Checkbox = ({ id, show, allCurrencies, setAllCurrencies }) => {

    const [checked, setChecked] = useState(show)

    return (
        <label className="checkbox-wrapper">
            <input type="checkbox" checked={checked}
            onChange={() => {
                setChecked(!checked)
                allCurrencies[id] = !checked
                setAllCurrencies({...allCurrencies})
                localStorage.setItem("currencies",JSON.stringify(allCurrencies))
            }} />
            <div class="checkbox"></div>
            <div className="check-half"></div>
        </label>
    )
}

export default Checkbox
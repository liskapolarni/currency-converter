const Result = ({ resultValue, flagUrl, currency, imageDescription }) => {
    const font_size = `${48-(1.5*resultValue.toString().length)}px`
    const margin_top = `${(resultValue.toString().length*1.5)+25}px`
    
    return (
        <div className="result">
            <h1 style={{fontSize: font_size, marginTop: margin_top}}>
            {resultValue}
            </h1>
            <p className="currency-description">
                <img src={flagUrl} alt={imageDescription} className='country_flag'></img>{currency}
            </p>
        </div>
    )
}

export default Result
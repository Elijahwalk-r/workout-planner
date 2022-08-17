const ApiData = (props) => {
    return (
        <div className="apiFlexParent">
            <h2>Quote for the Day</h2>
            <p><span className="quotation">"</span>{props.quote[0]}<span className="quotation">"</span></p>
            <p> Author: {props.quote[1]}</p>
        </div>
    )
}

export default ApiData;
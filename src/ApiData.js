const ApiData = (props) => {
    return (
        <div className="apiFlexParent">
            <h2>Quote of the Day</h2>
            <p>{props.quote[0]}</p>
            <p> Author: {props.quote[1]}</p>
        </div>
    )
}

export default ApiData;
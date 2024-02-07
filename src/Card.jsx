function Card(props) {
    console.log(props)
    return (
            <div className="card">
                <h3>{props.species.name}</h3>
                <p>Species: {props.species.Category.name}</p>
                <p>Length: {props.species.length}"</p>
                <p>Color: {props.species.color}</p>
            </div>
    )
}

export default Card
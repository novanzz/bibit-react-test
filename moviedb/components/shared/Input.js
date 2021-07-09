export const Input = (props) => {
    return (
        <div className="input-number">
            <input id="query" type="text" placeholder="Search" onChange={(e) => props.change(e)} />
        </div>
    )
}
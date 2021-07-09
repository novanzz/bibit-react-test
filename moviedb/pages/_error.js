
const Error = (statusCode) => {
    return (
        <>
            <div className="container" style={{textAlign:"center"}}>
                {statusCode.error == null
                    ? <h3>Sorry, the page you visited does not exist.</h3>
                    : <h3>Sorry, the page you visited something wrong...!</h3>}
            </div>

        </>
    )
}


export default Error
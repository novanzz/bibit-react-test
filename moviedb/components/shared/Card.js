import { Row, Col } from "./Grid"

export const Card = (props) => {
    const { src, title, description } = props
    return (
        <div className="card">
            <img src={src} alt={title} style={{ width: "100%", height:"50vh" }} onClick={props.modal} />
            <div className="card-container" onClick={props.click}>
                <h4><b>{title}</b></h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export const CardDetail = (props) => {
    return (
        <div className="card-detail">
            <Row>
                <Col span={6}>
                    <img className="col-6" src={`${props.img}`} alt={`${props.title}`} style={{ height: "500px",width:"100%" }} />
                </Col>
                <Col span={6}>
                    {props.children}
                </Col>
            </Row>
        </div>
    )
}
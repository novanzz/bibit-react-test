export const Row = (props) => {
    const { children } = props;
    return (
        <div className="row">
           {children}
        </div>
    )
}

export const Col = (props) => {
    const { children,span } = props;
    return (
        <div className={`col-${span}`}>
           {children}
        </div>
    )
}
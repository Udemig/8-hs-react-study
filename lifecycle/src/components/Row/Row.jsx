import './Row.css'

const  Row =({children,style,className})=>{
    return(
        <div id="row" style={style} className={className}>{children}</div>
    )
}

export default Row
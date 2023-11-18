import './Column.css'


const Column =({children,style})=>{
return(
    <div className="column" style={style}>{children}</div>
)
}

export default Column
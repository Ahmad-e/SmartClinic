

const MainButton=(props)=> {
    return(
        <button 
            style={
                props.style? (props.style) : ({})
            }
            onClick={
                props.href ? (()=>window.location.href=props.href):
                props.onClick ? (()=>props.onClick()):
                (()=>console.log("no function select"))
            } 
            className="main-btn "
        >
            {props.text}
        </button>
    )
}

export default MainButton
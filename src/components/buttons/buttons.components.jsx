import "./buttons.styles.scss"
const BUTTON_TYPE_CLASSES ={
    google:'google-sign-in',
    inverted:'inverted'
}

function Button ({children ,buttontype ,...otherprops}){
    return(<div>
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`} {...otherprops}>{children}</button>
        
        </div>)
}
export default Button ;
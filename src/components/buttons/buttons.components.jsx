import "./buttons.styles.scss"
import { SpinnerContainer } from "../spinner/spinner.styles"
const BUTTON_TYPE_CLASSES ={
    google:'google-sign-in',
    inverted:'inverted'
}

function Button ({children ,buttontype , isloading,...otherprops}){
    
    return(<div>
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`} disabled={isloading}{...otherprops}>{isloading?<SpinnerContainer /> : children}</button>
        
        </div>)
}
export default Button ;
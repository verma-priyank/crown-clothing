import "./form-input.styles.scss"
// function FormInput(props){
//     return (<div>
//         <label>
//         {props.label}
//         </label>
//         <input  type={props.type} required value={props.value} name={props.name} onChange={props.onChange}/>
//         </div>)
// }
// New way

function FormInput({label ,...otherprops}){
    return(<div className="group">
    <input className="form-input" {...otherprops} />
    {label && (
        <label className={`${otherprops.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
    )}
        
       
        </div>
        )
}


export default FormInput;
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

function Directoryitem (props){
  const navigate = useNavigate() ;

  function onNavigateHandler(){
    
    navigate(props.categories.route)
  }
   
    return (
        <div key={props.categories.id} className="directory-item-container" onClick={onNavigateHandler}>
        {console.log(props.categories.title)}
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${props.categories.imageUrl})`,
                }}
              />
              <div className="body">
                <h2>{props.categories.title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
    );

}
export default Directoryitem;
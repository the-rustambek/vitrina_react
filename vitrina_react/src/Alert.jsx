import { useContext } from "react";
import { AlertContext } from "./App";

const Alert = () =>{
    const alert = useContext(AlertContext);
    if(!alert) return null;
    return (
        <div  style={{background: "crimson",
                 padding:"20px", textAlign: "center", color:"white",margin:"10px 0"}}>
        <h4>This is messages very important</h4>
        </div>
    )
}

export default Alert;
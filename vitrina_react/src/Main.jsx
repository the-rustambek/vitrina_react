
const Main = ({toggle}) =>{
     return(
         <>
         <p>Hello context</p>
         <button onClick={toggle} className="success">
            Show alert
         </button>
         </>
     )
}
export default Main;
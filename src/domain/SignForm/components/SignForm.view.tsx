import { IVSignForm } from "./SignForm.interface"; 


const VSignForm:React.FC<IVSignForm> =()=>{
    return(
        <div>
            <label htmlFor="">
                <input type="text" />
            </label>
            <label htmlFor="">
                <input type="text" />
            </label>
            <label htmlFor="">
                <input type="text" />
            </label>
        </div>
    )
}
export default VSignForm;
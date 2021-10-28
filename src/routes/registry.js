import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

function Registry() {
    const[registryData, setRegistryData] = useState([])
    const[textInput, setTextInput] = useState("")
    const[errormsg, setErrormsg] = useState(false)


    const addItem = (e) => {
        e.preventDefault();
        if(errormsg) return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        
    }
    useEffect(() => {
        if(textInput.length>10) setErrormsg(true)
        else setErrormsg(false)
    },[textInput]
     )
     const removeItem=(index) => {
        let newdata= [...registryData]
        newdata.splice(index,1)
        setRegistryData(newdata)
     }

     const editItem = (index) => {
        if(errormsg) return;
        let newdata= [...registryData]
        newdata[index] = textInput;
        setRegistryData(newdata)
     }
    console.log(registryData)
    return (
        <div>
            <h1>REGISTRY</h1>
            <Link to="/">click here to go to registry</Link>
            <form onSubmit={addItem}>
                <label>text input:
            <input type = "text" value = {textInput} onChange = {(e) => setTextInput(e.target.value)}></input>
            </label>
            <input type="submit" value="Submit" />
            </form>
            {errormsg? <span style={{color: "red"}}> Error occured. </span> : null}
            {
                registryData.map((item, index) => {
                    return(
                        <li key={index}>{item} <button onClick={()=> removeItem(index)}> Remove </button> <button onClick={()=> editItem(index)}> Update </button></li>
                    )
                })
            }
            

        </div>
    );
}

export default Registry;
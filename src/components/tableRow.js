import React from "react";


const row =(props)=>{
    return ( 
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.Position}</td>
            <td>{props.data.Department}</td>
                <td>{props.data.Manager}</td>
            </tr>
    ) 
}

export default row;
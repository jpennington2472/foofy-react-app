import React from 'react';

const Costs = (props) => {
    const totalCost = parseInt(props.repairCost) + (props.laborRate * props.repairHours);
    return(
    <div>
        <h1> Repair Cost {props.repairCost}</h1>
        <h1>Labor Rate {props.laborRate}</h1>
        <h1>Repairman Hours {props.repairHours}</h1>
        <h1>Total Cost {totalCost}</h1>

    </div>
    
    )
}
export default Costs
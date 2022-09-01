import React from "react";
import "./Costs.css"

const Costs = (props) => {
  const totalCost =
    parseInt(props.repairCost) + props.laborRate * props.repairHours;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Repair Cost Summary</h5>
          <h6 className="card-subtitle mb-2 text-muted">Calculations:</h6>
          <p className="card-text">Repair Cost {props.repairCost}</p>
          <p className="card-text">Repair Cost {props.laborRate}</p>
          <p className="card-text">Repair Cost {props.repairHours}</p>
          <p className="card-text">Repair Cost {totalCost}</p>
        </div>
      </div>
    </div>
  );
};
export default Costs;

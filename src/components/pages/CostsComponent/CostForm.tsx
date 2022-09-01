import React from "react";
import { useState } from "react";
import Costs from "./Costs.tsx";
//costForm -> costs -> costContainer
const CostForm = () => {
  const [repairHours, setRepairHours] = useState(0);
  const [repairCost, setRepairCost] = useState(0);
  const [laborRate, setLaborRate] = useState(0);

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
    setRepairHours(event.target.repairHours.value);
    setRepairCost(event.target.repairCost.value);
    setLaborRate(event.target.laborRate.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Repair Costs</label>
          <input
            className="form-control"
            id="repair_Cost"
            name="repairCost"
            type="number"
            placeholder="Repair Costs"
            onSubmit={(event) => handleSubmit(event)}
          />
        </div>
        <div className="form-group">
          <label>Hours taken to fix</label>
          <input
            className="form-control"
            id="repair_hours"
            name="repairHours"
            type="number"
            placeholder="Repair Man Hours"
            onSubmit={(event) => handleSubmit(event)}
          />
        </div>
        <div className="form-group">
          <label>Labor Rate</label>
          <input
            className="form-control"
            id="labor_Rate"
            name="laborRate"
            type="currency"
            placeholder="Labor Rate"
            onSubmit={(event) => handleSubmit(event)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit form
        </button>
      </form>
      <Costs
        laborRate={laborRate}
        repairCost={repairCost}
        repairHours={repairHours}
      ></Costs>
    </div>
  );
};

export default CostForm;

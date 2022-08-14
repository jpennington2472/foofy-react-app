import React from 'react';
import {useState} from 'react';
import Costs from './Costs.tsx';

const CostForm = () => {
  const [repairHours, setRepairHours] = useState(0);
  const [repairCost, setRepairCost] = useState(0);
  const [laborRate, setLaborRate] = useState(0);

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
    setRepairHours(event.target.repairHours.value);
    setRepairCost(event.target.repairCost.value);
    setLaborRate(event.target.laborRate.value);

    // 👇️ access input values here

    // 👇️ clear all input values in the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Repair Costs</label>
        <input
          id="repair_Cost"
          name="repairCost"
          type="number"
          placeholder='Repair Costs'
          onSubmit={event => handleSubmit(event)}
        />
        <label>Hours taken to fix</label>        
        <input
          id="repair_hours"
          name="repairHours"
          type="number"
          placeholder='Repair Man Hours'
          onSubmit={event => handleSubmit(event)}
        />
         <label>Labor Rate</label>
        <input
          id="labor_Rate"
          name="laborRate"
          type="currency"
          placeholder='Labor Rate'
          onSubmit={event => handleSubmit(event)}
        />

        <button type="submit">Submit form</button>
      </form>
      <Costs laborRate={laborRate} repairCost={repairCost} repairHours={repairHours}></Costs>
    </div>
  );
};

export default CostForm;
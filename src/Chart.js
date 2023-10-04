import React from "react";
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import './Chart.css'

export const data = [
  ["Task", "Hours per Day"],
  ["Students registered   ", 98],
  ["Applications reviewed", 70],
  ["Applications approved", 49],
  ["Rejected applications", 30],
 
];

export const options = {
  
  title: "STATUS OF APPLICATION",
};

function ApexChart() {
  return (
    <>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    <button id="ad"><Link to="/Table">Next</Link></button>
    </>
  );
}


export default ApexChart;
{/* <button id="bu"><Link to="/AcademicDetails">Next</Link></button> */}

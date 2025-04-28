import React from "react";
import Chart from "react-apexcharts";
import {  useSelector } from 'react-redux';


 const App=(props)=>{
    
        const mode = useSelector((state) => state.mode);
        const state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            colors:[
                "#2E5077", // اللون الأول
                
                "#488F94",
                
                "#4DA6A6",
                "#4DA1A9"  // اللون الأخير
              ],
            theme: {
              mode: mode,
              
            },
            xaxis:props.options.xaxis
          }
        };
        return (
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={state.options}
                  series={props.series}
                  type={props.type}
                  width={props.width}
                  height={props.height}
                  
                  
                />
              </div>
            </div>
          </div>
        );
      }
export default  App
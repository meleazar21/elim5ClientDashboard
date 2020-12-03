import React, {Component} from 'react';
import {Bar, Pie, Polar, Line} from 'react-chartjs-2';

/**
 * Class for the chart
 * component
 * @author Eleazar Martinez
 */
class Chart extends Component{

   /**
    * Render Function
    * @author Eleazar Martinez
    */
    render(){
        return(
            <div className="content-wrapper">
                <Polar
                 data={this.props.data ? this.props.data : {}}
                 options={{displayTitle:true,title: 'Top Users Search'}}
                />
                
            </div>
        );
    }
}

export default Chart;
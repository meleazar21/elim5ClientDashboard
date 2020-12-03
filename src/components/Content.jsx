import React, {Component} from 'react';
import Chart from './Chart'

/**
 * Class Component of Content
 * @author Eleazar Martinez
 */
class Content extends Component{
    
    /**
     * Render function
     * @author Eleazar Martinez
     */
    render(){
        return(
            <Chart
            data={this.props.data}
            />   
        );
    }
}
export default Content;
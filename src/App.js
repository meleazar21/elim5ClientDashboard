import React, {Component} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Content';
import ModalUser from './components/ModalUser';
import Message from './util/Message';
import {InsertUserLogRequest, GetMetricsRequest} from './request/UserLogRequest'

/**
 * App.js 
 * @author Eleazar Martinez
 */
class App extends Component{

    state = {
        username: '',
        loading:false,
        showModal:true,
        data:{}
    }

    /**
     * Function for request the api 
     * @author Eleazar Martinez
     */
    onInsertUser = async(username) =>{

        this.setState({loading:true});
        const response = await InsertUserLogRequest(username);

        if(!response.success)
        {
            this.setState({loading:false});
            Message.error(response.message);
            return;
        }
        else{
            this.setState({showModal:false, loading:false, username:username}, () => this.onGetMetrics());
        }
    }

    /**
     * Function that call the refresh function
     * @author Eleazar Martinez
     */
    onClickRefresh = () =>{
        this.onGetMetrics();
    }

    /**
     * Function for request the metrics
     * @author Eleazar Martinez
     */
    onGetMetrics = async() =>{
        this.setState({loading:true});
        const response = await GetMetricsRequest();

        if(!response.success)
        {
            Message.error(response.message);
            this.setState({loading:false});
            return;
        }
        else{
            this.setState({...this.state, data: response.data, loading:false});
        }
    }

    /**
     * Render function
     * @author Eleazar Martinez
     */
    render(){
        return(
            <div>
                <ModalUser 
                showModal={this.state.showModal} 
                onInsertUser={this.onInsertUser}
                loading={this.state.loading}
                />
                <Header 
                loading={this.state.loading}
                onClickRefresh={this.onClickRefresh}
                />
                <Menu 
                username={this.state.username}
                />
                <Content
                 data={this.state.data}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
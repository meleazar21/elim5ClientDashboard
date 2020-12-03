import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'
import Message from '../util/Message';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
  display: 'inline-block';
  margin: 5 auto;
  border-color: '#3688D7';
`

/**
 * Class component for the username insert
 * @author Eleazar Martinez
 */
class ModalUser extends Component{

    state = {
        username:''
    }

    /**
     * function for validate the username input
     * @param {*} username username input
     * @author Eleazar Martinez
     */
    validateInputs = (username) =>{
        if(!username)
        {
            Message.warning('Please enter a valid username.');
            return false;
        }
        return true;
    }

    /**
     * Event click fot the button enter
     * @author Eleazar Martinez
     */
    onClickEnter = () =>{
        const {username} = this.state;
        if(!this.validateInputs(username)) return;

        this.props.onInsertUser(username);
    }

    /**
     * Function that trigger the click enter function
     * if the user press the enter key
     * @author Eleazar Martinez
     */
    onPressKeyEnter = (event) =>{
        if (event.key !== 'Enter') return;

        this.onClickEnter();
    }

    /**
     * Render function
     * @author Eleazar Martinez
     */
    render(){
        return(
            <div>
                <Modal show={this.props.showModal} onHide={this.onHideModal}>
                <Modal.Header>
                        <Modal.Title>User Log</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label id="lblusername" htmlFor="txtusername">Username</label>
                                    <input type="text"
                                        id="txtusername"
                                        className="form-control"
                                        aria-labelledby="lblusername"
                                        name="username"
                                        onChange={(event) => this.setState({username:event.currentTarget.value})}
                                        value={this.state.username}
                                        onKeyDown={this.onPressKeyEnter}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.onClickEnter} disabled={this.props.loading}>
                        {
                                this.props.loading ?
                                    <div className="sweet-loading" style={{ flexWrap:"nowrap", display: "flex",alignItems: "center", justifyContent: "center"}}>
                                        <ClipLoader
                                            css={override}
                                            size={15}
                                            color={"#ffffff"}
                                            loading={this.props.loading}
                                        />
                                                    Registering
                                                </div>
                                    :
                                    'Register'
                            }
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}
export default ModalUser;
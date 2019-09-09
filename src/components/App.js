import React , { Component } from 'react';
import { connect } from 'react-redux'
import { addReminder ,deleteReminder,clearReminders} from '../actions'
import { bindActionCreators } from "redux";

import propTypes from 'prop-types'
import moment from "moment";

class App extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            text: '',
            dueDate:''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text,this.state.dueDate);
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    clearReminders(){
        this.props.clearReminders();
    }

    renderReminders() {
        const {reminders}=this.props;

        return (
            <ul className='list-group col-sm-8 mr-2'>
                {
                    reminders.map(reminders=>{
                        return(
                            <li className='list-group-item' key={reminders.id}>
                                <div className='list-item'>
                                    <div>{reminders.text}</div>
                                    <div>{moment(new Date(reminders.dueDate)).fromNow()}</div>
                                    <div className='list-item delete-button' onClick={()=>this.deleteReminder(reminders.id)}>&#x2715;</div>
                                </div>
                            </li>
                        )

                    })
                }
                {/* {reminders.map((item,index)=>{
                    return (<li className='list-group-item' key={index}>
                        <div className='list-item'>
                            <div>{item.text}</div>
                            <div>time</div>
                        </div>
                    </li>)
                })}*/}

            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className='title'>Reminder Pro</div>

                <div className='form-inline'>
                    <div className='form-group'>
                        <input type="text" className='form-control mr-2' placeholder='I have...' onChange={(event) => {
                            this.setState({text: event.target.value})
                        }}/>
                        <input type="datetime-local" className='form-control' onChange={(event)=>{
                            this.setState({dueDate:event.target.value})}}/>
                        <button onClick={() => this.addReminder()} className='btn btn-success'>Add Reminder</button>
                    </div>
                </div>
                {this.renderReminders()}
                <div onClick={()=>this.clearReminders()} className='btn btn-danger'>CLEAR ALL ITEMS</div>
            </div>

        );
    }
}
App.propTypes={
    reminders: propTypes.array.isRequired,
    addReminder:propTypes.func.isRequired,
    deleteReminder:propTypes.func.isRequired
}

const mapStateToProps = (state) => {

    return {
        reminders: state.reminder
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addReminder,deleteReminder,clearReminders} , dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
import {Component} from "react";

import {Link} from "react-router-dom";

import './index.css';

class AddAppointments extends Component{
    
  
    state={
        student_id:"",
        mentor_id:"",
        date:"",
        start_time:"",
        duration:"",
        amount:0
    }

    addStudentId=(event)=>{
        this.setState({student_id:event.target.value});
    }
    addMentorId=(event)=>{
        this.setState({mentor_id:event.target.value});
    }

    addDate=(event)=>{
        this.setState({date:event.target.value});
    }

    addStartTime=(event)=>{
        this.setState({start_time:event.target.value});
    }

    addDuration=(event)=>{
        this.setState({duration:event.target.value});
    }

    addAmount=(event)=>{
        this.setState({amount:event.target.value});
    }

    addSubmit=async(event)=>{
        event.preventDefault();
        const {student_id,mentor_id,date,start_time,duration,amount}=this.state;
        const appointment={student_id,mentor_id,date,start_time,duration,amount};
        console.log(appointment);
        const url="https://appointmentsbackend.onrender.com/book-appointment"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(appointment)
        }
        try{
            const response=await fetch(url,options);
            if(response.ok){
                alert("Appointment booked and payment processed successfully");
                this.setState({student_id:"",mentor_id:"",date:"",start_time:"",duration:"",amount:""});
            }
            else{
                alert("Appointment not added");
                console.log(response);
            }
        }
        catch(error){
            console.log(error);
            alert("Appointment not added");
        }
    }


    render(){
        return(
            <div className="appointment-container">
                <div className="navbar-for-add-appointments">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>
                <h1>Add Appointments</h1>
                </div>
                <h1>Add Appointments</h1>
                <form className="add-appointment-form" onSubmit={this.addSubmit}>
                    <label htmlFor="studentId">Student Id</label>
                    <input className="student-id" onChange={this.addStudentId} type="text" id="studentId" required />
                    <br/>
                    <label htmlFor="mentorId">Mentor Id</label>
                    <input className="mentor-id" onChange={this.addMentorId} type="text" id="mentorId" required />
                    <br/>
                    <label htmlFor="date">Date</label>
                    <input className="date" onChange={this.addDate} type="date" id="date" required/>
                    <br/>
                    <label htmlFor="time">Time</label>
                    <input className="time" onChange={this.addStartTime} type="time" id="time" required/>
                    <br/>
                    <label htmlFor="duration">Duration</label>
                    <input className="duration" onChange={this.addDuration} type="text" id="duration" required/>
                    <br/>
                    <label htmlFor="amount">Amount</label>
                    <input className="add-amount" onChange={this.addAmount} type="text" id="amount" required/>
                    <br/>
                    <button className="add-appointment-button" type="submit">Add Appointment</button>

                </form>
            </div>
        )
    }
}

export default AddAppointments;
import {Component} from "react"

import {Link} from "react-router-dom";

import "./index.css";

class ShowingAppointments extends Component{

    state={appointments:[]}

    componentDidMount(){
        this.getAppointments();
    }
    getAppointments=async()=>{

        const url="https://appointmentsbackend.onrender.com/appointments"
        const options={
            method:"GET"
        }

        try{
            const response=await fetch(url,options);
            if(response.ok){
                const data=await response.json();
                this.setState({appointments:data});
                console.log(data);
            }
            else{
                console.log("Appointments not available");
            }
        }
        catch(error){
            console.log(error);
            alert("Appointments not available");
        }

    }

    deleteAllAppointments=async()=>{
        console.log("deleteAllAppointments");
        const url="https://appointmentsbackend.onrender.com/appointments"
        const options={
            method:"DELETE"
        }
        const response=await fetch(url,options);
        if(response.ok){
            alert("All appointments deleted successfully");
            this.getAppointments();
        }
        else{
            alert("Appointments not deleted");
        }
    }

    render(){
        const {appointments}=this.state;

        return(

            <div className="showing-appointments-container">
                <div className="navbar-for-add-students">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>
                <button className="button-for-delete" onClick={this.deleteAllAppointments}>Delete All Appointments</button>
                </div>

                <h1>Number of Appointment: {appointments.length}</h1>
                

                <div className="appointments-container">
                    {
                        appointments.map(eachAppointment=>(
                            <div className="each-appointment" key={eachAppointment.id}>
                                <p>Student id: {eachAppointment.student_id}</p>
                                <p>Mentor id: {eachAppointment.mentor_id}</p>
                                <p>Date : {eachAppointment.date}</p>
                                <p>Start time: {eachAppointment.start_time}</p>
                                <p>Duration: {eachAppointment.duration} minutes</p>
                            </div>
                        ))

                    }
                </div>
            </div>
        )
    }


}

export default ShowingAppointments
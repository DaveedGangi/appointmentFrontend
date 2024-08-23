
import {Component} from "react";

import {Link} from "react-router-dom";

import './index.css';

class ShowAllPayments extends Component{
     
    state={payments:[]}

    componentDidMount(){
        this.getPayments();
    }

    getPayments=async()=>{

        const url="https://appointmentsbackend.onrender.com/payments";
        const options={
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }
        const response=await fetch(url,options);
        if(response.ok){
            const data=await response.json();
            console.log(data);
            this.setState({payments:data});
        }else{
            console.log("Failed to fetch payments");
        }

    }

    deleteAllAppointments=async()=>{
        const url="https://appointmentsbackend.onrender.com/payments";
        const options={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }
        const response=await fetch(url,options);
        if(response.ok){
            console.log("All payments deleted successfully");
            this.getPayments();
        }
        else{
            console.log("Failed to delete all payments");
        }
    }

     

    render(){
        const {payments}=this.state;
        return(
            <div className="payments-container">
                <div className="navbar-for-payments">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>
                <button className="button-for-delete" onClick={this.deleteAllAppointments}>Delete All Payments</button>
                </div>
                <h1>Show All Payments</h1>
            

                <div>
                    {
                        payments.map(eachPayment=>{
                            return(
                                <div key={eachPayment.id} className="each-payment">
                                   
                                        <p>Student id : {eachPayment.student_id}</p>
                                        <p>Mentor id : {eachPayment.mentor_id}</p>
                                        <p>Amount : {eachPayment.amount}</p>
                                        <p>Appointment id : {eachPayment.appointment_id}</p>
                                        <p>Duration : {eachPayment.duration} minutes</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }

}

export default ShowAllPayments;
   
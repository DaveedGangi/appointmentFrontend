import {Component} from "react";
import {Link} from "react-router-dom";

import './index.css';

class AddStudent extends Component{

    state={name:"", area_of_interest:""}

    studentName=(event)=>{
        this.setState({name:event.target.value})
    }

    studentAreaOfInterest=(event)=>{
        this.setState({area_of_interest:event.target.value})
    }

    submitStudent=async(event)=>{
        event.preventDefault();
        const {name,area_of_interest}=this.state;
        const studentDetails={
            name,
            area_of_interest
        }
        console.log(studentDetails);
        //API call to save the student details here. For now, it's just logging the details.
        const url="https://appointmentsbackend.onrender.com/add-student";
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(studentDetails)
        }

       const response=await fetch(url,options);
       if(response.ok){
        console.log("Student details saved successfully");
        this.setState({name:"",area_of_interest:""})
       }
       else{
            console.log("Failed to save student details");
       }

    }
    render(){
        const {name,area_of_interest}=this.state;
        return(
            <div className="add-students-container">
                <div className="navbar-for-add-students">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>
                <h1>Add Students</h1>
                </div>
                <form className="add-student-form" onSubmit={this.submitStudent}>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={this.studentName} className="student-name" type="text" id="name" placeholder="Enter your name" required/>
                    <br/>
                    <label htmlFor="area-of-interest">Area of Interest</label>
                    <input value={area_of_interest} onChange={this.studentAreaOfInterest} className="student-area-of-interest" type="text" id="area-of-interest" placeholder="Enter your area of interest" required/>
                    <br/>
                    <button className="add-student-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;
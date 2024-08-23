import {Component} from "react";
import {Link} from "react-router-dom";

import './index.css';

class AvailableStudents extends Component{

    state={students:[]}

    componentDidMount(){
        this.getStudents();
    }
    getStudents=async()=>{
        const url="https://appointmentsbackend.onrender.com/students";
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
            this.setState({students:data});
        }
        else{
            console.log("Failed to fetch students");
        }
    }

    deleteAllStudents=async()=>{
        const url="https://appointmentsbackend.onrender.com/students";
        const options={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }
        const response=await fetch(url,options);
        if(response.ok){
            console.log("All students deleted successfully");
            this.getStudents();
        }
        else{
            console.log("Failed to delete all students");
        }
    }
    render(){
        const {students}=this.state;
        return(
            <div className="available-students-container">
                <div className="navbar-for-available-mentors">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>
                <h2>Number of students:{students.length}</h2>
                <div>
                <button className="delete-all-students-button" onClick={this.deleteAllStudents} type="button">Delete all students</button>
                </div>
             
                </div>
                <h1>Available Students</h1>
                <div className="students-container">
                    {
                        students.map(eachStudent=>(
                            <div className="each-student-details" key={eachStudent.id}>
                                <h1>student id:{eachStudent.id}</h1>
                                <h1>student name:{eachStudent.name}</h1>
                                <h1>student area of interest:{eachStudent.area_of_interest}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default AvailableStudents;
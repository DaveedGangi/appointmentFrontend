import {Component} from "react";
import {Link} from "react-router-dom";

import './index.css';

class AddMentors extends Component{

    state={name:"",expertiseMentor:"", expertise:[],premium:true}
    onSubmit=async(event)=>{
        event.preventDefault();
        const {name,expertise,premium}=this.state;
        const mentorDetails={name,expertise,premium};
        console.log(mentorDetails);
        if(name===""){
            alert("Please enter the mentor name");
        }
        else if(expertise.length===0){
            alert("Please enter the expertise");
        }
        else{
            const url="https://appointmentsbackend.onrender.com/add-mentor"
            const options={
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(mentorDetails)
            }
            const response=await fetch(url,options);
            if(response.ok){
                alert("Mentor added successfully");
                this.setState({name:"",expertise:[],premium:true});
            }
            else{
                alert("Mentor not added");
            }
        }
      
    }
    mentorName=(event)=>{
        this.setState({name:event.target.value});
    }
    expertise=(event)=>{
        this.setState({expertiseMentor:event.target.value});
    }
    premiumMentor=(event)=>{
        this.setState({premium:event.target.value});
    }
    addingExpertises=()=>{
     const {expertiseMentor,expertise}=this.state;
     this.setState({expertise:[...expertise,expertiseMentor]},()=>{
         this.setState({expertiseMentor:""});
     });
    }

    render(){
        const {expertiseMentor,expertise}=this.state;
        return(
            <div className="add-mentors-container">
                <div className="navbar-for-add-mentors">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>
                <h1>Add Mentors</h1>
                </div>
                <form className="form-mentor" onSubmit={this.onSubmit}>
                    <label htmlFor="mentorName">Mentor Name</label>
                    <input placeholder="Enter a mentor name" onChange={this.mentorName} className="mentor-name" type="text" id="mentorName" required />
                    <br/>
                    <label htmlFor="expertise">Expertise</label>
                    <input placeholder="Enter a mentor expertise in.." value={expertiseMentor} onChange={this.expertise} className="expertise-mentor" type="text" id="expertise" />
                    <br/>
                    <button className="expertise-add" onClick={this.addingExpertises} type="button">Add Multiple</button>
                    <br/>
                    {
                        expertise.map(each=>{
                            return(
                                <li className="expertise-list" key={each}>{each}</li>
                            )
                        })
                    }
                    <br/>
                    
                    <label htmlFor="premium">Premium</label>
                    <select onChange={this.premiumMentor} className="premium" id="premium">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    <br/>
                    <button className="add-mentor-button" type="submit">Add Mentor</button>
                </form>
            </div>
        )
    }
}

export default AddMentors;
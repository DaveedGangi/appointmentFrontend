import {Component} from "react";
import {Link} from "react-router-dom";

import "./index.css";

class AvailableMentors extends Component{

    state={mentors:[]}

    componentDidMount(){
        this.getMentors();
    }

    getMentors=async()=>{
       
        const url="https://appointmentsbackend.onrender.com/mentors"
        const options={
            method:"GET"
        }

    try{
        const response=await fetch(url,options);

        if(response.ok){
            const data=await response.json();
            console.log("fetched mentors  data")
            this.setState({mentors:data});
        }
        else{
            console.log("Mentors not available");
        }
    }
    catch(error){
        console.log(error);
        alert("Mentors not available");
    }
}

deleteAllMentors=async()=>{
    console.log("deleteAllMentors");
    const url="https://appointmentsbackend.onrender.com/mentors"
    const options={
        method:"DELETE"
    }
    const response=await fetch(url,options);
    if(response.ok){
        alert("All mentors deleted successfully");
        this.getMentors();
    }
    else{
        alert("Mentors not deleted");
    }

}

    render(){
        const {mentors}=this.state;
        return(
            <div className="available-mentors-container">

                <div className="navbar-for-available-mentors">
                <Link to="/book-sessions">
                <button className="button-for-book">  Go Back</button>
                </Link>

                
                <h2>Number of mentors:{mentors.length}</h2>
                <div>
                <button className="delete-all-mentors-button" onClick={this.deleteAllMentors} type="button">Delete all mentors</button>
                </div>
             
                </div>

          
                <div className="mentors-container">
                    {
                        mentors.map(eachMentor=>(
                            <div className="each-mentor-details" key={eachMentor.id}>
                                <h1>Id: {eachMentor.id}</h1>
                                <h1>Mentor Name:{eachMentor.name}</h1>
                                <h1>Mentor Expertise: {eachMentor.expertise}</h1>
                                <h1>Premium: {eachMentor.premium}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default AvailableMentors;
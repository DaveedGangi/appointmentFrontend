import {Switch,Route} from 'react-router-dom';
import './App.css';

import Home from './components/home/index';
import BookSessions from './components/booksessions';
import AddMentors from './components/addmentors';
import AvailableMentors from './components/availablementors';
import  AddStudent from './components/addstudents';
import AvailableStudents from './components/availablestudents';
import AddAppointments from './components/addappointments';
import ShowingAppointments from './components/showingappointments';
import ShowAllPayments from './components/showallpayments';

function App() {
  return (
   <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/book-sessions" component={BookSessions}/>
      <Route exact  path="/add-mentors" component={AddMentors}/>
      <Route exact  path="/available-mentors" component={AvailableMentors}/>
      <Route exact  path="/add-student" component={AddStudent}/>
      <Route exact  path="/available-students" component={AvailableStudents}/>
      <Route exact  path="/add-appointment" component={AddAppointments}/>
      <Route exact  path="/show-appointments" component={ShowingAppointments}/>
      <Route exact  path="/show-all-payments" component={ShowAllPayments}/>
    </Switch>

   </div>
  );
}

export default App;

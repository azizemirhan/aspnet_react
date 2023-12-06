import { Fragment, useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { Activity } from '../models/activity';
import { Container, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  
  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5261/api/activities').then(response => {
      setActivities(response.data)
    });
  }, [])

  function handleSelectActivity(id:string){
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handeleCanceSelectActivity(){
    setSelectedActivity(undefined);
  }
  return (
        <>
          <NavBar />
          <Container style={{marginTop: "7em"}}>
              <ActivityDashboard 
                activities={activities}
                selectedActivity={selectedActivity}
                selectActivity={handleSelectActivity}
                cancelSelectActivity={handeleCanceSelectActivity}
              />
          </Container>
        </>
      
  )
}

export default App

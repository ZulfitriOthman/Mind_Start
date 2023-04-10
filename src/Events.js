// import Register from "./Pages/Register"
// import Login from "./Pages/Login"
import Event from "./Pages/Eventitem"

import Card from './Pages/Card';


  // return <Register /> ;
  // return <Login /> ;

  function Events() {



    
  return (

  <div >
    <h2>Hello</h2>

    <Card className="events">
      <Event title={events[0].title} detail={events[0].detail} date={events[0].date}></Event>
      <Event title={events[1].title} detail={events[1].detail} date={events[1].date}></Event>
      <Event title={events[2].title} detail={events[2].detail} date={events[2].date}></Event>
      <Event title={events[3].title} detail={events[3].detail} date={events[3].date}></Event>
    </Card>
    </div>



  )
}

export default Events;
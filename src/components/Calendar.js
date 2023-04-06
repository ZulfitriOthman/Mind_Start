import Calendar from "react-calendar";
import '../App.css'

const Calendar = ({ date, setDate}) => {
    return (
        <>
        <div className='app text-center'>
          <h1 className='text-center'>React Calendar</h1>
          <div className='calendar-container-center'>
            <Calendar onChange={setDate} value={date} selectRange={true} />
          </div>
          {date.length > 0 ? (
            <p>
              <span>Start:</span> {' '} {date[0].toDateString()}
              &nbsp; to &nbsp;
              <span>End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p>
              <span>Default selected date:</span>{' '} {date.toDateString()}
            </p>
          )}
        </div>
      </>
    )
}
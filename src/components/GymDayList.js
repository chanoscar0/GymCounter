import MdDirectionsBike from 'react-icons/lib/md/directions-bike'
import FaHeartbeat from 'react-icons/lib/fa/heartbeat'
import Calendar from 'react-icons/lib/fa/calendar'
import { GymDayRow } from './GymDayRow'
import {PropTypes} from 'react'
import {Link} from 'react-router'

export const GymDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/crowded|kenneth/))?
                       days:
                       days.filter(day => day[filter])
  return(
    <div className = "gym-day-list">
      <table>

        <thead>
            <tr>
                <th>Date</th>
                <th>Gym</th>
                <th>Crowded</th>
                <th>Kenneth</th>
            </tr>
            <tr>
              <td colSpan = {4}>
                <Link to="/list-days">
                  All days
                </Link>
                <Link to="/list-days/crowded">
                  Crowded days
                </Link>
                <Link to="/list-days/kenneth">
                  Kenneth days
                </Link>
              </td>
            </tr>
        </thead>
        <tbody>
            {filteredDays.map((day, i) =>
                    <GymDayRow key = {i}
                               {...day}/>
            )}
        </tbody>
      </table>
    </div>
  )
}
GymDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)){
      return new Error("GymDayList should be an array")
    } else if (!props.days.length){
      return new Error ("GymDayList must have at least 1 record")
    } else{
      return null
    }
  }
}

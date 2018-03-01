import MdDirectionsBike from 'react-icons/lib/md/directions-bike'
import FaHeartbeat from 'react-icons/lib/fa/heartbeat'
import Calendar from 'react-icons/lib/fa/calendar'
import {PropTypes} from 'react'

export const GymDayRow = ({gym, date, crowded, kenneth}) =>(
    <tr>
        <td>
            {date}
        </td>
        <td>
          {gym}
        </td>
        <td>
          {(crowded) ? <FaHeartbeat /> : null}
        </td>
        <td>
          {(kenneth) ? <MdDirectionsBike /> : null}
        </td>
    </tr>



)
GymDayRow.propTypes = {
  gym: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  crowded: PropTypes.bool,
  kenneth: PropTypes.bool
}

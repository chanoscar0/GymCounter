import '../stylesheets/ui.scss'
import MdDirectionsBike from 'react-icons/lib/md/directions-bike'
import TiGroup from 'react-icons/lib/ti/group'
import Calendar from 'react-icons/lib/fa/calendar'
import {PropTypes} from 'react'

const percentToDecimal = (decimal) => {
  return ((decimal*100)+ '%')
}

const calcGoalProgress = (total,goal) => {
  return percentToDecimal(total/goal)
}

export const GymDayCount = ({total=50, goal=100, crowded=15, kenneth=30}) => (
      <div className='gym-day-count'>
        <div className = 'total-days'>
          <span>{total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className = 'crowded-days'>
          <span>{crowded}</span>
            <TiGroup />
          <span>days</span>

        </div>
        <div className = 'kenneth-days'>
          <span>{kenneth}</span>
            <MdDirectionsBike />
          <span>days</span>

        </div>
        <div>
          <span>{Percentage of Goal (100 days): calcGoalProgress(total, goal)}</span>

        </div>
      </div>)
GymDayCount.propTypes = {
  total: PropTypes.number,
  crowded: PropTypes.number,
  kenneth: PropTypes.number,
  goal: PropTypes.number
}

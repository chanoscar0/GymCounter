import { createClass } from 'react'
import {GymDayList} from './GymDayList'
import {GymDayCount} from './GymDayCount'
import {AddDayForm} from './AddDayForm'
import {Menu} from "./menu"
export const App = createClass({
  getInitialState() {
    return {
        allGymDays: [
  			{
    				gym: "Costa Mesa Harbor",
    				date: "2018-01-02",
    				crowded: true,
    				kenneth: false
  			}

  		]
    }
    this.addDay = this.addDay.bind(this)
  },
  addDay(newDay){
    this.setState({
      allGymDays: [
        ...this.state.allGymDays,
        newDay
      ]
    })
  },
  countDays(filter){
    return this.state.allGymDays.filter(function(day) {
      if(filter) {
        return day[filter]
      } else{
        return day
      }
    }).length
  },
  render(){
    return (
      <div className = 'app'>
      <Menu />
      {(this.props.location.pathname === "/") ?
      <GymDayCount total = {this.countDays()}
                   crowded = {this.countDays('crowded')}
                   kenneth = {this.countDays('kenneth')}/> :
      (this.props.location.pathname === "/add-day") ?
        <AddDayForm onNewDay = {this.addDay} /> :
        <GymDayList days = {this.state.allGymDays}
                    filter = {this.props.params.filter}/>

    }

      </div>
    )
  }
})

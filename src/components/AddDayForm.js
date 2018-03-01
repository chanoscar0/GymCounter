import { PropTypes , Component} from 'react'

const ocGyms = [
	"Costa Mesa Harbor",
	"Michelle Drive Tustin",
	"Barranca Drive Irvine",
	"Irvine Drive Irvine",
	"Brookhurst Street Fountain Valley",
	"Huntington Huntington Beach"
]
class Autocomplete extends Component {
	get value(){
		return this.refs.inputGym.value
	}

	set value(inputValue){
		this.refs.inputGym.value = inputValue
	}
	render(){
		return (
			<div>
				<input ref = "inputGym" type = 'text' list = "oc-gyms" />
				<datalist id = "oc-gyms">
						{this.props.options.map(
							(opt,i)=>
							<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}
export const AddDayForm = ({gym, date, crowded, kenneth, onNewDay}) => {
	let _gym, _date, _crowded, _kenneth

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			gym: _gym.value,
			date: _date.value,
			crowded: _crowded.checked,
			kenneth: _kenneth.checked
		})
		_gym.value = ""
		_date.value = ""
		_crowded.checked = false
		_kenneth.checked = false
	}
	return (
		<form  onSubmit = {submit} className="add-day">
			<label htmlFor = "gym">Gym Name:</label>
			<Autocomplete options = {ocGyms}
						 ref = {input => _gym = input} />
			<label htmlFor = "date">Date:</label>
			<input id = "date"
						 type = "date"
						 required
						 defaultValue = {date}
						 ref = {input => _date = input}/>
			<div>
				<input id = "crowded"
							 type = "checkbox"
							 defaultChecked = {crowded}
							 ref = {input => _crowded = input}/>
				<label htmlFor = "crowded">Was it crowded?</label>
			</div>
			<div>
				<input id = "kenneth"
							 type = "checkbox"
							 defaultChecked = {kenneth}
							 ref = {input => _kenneth = input}/>
				<label htmlFor = "kenneth">Did Kenneth go with you?</label>
			</div>
			<button>Add Day</button>
		</form>
	)

}

AddDayForm.defaultProps = {
	gym: "Costa Mesa Harbor",
	date: "2018-02-07",
	crowded: true,
	kenneth: false
}
AddDayForm.propTypes = {
	gym: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	crowded: PropTypes.bool.isRequired,
	kenneth: PropTypes.bool.isRequired
}

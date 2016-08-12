
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 21;

class EmployeeList extends Component {
	componentWillMount(){
		this.page = 1;
	}
	handleButtonClick(){
		Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
		this.page += 1;
	}
	render() {
	// props.employees => an array of employee objects
	//the difference between props.employee and props is that props is the object
	//which contains employee's array and other things like other configuration.
	return (
		<div>
			<div className="employee-list">
				{this.props.employees.map(employee => 
					<EmployeeDetail key={employee._id} employee={employee} />
					)}
			</div>
			<button onClick={this.handleButtonClick.bind(this) }
				className="btn btn-primary">
				Load More
			</button>
		</div>
		);
	}
}; 


export default createContainer(() => {
	//set up subscription
	Meteor.subscribe('employees', PER_PAGE);

	//return an object. Whatever we return will be sent to EmployeeList as props

	return { employees: Employees.find({}).fetch() };
	}, EmployeeList);


// At first it is a container and it contain the subscription system which require 
//the data from employees 
//this js file is the mongodb layer
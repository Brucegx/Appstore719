// only executed on the server

import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
	//Great place to generate data 


	//check to see if data exists in the collection
	//see if the collection has any records
	const numberRecords = Employees.find({}).count();
	console.log(numberRecords);
	if (!numberRecords){
		//generate some data...
		_.times(5000, () => {
			const { name, email, phone } = helpers.createCard();

			Employees.insert({
				name, email, phone,
				avatar: image.avatar()
			}); 
		});
	}

	Meteor.publish('employees', function() {
		return Employees.find({}, { limit: 20 });

	});//that is the publication system we designed.
});

//server is upper than the employeeslist. the publication system is aim to client. 
//so it called publication system. it will get 20 records from the employees
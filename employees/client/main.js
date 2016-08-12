import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';

//after <eteor loads in the browser, render my app to the DOM.

const App = () => {
	return (
		<div>
			<EmployeeList />
		</div>
	);
};


Meteor.startup(() => {
	//react render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});

//nomarlly we use class in html and classname in js!!!collections
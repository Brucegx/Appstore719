// Any Js in here is automatically ran for us


// Import the React Library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// we can import the react just call react but we must provide the path because there might be many the same name called Image_list

// Create a component
const App = () => {
	return (
		<div>
			<ImageList /> 
		</div>
	);
};

// Render this component to the screen(excute)

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});



//tell the browser to find the container if find it reutrn app or excute app 
//but it not excute inmideately so we use meteor.startup()to load it 






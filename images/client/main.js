// Any Js in here is automatically ran for us


// Import the React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// we can import the react just call react but we must provide the path because there might be many the same name called Image_list

// Create a component
/*const App = () => {
	return (
		<div>
			<ImageList /> 
		</div>
	);
};
*/
//class based component

class App extends Component {
	constructor(props){
		super(props);

		this.state = { images: [] };
	} //constructor method is special method in js. And create a statement is the only way to rerender.

	componentWillMount(){
		//Fantastic place to load data! componentWillMount会在组件render之前执行，并且永远都只执行一次
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then(response => this.setState({ images: response.data.data})); //it slove the time too late for render
		// Never Do This-
		// this.state.images=[ {}, {}]; it does not work setState is the unique way to change the state

	}

	render() {
		return (
		<div>
			<ImageList images={this.state.images}/> 
		</div>
		);
	}
};

// Render this component to the screen(excute)

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));

});



/*tell the browser to find the container if find it reutrn app or excute app 
but it not excute inmideately so we use meteor.startup()to load it 
Pay attention!!! do not wirte the note free like 15th line we can not make the note
after the ImageList (//<h1>Image List<h1> because we import ImageList)


*/





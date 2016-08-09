//Create our image list component 

//Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
	{ title: 'Modric', link: 'https://en.wikipedia.org/wiki/Luka_Modri%C4%87#/media/File:Shahter-Reak_M_2015_(10).jpg' },
	{ title: 'Isco' link: 'http://www.mcfcwatch.com/wp-content/uploads/2015/12/Ini-Syarat-Untuk-Isco-Gantikan-James-Di-Skuat-Utama-real-Madrid-.jpg' },
	{ title: 'Navas' link: 'http://e1.365dm.com/16/05/768x432/keylor-navas-real-madrid-costa-rica_3476350.jpg?20160531131749' }

]; 
/* using the capital words to represent constant data.
It has title propertity and link propertity

*/



//Create our component 
const ImageList = () => {
	return (
		<ul>
			<ImageDetail />
		</ul>
	);
};

//Export our component 
export default ImageList; //each file's component will not shared by default

//main show the ImageList and the ImageList shows ImageDetail. Course S27
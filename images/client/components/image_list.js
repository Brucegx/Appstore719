//Create our image list component 

//Import React
import React from 'react';
import ImageDetail from './image_detail';

/*const IMAGES = [
	{ title: 'Modric', link: 'http://estaticos.marca.com/imagenes/2015/09/28/en/football/real_madrid/1443465799_extras_noticia_foton_7_0.jpg' },
	{ title: 'Isco', link: 'http://www.mcfcwatch.com/wp-content/uploads/2015/12/Ini-Syarat-Untuk-Isco-Gantikan-James-Di-Skuat-Utama-real-Madrid-.jpg' },
	{ title: 'Navas', link: 'http://e1.365dm.com/16/05/768x432/keylor-navas-real-madrid-costa-rica_3476350.jpg?20160531131749' }

]; 
/* using the capital words to represent constant data.
It has title propertity and link propertity

we do not use the static data anymore and pass the image through the api call
*/



//Create our component 
const ImageList = (props) => {
	const validImages = props.images.filter(image => !image.is_album);

	const RenderedImages = validImages.map(image =>
		<ImageDetail key={image.title} image={image}/>
	); //Each child in an array or iterator should have a unique "key" prop.

// image transfer to the ImageDetail 
	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

//Export our component 
export default ImageList; //each file's component will not shared by default

//main show the ImageList and the ImageList shows ImageDetail. Course S27
import React from 'react';

const ImageScore = (props) => {
	//props.ups is the number of upvotes
	// props.donws is the number of downvotes

	const { ups, downs } = props;
	/*up line equeal to below: 
	const ups = props.ups
	const downs = props.downs
	*/

	const upsPercent = 100 * (ups / (ups + downs)); 
	const downsPercent = 100 * (downs / (ups + downs)); 
	//${}can excute the experssion in a string but I do not know why there are not working.
	//finaly done! $ does not work so I do it directly
	return (
		<div>
			Ups/Downs
			<div className="progress">
				<div style={{width: upsPercent + "%"}} className="progress-bar progress-bar-success" />
				<div style={{width: downsPercent + "%"}} className="progress-bar progress-bar-danger" />
			</div>		
		</div>
	); 
};

export default ImageScore;


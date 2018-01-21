import React from "react";

const DoglistItem = (props) => {
	return (

		<li onClick={() => props.onDogSelect(props.dogSrc, props.doggieDeets)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={props.dogSrc} alt="" className="dogImg"/>
 				</div>
 				<div className="media-body">
 					<div className="media-heading">{props.doggieDeets}</div>
 				</div>
			</div>
		</li>
	);
}

export default DoglistItem;


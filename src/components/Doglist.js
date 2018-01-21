import React from "react";
import DoglistItem from "./DoglistItem";

const Doglist = (props) => {
	const dogItems = props.theDogs.map( (dog, i) =>{
		return  (
			<DoglistItem 
				key={dog} 
				dogSrc={dog} 
				onDogSelect = {props.onDogSelect}
				doggieDeets = {props.theDogDetails[i]}
			/>
		);
	})

	return (
		<div className="list-group">
			{dogItems}
		</div>	
	);
}

export default Doglist;
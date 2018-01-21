import React from "react";

const MainDog = (props) => {
	if (!props.mainDog) {
		return <div>Loading...</div>
	}
	return (
		<div className="dog-detail">
			<img src={props.mainDog} className="maindogimg"/>
			<div className="details">
				<h1 className="title">{props.dogName}</h1>
				<span className="doggoIps">{props.mainDogDetails}</span>
			</div>
		</div>
	);
}

export default MainDog;
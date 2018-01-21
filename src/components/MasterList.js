import React from "react";

const MasterList = (props) => {
	function handleClick(e) {
		e.preventDefault();
		props.onDogSelect(e.target.innerText);
	}
	const indivBreed = props.breedList.map( (breed) =>{
		return  (
			<span>
				<span className="dog" breed={breed} key={breed} onClick={handleClick.bind(breed)}>
					{breed}
				</span>
				<span className="slash"> | </span>
			</span>
		);
	})
	return (
		<div>
			<div className={props.hideDisplay} id="overlay"></div>
			<div className={props.hideDisplay} id="doglistmodal">
				<h1>Breed List</h1>
				<p>This app currently only supports breeds from dog.ceo's API. Please pick a breed from the list.</p>
				{indivBreed}
			</div>
		</div>	
	);
}

export default MasterList;
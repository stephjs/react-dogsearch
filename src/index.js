import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./components/Searchbar";
import Doglist from "./components/Doglist";
import MainDog from "./components/MainDog";
import MasterList from "./components/MasterList";
import FullDoggoIpsum from './dogoIpsum';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			searchTerm: "pug",
			selectedVideo: null,
			dogpictures: [],
			dogDetails: FullDoggoIpsum,
			selectedDogPic: null,
			selectedDogDetails: null,
			breedList: [],
			hideOrDisplayModal: "hideModal"
		};
		this.searchForDog(this.state.searchTerm);
		this.getBreedList();
	}

	//ty stack overflow! https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}

	getBreedList() {
		fetch("https://dog.ceo/api/breeds/list")
			.then(results => {
				return results.json();
			}).then(data => {
				this.setState({
					breedList: data.message
				});
			})
	}
	searchForDog(searchTerm) {
		fetch("https://dog.ceo/api/breed/"+searchTerm+"/images")
			.then(results => {
				return results.json();

			}).then(data => {
				if (data.message == "Breed not found") {
					this.setState({
						hideOrDisplayModal: "showModal"
					});
				} else {
					const dogData = this.shuffle(data.message);
					const dogLorem = this.shuffle(FullDoggoIpsum);
					this.setState({
						dogDetails: dogLorem,
						searchTerm: searchTerm,
						dogpictures: dogData,
						selectedDogPic: dogData[0],
						selectedDogDetails: dogLorem[0]
					})
				}
			})
	}

	onVideoSelect(newVideo) {
		const firstVideo = newVideo;
		let DogList = this.state.videos;
		DogList = DogList.sort(function(x,y){ return x == firstVideo ? -1 : y == firstVideo ? 1 : 0; });
		this.setState({
			videos: DogList,
			selectedVideo: newVideo
		});
	}

	onDogSelect(img, details) {
		window.scrollTo(0, 0);
		this.setState({
			selectedDogPic: img,
			selectedDogDetails: details
		});
	}
	modalDogSelect(dog) {
		this.setState({
			hideOrDisplayModal: "hideModal"
		});
		this.searchForDog(dog);
	}
	render() {
		return (
			<div>
				<MasterList 
					hideDisplay={this.state.hideOrDisplayModal} 
					breedList={this.state.breedList}
					onDogSelect={this.modalDogSelect.bind(this)}
				/>
				
				<Searchbar onSearchTermChange={ term => this.searchForDog(term) } />	

				<div className="container">
					<div className="row">	
						
						<div className="col-lg-7">
							<MainDog
								dogName={this.state.searchTerm}
								mainDog={this.state.selectedDogPic}
								mainDogDetails={this.state.selectedDogDetails}
							/>
						</div>
						<div className="col-lg-5">
							<Doglist
								theDogs={this.state.dogpictures}
								theDogDetails={this.state.dogDetails}
								onDogSelect={this.onDogSelect.bind(this)}
							/>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));
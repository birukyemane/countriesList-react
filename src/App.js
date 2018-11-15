import React, { Component } from 'react';
import './App.css';
import './components/Country.js';

const Countries= ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

class App extends Component {
  state = {
    searchKey: "",
    reslut: Countries,
    startWith: true,
    includes: false,
  }

  searchEventHandler = (e) => {
    this.setState({searchKey: e.target.value});  
  }

  startWithEventHandler = (e) => {
    this.setState({startWith: true,includes:false});
  }
  
  includesEventHandler = (e) => {
    this.setState({startsWith: false,includes: true})
  } 

  startsWith = (keyWord) => { // search countries that start with the input search key word		
		return Countries.filter(e => e.toLowerCase().startsWith(keyWord.toLowerCase()));		
	}
	
	containsWord = (keyWord) => { // search countries that includes the search key word		
		return Countries.filter(e => e.toLowerCase().includes(keyWord.toLowerCase()));
  }
  
  randomHexaColor = () =>{
    let randomNum = Math.floor(Math.random()* 10000000);
    return (`#${randomNum.toString(16)}`);    
  }

  render() {
    let result = this.state.reslut; 
    let key = this.state.searchKey;
    if(this.state.startWith) {
      result = this.startsWith(key);
    }

    if(this.state.includes){
      result = this.containsWord(key);
    }

    let  numOfResults = (result.length >1 ? `${result.length} matchs found` : `${(result.length===1?"1 match found":"No matches found")}`);	
    let resultsFoundClass = (result.length >= 1? "found":"not-found");

    return (
      <div className="flex-container">
        <header className="flex-container">          
          <div className="flex-items">
              <i className="fa fa-globe fa-3x"></i>
              <h1>World countries List</h1>                        
          </div>
          <p id="noOfCountries"  className="flex-items">Total number of countries {Countries.length}</p> 
          <div className="flex-items">                    
            <input  onChange={this.startWithEventHandler} id="startWord" type="radio" name="wordPositon" value="startWord" checked/>
            <label htmlFor="starWord"> Starts with</label>
            <input onChange={this.includesEventHandler} id="anyWord" type="radio" name="wordPositon" value="anyWord"/> 
            <label htmlFor="anyWord">Includes</label>
          </div>          
          <input onChange={this.searchEventHandler} id="searchInput" type="text"  placeholder="type search" className="flex-items"/>         
          <div/>     
        </header>
        <div>
          <p className = {resultsFoundClass}>{numOfResults}</p>
        </div>
        {result.map((country,index)=>{
           return <div id="countryInfo" className="flex-items" key={index} style={{background:this.randomHexaColor()}}> {country}</div>
        })}             
      </div>
    );
  }
}

export default App;

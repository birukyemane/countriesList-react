import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="flex-container">
          
          <div className="flex-items">
              <i className="fa fa-globe fa-3x"></i> 
              <h1>World countries List</h1>                        
          </div>
          <p id="noOfCountries"  className="flex-items">Total number of countries </p> 
          <div className="flex-items">                    
                  <input id="startWord" type="radio" name="wordPositon" value="startWord"/>
                  <label for="starWord"> Starts with</label>
                  <input id="anyWord" type="radio" name="wordPositon" value="anyWord"/> 
                  <label for="anyWord">Includes</label>
          </div>
          
          <input id="searchInput" type="text"  placeholder="type search" class="flex-items"/>
         
          <div/>
     
      </header>
      </div>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import './styles.scss';
import 'moment-timezone';
var moment = require('moment');

const destination = document.getElementById("root");
console.log(moment.tz("America/New_York").format())

const form = 'dddd, MMMM Do, h:mm A'

var SanFrancisco = moment.tz("America/Los_Angeles").format(form);
var Seoul = moment.tz("Asia/Seoul").format(form);
var Berlin  = moment.tz("Europe/Berlin").format(form);
var London = moment.tz("Europe/London").format(form);

class App extends React.Component {

    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <div>
            <h2>Seoul 🇰🇷</h2> 
            <p>{Seoul}</p>
          </div>
          <div>
            <h2>Berlin 🇩🇪</h2> 
            <p>{Berlin}</p>
          </div>
          <div>
            <h2>London 🇬🇧</h2> 
            <p>{London}</p>
          </div>
          <div>
            <h2>San Francisco 🇺🇸</h2> 
            <p>{SanFrancisco}</p>
          </div>
        </div>
      )  
    }
}
  
ReactDOM.render(<App />, destination);
/*import React, { Component } from 'react';
import '../css/App.css';
import Navigation from './Navbar';
import QRCode from './QRCode';
import FindRoom from './FindRoom';
import ToggleAnimation from './ToggleAnimation';
import cameraicon from '../img/camera-icon.png';


const pStyle = {
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: 'Regular',
  color: '#00B9FF',
  marginTop: '50px',
  marginBottom : '40px',
  textTransform: 'uppercase',
  top: '80px',
  letterSpacing: '0.1rem',
  
};

const orStyle = {
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: '600',
  color: '#00B9FF',
  marginTop: '40px',
  marginBottom : '10px',
  
};

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ToggleAnimation />
        <div className="navigation-text">HOME</div>
        <div className="top-text">
          Scan QR code
        </div>     
        <QRCode/>      
        <p style={orStyle}>or</p>
        <p style={pStyle}>Enter room number</p>
        <FindRoom/>
      </div>
    );
  }
}

export default Home;*/


//sujan downside
import React, {Component} from 'react';
import firebase from './firebase';
import Frontpage from'./Frontpage'

class Home extends Component {

    logout = () => {
        firebase.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>You are home!</h1>
                <Frontpage/>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home; 
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'; 

import './App.css';
import Profiles from './components/profiles';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';




class App extends Component {
  render() {
    return (
<Grid>
        <Row >
          <Col className="bleu" xs={3} md={3} lg={3}>
            <h1> Ameni Ezzine</h1>
            <img src="../image.jpg" className="img" />
            <header className="carre">
              <p className="p1">Personal info</p>
            </header>
            <div>
            <Profiles/>
            </div>
            <header className="carre">
              <p className="p1">skills</p>
            
            </header>
            <div>
            <Skills/>
            </div>
          </Col>
          <Col className="white" xs={9} md={9} lg={9}>
<hr/>
<p className="pas"> Experience</p>
<hr/>
<div>
            <Experience/>
</div>
<hr/>
<p className="pas"> Education</p>
<hr/>   

<div>
            <Education/>
</div>




          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;

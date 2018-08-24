import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Box from './components/box';
import Pro from './components/pro';
import Par from './components/par';


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
            <Box des1="address" des2="Dar Chaaben , Nabeul" />
            <Box des1="phone" des2="+216 22 973 414" />
            <Box des1="E-mail" des2="ameniezzine2@gmail.com" />
            <Box des1="Date of birth" des2="1996-08-17" />
            <Box des1="LinkedIn" des2="https://www.linkedin.com/in/ameni-ezzine-224466156/" />
            <header className="carre">
              <p className="p1">skills</p>
            <Pro des="c/c++" num="40" />
            <Pro des="javascript" num="50" />
            <Pro  des="php" num="20" />
            <Pro des="sql" num="20" />
            <Pro des="html" num="70" />
            <Pro des="css" num="80" />

            </header>
          </Col>
          <Col className="white" xs={9} md={9} lg={9}>
<hr/>
<p className="pas"> Experience</p>
<hr/>
<Par des="2013:&nbsp;&nbsp;&nbsp;membre d'association les etoiles de quatrième art" />
<Par des="2014:&nbsp;&nbsp;&nbsp;membre d'association evenements sans frontiéres" />
<Par des="2015:&nbsp;&nbsp;&nbsp;membre d'association evenements sans frontiéres" />
<Par des="2016:&nbsp;&nbsp;&nbsp;membre d'association evenements sans frontiéres" />
<Par des="2017&nbsp;&nbsp;&nbsp;:membre de comité des jeunes persévérants" />
<Par des="2018:&nbsp;&nbsp;&nbsp;membre d'AIESEC Nabel" />
<hr/>
<p className="pas"> Education</p>
<hr/>   
<Par des="2015:&nbsp;&nbsp;&nbsp;Certificat de HTML avec Sololearn" />
<Par des="2017:&nbsp;&nbsp;&nbsp; Diplome de baccalauréat en informatique " />
<Par des="2018:&nbsp;&nbsp;&nbsp;certificat A-1 de British Council" />
<Par des="2018:&nbsp;&nbsp;&nbsp;certificat A-2 de British Council" />
<Par des="2018:&nbsp;&nbsp;&nbsp;certificat B-1 de British Council" />






          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;

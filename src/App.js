import React, { Component } from 'react';
import './App.css';
import Col from './components/Grid/Col';
import Row from './components/Grid/Row';
import Grid from './components/Grid';

class App extends Component {

  render() {

    const col = {
        'col-6-tablet': true,
        'col-3-desktop': true,
        margin: 12,
        width: 1440,
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>Component Styles Grid Layout</h2>
        </div>


          <h1>Basic Use</h1>
          <p>Breakpoint set to tablet size</p>
          <Grid>
              <Row>
                  <Col col-12-tablet margin={ 12 }><p>12 Column</p></Col>
                  <Col col-6-tablet margin={ 12 }><p>6 Column</p></Col>
                  <Col col-6-tablet margin={ 12 }><p>6 Column</p></Col>
                  <Col col-4-tablet margin={ 12 }><p>4 Column</p></Col>
                  <Col col-4-tablet margin={ 12 }><p>4 Column</p></Col>
                  <Col col-4-tablet margin={ 12 }><p>4 Column</p></Col>
                  <Col col-3-tablet margin={ 12 }><p>3 Column</p></Col>
                  <Col col-3-tablet margin={ 12 }><p>3 Column</p></Col>
                  <Col col-3-tablet margin={ 12 }><p>3 Column</p></Col>
                  <Col col-3-tablet margin={ 12 }><p>3 Column</p></Col>
                  <Col col-2-tablet margin={ 12 }><p>2 Column</p></Col>
                  <Col col-2-tablet margin={ 12 }><p>2 Column</p></Col>
                  <Col col-2-tablet margin={ 12 }><p>2 Column</p></Col>
                  <Col col-2-tablet margin={ 12 }><p>2 Column</p></Col>
                  <Col col-2-tablet margin={ 12 }><p>2 Column</p></Col>
                  <Col col-2-tablet margin={ 12 }><p>2 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
                  <Col col-1-tablet margin={ 12 }><p>1 Column</p></Col>
              </Row>
          </Grid>



          <h1>Advance Use ()</h1>
          <p>Breakpoint set to tablet and desktop</p>

          <Grid>
              <Row>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
                  <Col {...col}><p>6 and 3 Columns</p></Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;

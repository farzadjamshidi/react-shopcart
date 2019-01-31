import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter';
import NavBar from './components/navbar';
import {
  Container,
  Button
} from 'reactstrap';


class App extends Component {
  state ={
    counters : [
        {id : 1 , value : 0},
        {id : 2 , value : 0},
        {id : 3 , value : 0},
        {id : 4 , value : 0},
        {id : 5 , value : 0}
    ]
}

handleIncreement = selectedcounter => {
    const prevcounters = this.state.counters;
    const newcounters = prevcounters.find(c => c.id === selectedcounter.id).value++;
    this.setState({newcounters});
}

handleDecreement = selectedcounter => {
    const prevcounters = this.state.counters;
    const newcounters = prevcounters.find(c => c.id === selectedcounter.id).value--;
    this.setState({newcounters});
}

handleDelete = selectedcounterid => {
    const counters = this.state.counters.filter(c => c.id !== selectedcounterid);
    console.log (counters);
    this.setState({counters : counters});
}

handleReset = () => {
  const newcounters = this.state.counters.map(c => {
    c.value = 0;
    return c;
  });

  this.setState({newcounters});
}


  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters}/>
        <Container>
          <div style={{float : 'right'}}>
              {this.state.counters.map(counter => 
                  <Counter
                      key = {counter.id}
                      counter={counter}
                      onIncreement={this.handleIncreement}
                      onDecreement={this.handleDecreement}
                      onDelete={this.handleDelete}
                  />
              )}
              <Button color="success" className="btn-sm md-2" onClick={this.handleReset}>
              ری استارت
              </Button>
                  
          </div>
        </Container>

      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Counter from './counter';

import {
    Button,
    Container
} from 'reactstrap';

class Counters extends Component {
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


    render(){
        return(
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
                    
                </div>          
            </Container>
        );

    }


}

export default Counters;
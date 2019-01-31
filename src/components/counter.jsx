import React, { Component } from 'react';
import {
    Button,
    Badge
} from 'reactstrap';

class Counter extends Component {

    render(){
        return(
            <div>
                <Badge color={this.props.counter.value === 0 ? 'warning' : 'info'} className="m-2">
                    {this.props.counter.value}
                </Badge>
                <Button color="danger" className="btn-sm m-2"
                onClick={() => this.props.onDelete(this.props.counter.id)}>
                    حذف
                </Button>
                <Button color="primary" className="btn-sm m-2"
                onClick={() => this.props.onDecreement(this.props.counter)}
                >
                    کاستن
                </Button>
                <Button color="primary" className="btn-sm"
                onClick={() => this.props.onIncreement(this.props.counter)}
                >
                    افزودن
                </Button>
            </div>
        );

    }


}

export default Counter;
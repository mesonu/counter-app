import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {


        /*
        Object destructuing arguments
        ex- let obj = {
            a:sonu,
            b:manoj
        }

        let {a,b} = obj;
        console.log(a); //get the output sonu
        console.log(b); //get the output manoj
        Here do I similar in this.props object
        */

        const { onReset, onDelete, onIncrement, counters } = this.props;
        return (
            // elments inseted of use array 


            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(counter => (
                    <Counter
                        onDelete={onDelete}
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                    >
                        {/* we can also pass the children props in Counter.jsx and get this.props,children in counter.js render method */}
                        {/* <h4>Title</h4> basically use dialog prompt*/}
                    </Counter>
                ))}
            </div>
        );
    }


}

export default Counters;
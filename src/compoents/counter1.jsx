import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        imageUrl: 'http://picsum.photos/200',
        tags: ["tag1", "tag2", "tag3"]
    };

    //one approch is used this inside event handler function
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    /*
    * Handle the event Handler
    * when call the event function do not use the function name with (),only call the pfunction name becuase only pass the refrence of function.
    * One more things, we can not access the this method inside event function.ex: this.state.tags.
    * for access this method we can use bind method inside a constructor function.Another approach is used the arrow function because arraow function does not need to this function.
    */
    // handleIncrement() {
    //     console.log('Increment clicked', this);
    // }

    //Annother approch is used to Arrow function for without using bind method

    handleIncrement = (params) => {
        //this.state.count++; //does not update in react, for updating the state value use setState()
        console.log('params', params);
        this.setState({ value: this.state.value + 1 });
    }

    //passing the params in event Hadler method there is two way first create another method and call them and create inline function
    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    }

    render() {
        //let classes = this.getBadgeClasses();
        //check pass props from counters.jsx
        console.log('props', this.props);
        return (
            <div>

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                {/* <button onClick={this.doHandleIncrement} className="btn btn-secondary sm-btn"> Increment</button> */}
                <button onClick={() => { this.handleIncrement({ id: 1 }) }} className="btn btn-secondary btn-sm"> Increment</button>
                {/* another way for conditaional operator use for empty case */}
                {/* {(this.state.tags.length === 0 && <p>Please create a Tags!!!!</p>)}
                {this.renderTags()} */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    //get the dynamic classes
    getBadgeClasses() {
        let classes = "badge  m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

    //conditional oprator use for rendering the tags:first way
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    }
}

export default Counter;

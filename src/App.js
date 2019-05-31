import React, { Component } from "react";
import NavBar from "./compoents/navbar";
import Counters from "./compoents/counters";
import "./App.css";
class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    };
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
        console.log("delete button clicked", counterId);
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters]; //copy the this.state.counters
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(c => c.value > 0).length
                    }
                />
                <main className="container" role="main">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;

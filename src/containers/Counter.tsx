import React from 'react';

export interface CounterProps {

}

export interface CounterState {
    counter: number;
}

export class Counter extends React.Component<CounterProps, CounterState> 
{
    constructor(props: CounterProps)
    {
        super(props);

        this.state = {counter: 0};
    }

    incrementCounter() {
        this.setState({counter: this.state.counter + 1});
    }

    render() 
    {
        return <>
            <h1>counter at: {this.state.counter}</h1>
            <button onClick={() => this.incrementCounter()} />
        </>;
    }
}

import React, { Component } from 'react';

class Fizzbuzz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: ''
        }
    }

    fizzBuzz(n) {
        if(!Number(n)) {
            this.setState({result: "Please enter an integer"})
        }
        if( n <= 0) {
            this.setState({result: "Please enter a number greater than zero"})
        }

        let i = 1;
        while ( i <= n){
            if(i % 5 === 0 && i % 3 === 0){
                this.setState({result: 'fizzbuzz', input: ''});
            } else if(i % 3 === 0){
                this.setState({result: 'fizz', input: ''});
            } else if(i % 5 === 0){
                this.setState({result: 'buzz', input: ''});
            } else {
                this.setState({result: i, input: ''});
            }
            i++;
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    handleKeyPress = (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('submit-button').click();
        }
    }
        
    render() {
        return (
            <div className="fizzbuzz-container" >
                <div className="input-button-container">
                    <input placeholder={this.props.placeholder} onChange={this.handleChange} onKeyUp={this.handleKeyPress} type="text" name="input" value={this.state.input}/>
                    <button id="submit-button" onClick={() => this.fizzBuzz(this.state.input)}>Submit</button>
                </div>
                <div className="results-container" style={{margin: '20px'}}>
                    <span>Result: </span>     
                    <strong>{this.state.result || "Enter an integer > zero!"} </strong>
                </div>
            </div>
        );
    }
}

export default Fizzbuzz;
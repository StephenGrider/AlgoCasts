import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            check: ''
        }
    }
    

    palindrome(str) {
        let reversed = str.split('').reverse('').join('');
        if ( reversed === str) {
            this.setState({check: `${str} is a palindrome`, input: ''});
        } else {
            this.setState({check: `${str} is NOT a palindrome`, input: ''});
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
                <div className="string-container" >
                <div className="input-button-container">
                    <input placeholder={this.props.placeholder} onChange={this.handleChange} onKeyUp={this.handleKeyPress} type="text" name="input" value={this.state.input}/>
                    <button id="submit-button" onClick={() => this.palindrome(this.state.input)}>Submit</button>
                </div>
                <div className="results-container">
                    <span>Result: </span>     
                    <strong>{this.state.check || "Enter a phrase above!"} </strong>
                </div>
            </div>
        );
    }
}

export default Palindrome;
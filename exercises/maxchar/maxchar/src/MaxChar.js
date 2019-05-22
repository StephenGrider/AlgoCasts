import React, { Component } from 'react';

class MaxChar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            number: '',
            result: ''
        }
    }
        maxChar(str) {
            let obj = {};
            //creating map
            for(let i = 0; i < str.length; i++){
                if(obj[str[i]]) {
                    obj[str[i]] = obj[str[i]] + 1;
                } else {
                    obj[str[i]] = 1;
                }
            }
        
            let entries = Object.entries(obj);
            console.log(entries, "entries")
            let max = 0;
            let char = '';
            for(let i = 0; i < entries.length; i++){
                if(entries[i][1] > max && entries[i][0] !== " "){
                    max = entries[i][1] // this will return the first instance in a tie -- greater than or equal to will return the last instance in a tie.
                    char = entries[i][0];
                }
            }
            return this.setState({result: char, number: max, input: ''});
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
            <div className="maxchar-reverse-container" >
                <div className="input-button-container">
                    <input placeholder={this.props.placeholder} onChange={this.handleChange} onKeyUp={this.handleKeyPress} type="text" name="input" value={this.state.input}/>
                    <button id="submit-button" onClick={() => this.maxChar(this.state.input)}>Submit</button>
                </div>
                <div className="results-container" style={{margin: '20px'}}>
                    <span>Result: </span>     
                    <strong>{this.state.result || "Enter a phrase above!"} </strong>,
                    <span> Count: {this.state.number || 0}</span>
                </div>
            </div>
        );
    }
}

export default MaxChar;
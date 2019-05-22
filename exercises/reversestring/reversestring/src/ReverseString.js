import React from 'react';
import './index.css';

class ReverseString extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            reverse: ''
        }
    }

    reverse(str){
        const reverseArray = [];
        const split = str.split("");
        for(let i = split.length - 1; i >= 0; i--){
            reverseArray.push(split[i]);
        }
        
        return this.setState({reverse: reverseArray.join(""), input: ""});
    
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

    render(){
        return (
            <div className="string-reverse-container" >
                <div className="input-button-container">
                    <input placeholder={this.props.placeholder} onChange={this.handleChange} onKeyUp={this.handleKeyPress} type="text" name="input" value={this.state.input}/>
                    <button id="submit-button" onClick={() => this.reverse(this.state.input)}>Submit</button>
                </div>
                <div className="results-container">
                    <span>Result: </span>     
                    <strong>{this.state.reverse || "Enter a phrase above!"} </strong>
                </div>
            </div>
        )
    }
    
}

export default ReverseString;


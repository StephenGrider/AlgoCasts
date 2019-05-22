import React from 'react';
import './index.css';

class ReverseInt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            reverse: ''
        }
    }

    reverse(n) {
        let num = n + '';
        if(n < 0){
            let split = num.split('').reverse();
            let sign = split.pop();
            split.unshift(sign);
            let join = Number(split.join(''));

            return this.setState({reverse: Number(join), input: ""});
        }
        if(!Number(n)) {
            this.setState({reverse: "No letters or special chars allowed!", input: ""})
        }
        else {
            let join = Number(num.split('').reverse().join(''));
        
            return this.setState({reverse : join, input: ""});
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

    render(){
        return (
            <div className="integer-reverse-container" >
                <div className="input-button-container">
                    <input placeholder={this.props.placeholder} onChange={this.handleChange} onKeyUp={this.handleKeyPress} type="text" name="input" value={this.state.input}/>
                    <button id="submit-button" onClick={() => this.reverse(this.state.input)}>Submit</button>
                </div>
                <div className="results-container">
                    <span>Result: </span>     
                    <strong>{this.state.reverse} </strong>
                </div>
            </div>
        )
    }
    
}

export default ReverseInt;


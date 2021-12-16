import React, {Component} from 'react';

export default class FormRadio extends Component {
    render () {
        const {name, cheked, label, onChange} = this.props;
        return (
            <div className = "form-input form-check">
                <input type="radio" checked={cheked} name={name} onChange={onChange} />
                <label> &nbsp; {label} </label>                
            </div>
        )
    }
}
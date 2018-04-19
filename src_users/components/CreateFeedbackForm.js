import React from "react";
import _ from 'lodash';
import DynamicFormElement from "./common/DynamicFormElement.js";

// CreateFeedbackForm component
export default class CreateFeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      title: '',
      properties: {},
      elements: [],
      ctr: 0
    };

    // bind <this> to the event method
    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.labelUpdate = this.labelUpdate.bind(this);
    this.optionsUpdate = this.optionsUpdate.bind(this);
  }
  // render
  render() {
    // console.log(this.state.properties, 'new properties');
    // console.log(this.state.elements);
    const formElements = [];
    this.state.elements.forEach((elem, i) => {
      formElements.push(<DynamicFormElement key={i} id={elem.id} removeElement={this.removeElement} labelUpdate={this.labelUpdate} optionsUpdate={this.optionsUpdate} type={elem.type} />);
    });
    return (
      <div className="page-home">
        Create Form
        <div className="create-form-container">
          <div className="create-form-play-area">
            Title:  <input onBlur={(evt) => { this.setState({ title: evt.target.value});}} />
            { formElements }
          </div>
          <div className="create-form-toolbox">
            Tool Box
            <ul>
              <li><span>Radio Button <button onClick={() => this.addElement('radio')}>Add</button></span></li>
              <li><span>Text <button onClick={() => this.addElement('input')}>Add</button></span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  addElement(type) {
    const elemId = type + this.state.ctr;
    const newObj = {
      type: type,
      id: elemId
    }

    let newPropObj = Object.assign(this.state.properties);
    newPropObj[elemId] = {
      type: type,
      label: '',
      options: []
    }

    const updatedElementsList = this.state.elements;
    updatedElementsList.push(newObj);
    this.setState({
      elements: updatedElementsList,
      ctr: (this.state.ctr + 1),
      properties: newPropObj
    });
  }

  removeElement(id) {
    const updatedElementsList = this.state.elements;
    const newPropsObj = Object.assign(this.state.properties);
    delete newPropsObj[id];
    this.setState({
      elements: _.remove(updatedElementsList, (elem) => { return elem.id !== id; }),
      properties: newPropsObj
    });
  }

  labelUpdate(id, newLabel) {
    console.log(id, newLabel, 'updating label');
    let newPropObj = Object.assign(this.state.properties);
    newPropObj[id]['label'] = newLabel;
    this.setState({
      properties: newPropObj
    });
  }

  optionsUpdate(id, updatedOptions) {
    console.log(id, updatedOptions, 'updating options');
    let newPropObj = Object.assign(this.state.properties);
    newPropObj[id]['options'] = updatedOptions;
    this.setState({
      properties: newPropObj
    });
  }

}


// form_json: {
//   "title": "",
//   "properties": {
//     "firstName": {
//       "type": "input",
//       "title": "First name"
//     },
//     "gender": {
//       "type": "radio",
//       "title": "Gender",
//       "options": ""
//     }
//   }
// }

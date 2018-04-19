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
  }
  // render
  render() {
    console.log(this.state.elements);
    const formElements = [];
    this.state.elements.forEach((elem, i) => {
      formElements.push(<DynamicFormElement key={i} id={elem.id} removeElement={this.removeElement} type={elem.type} />);
    });
    return (
      <div className="page-home">
        Create Form Deoude Buddy
        <div className="create-form-container">
          <div className="create-form-play-area">
            Play Area
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
    console.log('Adding element!', type);
    // change the local ui state
    // const obj = {
    //   type: type,
    //   label: '',
    // }
    const newObj = {
      type: type,
      id: type + this.state.ctr
    }
    const updatedElementsList = this.state.elements;
    updatedElementsList.push(newObj);
    this.setState({
      elements: updatedElementsList,
      ctr: (this.state.ctr + 1)
    });
  }

  removeElement(id) {
    console.log('removing element!', id);
    const updatedElementsList = this.state.elements;
    // updatedElementsList.push(newObj);
    this.setState({
      elements: _.remove(updatedElementsList, (elem) => { return elem.id !== id; }),
      ctr: (this.state.ctr + 1)
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

import React from "react";

// DynamicFormElement component
export default class DynamicFormElement extends React.Component {
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      label: '',
      options: []
    };

    // bind <this> to the event method
    // this.removeElement = this.props.removeElement.bind(this);
  }

  componentWillMount() {
    const { label, labelUpdate, options, optionsUpdate, id } = this.props;
    if (label) {
        labelUpdate(id, label);
    }

    if (options) {
        optionsUpdate(id, options);
    }
  }


// render
  render() {
    const { type, radio, id, removeElement, labelUpdate, optionsUpdate, label, options } = this.props;

    return (
      <div className="dynamic-element-container">
        <label>Question Text:</label> <input className="form-control question-label-input" defaultValue={label || ''} onBlur={(evt)=> labelUpdate(id, evt.target.value)}/> <span className="remove-button" onClick={() => removeElement(id)}>Remove</span>
        { !radio ? '' : <div> <label>Options:</label> <input className="form-control question-label-input" defaultValue={options || ''} onBlur={(evt)=> optionsUpdate(id, evt.target.value)} /> (separate by commas) </div>}
      </div>
    );
  }

}

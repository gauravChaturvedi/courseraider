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


// render
  render() {
    const { type, radio, id, removeElement, labelUpdate, optionsUpdate } = this.props;
    return (
      <div className="dynamic-element-container">
        <button onClick={() => removeElement(id)}>-</button>
        Label: <input onBlur={(evt)=> labelUpdate(id, evt.target.value)}/>
        { !radio ? '' : <div> Options <input onBlur={(evt)=> optionsUpdate(id, evt.target.value)} /> (separate by commas)</div>}
      </div>
    );
  }

}

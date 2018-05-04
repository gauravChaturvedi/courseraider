import React from "react";
import axios from 'axios';
import FormComponent from "./FormComponent";
import Collapsible from 'react-collapsible';

// ViewForms Parent Component
export default class ViewForms extends React.Component {

  activateForm(class_id, active) {
    if (active) {
      axios.get('http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/questions/deactivate/' + class_id)
        .then(res => {
          localStorage.removeItem('bitlyLink');
          this.props.route.history.push('/');
        });
    } else {
      axios.get('http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/questions/activate/' + class_id)
        .then(res => {
          localStorage.setItem('bitlyLink', res.data.bitly_link);
          this.props.route.history.push('/form-link');
        });
    }
  }

  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      forms: []
    };

    // bind <this> to the event method
    this.activateForm = this.activateForm.bind(this);
  }

  componentWillMount() {
    axios.get('http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/questions/all')
      .then(res => {
        this.setState({ forms: res.data.questions});
      });
  }


// render
  render() {
    const { forms } = this.state;
    const { type, id, removeElement, labelUpdate, optionsUpdate } = this.props;
    let allForms = [];
    if (forms.length > 0) {
      forms.map((form, i) => {
        const cardTitle = 'Class ' + form.class_id;
        const headerElement = <h4>{cardTitle}</h4>;
        allForms.push(
          <Collapsible key={i} trigger={headerElement}>
            <FormComponent key={i} class_id={form.class_id} active={form.active} activateForm={this.activateForm} schema={form.form_schema} UiSchema={form.ui_schema} />
          </Collapsible>
        );
      });
    }
    return (
      <div className="dynamic-element-container">
        { allForms }
      </div>
    );
  }

}

// <FormComponent schema={ forms.length > 0 ? forms[0].form_schema : null} UiSchema={forms.length > 0 ? forms[0].ui_schema : null} />

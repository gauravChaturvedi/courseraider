import React from "react";
import Form from "react-jsonschema-form";

// ViewForms Parent Component
export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {};

    // bind <this> to the event method
    // this.removeElement = this.props.removeElement.bind(this);
  }


// render
  render() {
    const uiSchema = {
      "TV killed the radio star": {
        "malaysian_state": {
          "ui:widget": "radio"
        }
      }
    };
    var schema3 = {
        "title":"my form",
        "properties":
            {
                "name": { "type":"string","title":"Model", "default": "Ziummmm"},
                "description": { "type":"string", "title": "Description", "widget": "textarea" },
                "TV killed the radio star": {
                  "title": "Your favourite state",
                  "type": "object",
                  "required": [
                    "malaysian_state",
                  ],
                  "properties": {
                    "malaysian_state": {
                      "type": "string",
                      "title": "Malaysian states",
                      "enum": [
                        "Kuala Lumpur",
                        "Johor",
                        "Kedah",
                        "Kelantan",
                        "Melaka",
                        "Negeri Sembilan",
                        "Pahang",
                        "Perak",
                        "Perlis",
                        "Pulau Pinang",
                        "Sabah",
                        "Sarawak",
                        "Selangor",
                        "Terengganu",
                        "Wilayah Persekutuan"
                      ]
                    }}}
            },
            "required":["name"]
          };

          const schema = {
            "type": "object",
            "properties": {
              "TV killed the radio star": {
                "title": "Your favourite state",
                "type": "object",
                "required": [
                  "malaysian_state",
                ],
                "properties": {
                  "malaysian_state": {
                    "type": "string",
                    "title": "Malaysian states",
                    "enum": [
                      "Kuala Lumpur",
                      "Johor",
                      "Kedah"
                    ]
                  }
                }
              },
              "title": {type: "string", title: "Title", default: "A new task"}
            }
          };


// <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
    return (
      <div className="">
        <Form schema={schema}
          uiSchema={uiSchema}
          onChange={console.log("changed")}
          onSubmit={console.log("submitted")}
          onError={console.log("errors")} />
      </div>
    );
  }

}

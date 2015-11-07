import React from "react";

class PersonView extends React.Component {
    render() {
        return (
          <div className="greeting">
            Hello Mr Jose: {this.props.name}!
          </div>
        );
    }
}

export default PersonView;

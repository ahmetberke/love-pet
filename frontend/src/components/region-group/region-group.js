import React from "react";
import RegionCountry from "./region-country";

class RegionGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <RegionCountry onChange={this.props.onChange}/>;
    }
}

export default RegionGroup;

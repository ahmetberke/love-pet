import React from "react";
import Form from "react-bootstrap/Form";
import regionService from "../../services/region-service";
import RegionCity from "./region-city";

class RegionCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {countries: [], selectedCountryId: 'none'};
    }

    onCountryChange = (event) => {
        let selectedCountryId = event.target.value;
        this.setState(prevState => {
            return {...prevState, selectedCountryId: selectedCountryId};
        });

        this.props.onChange({countryId: selectedCountryId});
    }

    componentDidMount() {
        regionService.getCountries()
            .then((countries) => {
                this.setState(prevState => ({...prevState, countries: countries}));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <Form.Group className="mb-3">
                    <Form.Select aria-label="countrySelect" onChange={this.onCountryChange}>
                        <option value='none'>Select Country</option>
                        {
                            this.state.countries.map(country =>
                                <option value={country.id} key={country.id}>{country.name}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>

                <RegionCity countryId={this.state.selectedCountryId}
                            onChange={this.props.onChange}/>

            </>
        );
    }
}

export default RegionCountry;

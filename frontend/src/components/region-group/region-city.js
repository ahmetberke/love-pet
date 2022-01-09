import React from "react";
import Form from "react-bootstrap/Form";
import regionService from "../../services/region-service";
import RegionProvince from "./region-province";

class RegionCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cities: [], selectedCityId: 'none'};
    }

    onCityChange = (event) => {
        let selectedCityId = event.target.value;
        this.setState(prevState => {
            return {...prevState, selectedCityId: selectedCityId};
        });

        this.props.onChange({cityId: selectedCityId});
    }

    componentDidMount() {
        if(this.props.countryId !== 'none'){
            regionService.getCitiesForCountry(this.props.countryId)
                .then(cities => {
                    this.setState(prevState => ({...prevState, cities: cities}));
                });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.countryId !== this.props.countryId){
            if(this.props.countryId !== 'none'){
                regionService.getCitiesForCountry(this.props.countryId)
                    .then(cities => {
                        this.setState(prevState => ({...prevState, cities: cities}));
                    });
            }
            else{
                this.setState(prevState => ({cities: [], selectedCityId: 'none'}));
            }
        }
    }

    render() {
        return (
            <>
                <Form.Group className="mb-3">
                    <Form.Select aria-label="citySelect" onChange={this.onCityChange} disabled={this.props.countryId === 'none'}>
                        <option value='none'>Select City</option>
                        {
                            this.state.cities.map((city) =>
                                <option value={city.id} key={city.id}>{city.name}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>

                <RegionProvince cityId={this.state.selectedCityId}
                                onChange={this.props.onChange}/>

            </>
        );
    }
}

export default RegionCity;

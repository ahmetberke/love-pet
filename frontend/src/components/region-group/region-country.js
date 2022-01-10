import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import RegionCity from "./region-city";

function RegionCountry(props) {
    const [selectedCountryId, setSelectedCountryId] = useState(-1);

    const onCountryChange = (event) => {
        let selectedCountryId = Number(event.target.value);
        setSelectedCountryId(selectedCountryId);

        props.onChange({countryId: selectedCountryId});
    }

    const selectedCountry = props.countries.filter(country => country.id === selectedCountryId);
    const selectedCities = (selectedCountryId === -1 || selectedCountry.length === 0) ? [] : selectedCountry[0].Cities;

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Select aria-label="countrySelect"
                             onChange={onCountryChange}>
                    <option value={-1} key={-1}>Select Country</option>
                    {
                        props.countries.map(country =>
                            <option value={country.id} key={country.id}>{country.name}</option>
                        )
                    }
                </Form.Select>
            </Form.Group>

            <RegionCity cities={selectedCities}
                        onChange={props.onChange}/>

        </>
    );
}

export default RegionCountry;

import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import RegionProvince from "./region-province";

function RegionCity(props) {
    const [selectedCityId, setSelectedCityId] = useState(-1);

    const onCityChange = (event) => {
        let selectedCityId = Number(event.target.value);
        setSelectedCityId(selectedCityId);

        props.onChange({cityId: selectedCityId});
    }


    const selectedCity = props.cities.filter(city => city.id === selectedCityId);
    const selectedProvinces = (selectedCityId === -1 || selectedCity.length === 0) ? [] : selectedCity[0].Provinces;

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Select aria-label="citySelect"
                             onChange={onCityChange}
                             disabled={props.cities.length === 0}>
                    <option value={-1} key={-1}>Select City</option>
                    {
                        props.cities.map(city =>
                            <option value={city.id} key={city.id}>{city.name}</option>
                        )
                    }
                </Form.Select>
            </Form.Group>

            <RegionProvince provinces={selectedProvinces}
                            onChange={props.onChange}/>

        </>
    );
}

export default RegionCity;

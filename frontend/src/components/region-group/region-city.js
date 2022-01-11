import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import RegionProvince from "./region-province";
import {Col} from "react-bootstrap";
import OverlayTriggerWrapper from "../../overlay-trigger/overlay-trigger-wrapper";

function RegionCity(props) {
    const [selectedCityId, setSelectedCityId] = useState(-1);

    const [cityValidationMsg, setCityValidationMsg] = useState('');

    const onCityChange = (event) => {
        let selectedCityId = Number(event.target.value);
        setSelectedCityId(selectedCityId);
        setCityValidationMsg((selectedCityId === -1) ? 'You should select city' : '');

        props.onChange({cityId: selectedCityId, provinceId: -1});
    }

    const selectedCity = props.cities.filter(city => city.id === selectedCityId);
    const selectedProvinces = (selectedCityId === -1 || selectedCity.length === 0) ? [] : selectedCity[0].Provinces;

    return (
        <>
            <Col>
                <Form.Group className="mb-3">
                    <OverlayTriggerWrapper
                        msg={cityValidationMsg}
                    >
                        <Form.Select aria-label="citySelect"
                                     onChange={onCityChange}
                                     disabled={props.cities.length === 0}
                                     isInvalid={cityValidationMsg !== ''}>
                            <option value={-1} key={-1}>City</option>
                            {
                                props.cities.map(city =>
                                    <option value={city.id} key={city.id}>{city.name}</option>
                                )
                            }
                        </Form.Select>
                    </OverlayTriggerWrapper>
                </Form.Group>
            </Col>

            <RegionProvince provinces={selectedProvinces}
                            onChange={props.onChange}/>

        </>
    );
}

export default RegionCity;

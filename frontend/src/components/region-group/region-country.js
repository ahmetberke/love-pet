import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import RegionCity from './region-city';
import {Col} from 'react-bootstrap';
import OverlayTriggerWrapper
  from '../../overlay-trigger/overlay-trigger-wrapper';

function RegionCountry(props) {
  const [selectedCountryId, setSelectedCountryId] = useState(-1);

  const [countryValidationMsg, setCountryValidationMsg] = useState('');

  const onCountryChange = (event) => {
    const selectedCountryId = Number(event.target.value);
    setSelectedCountryId(selectedCountryId);
    setCountryValidationMsg(
        (selectedCountryId === -1) ? 'You should select country' : '');

    props.onChange({countryId: selectedCountryId, cityId: -1, provinceId: -1});
  };

  const selectedCountry = props.countries.filter(
      (country) => country.id === selectedCountryId);
  const selectedCities = (selectedCountryId === -1 || selectedCountry.length ===
      0) ? [] : selectedCountry[0].Cities;

  return (
    <>
      <Col>
        <Form.Group className="mb-3">
          <OverlayTriggerWrapper msg={countryValidationMsg}>
            <Form.Select aria-label="countrySelect"
              onChange={onCountryChange}
              isInvalid={countryValidationMsg !== ''}>
              <option value={-1} key={-1}>Country</option>
              {
                props.countries.map((country) =>
                  <option value={country.id} key={country.id}>
                    {country.name}
                  </option>,
                )
              }
            </Form.Select>
          </OverlayTriggerWrapper>
        </Form.Group>
      </Col>

      <RegionCity cities={selectedCities}
        onChange={props.onChange}/>
    </>
  );
}

export default RegionCountry;

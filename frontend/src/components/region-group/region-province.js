import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Col} from 'react-bootstrap';
import OverlayTriggerWrapper
  from '../../overlay-trigger/overlay-trigger-wrapper';

function RegionProvince(props) {
  const [provinceValidationMsg, setProvinceValidationMsg] = useState('');

  const onProvinceChange = (event) => {
    const selectedProvinceId = Number(event.target.value);
    setProvinceValidationMsg(
        (selectedProvinceId === -1) ? 'You should select province' : '');
    console.log(provinceValidationMsg);
    props.onChange({provinceId: selectedProvinceId});
  };

  return (
    <Col>
      <Form.Group className="mb-3">
        <OverlayTriggerWrapper msg={provinceValidationMsg}>
          <Form.Select aria-label="provinceSelect"
            onChange={onProvinceChange}
            disabled={props.provinces.length === 0}
            isInvalid={provinceValidationMsg !== ''}>
            <option value={-1} key={-1}>Province</option>
            {
              props.provinces.map((province) =>
                <option value={province.id} key={province.id}>
                  {province.name}
                </option>,
              )
            }
          </Form.Select>
        </OverlayTriggerWrapper>
      </Form.Group>
    </Col>
  );
}

export default RegionProvince;

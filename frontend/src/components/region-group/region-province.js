import React, {useState} from "react";
import Form from "react-bootstrap/Form";

function RegionProvince(props) {
    const [selectedProvinceId, setSelectedProvinceId] = useState(-1);

    const onProvinceChange = (event) => {
        let selectedProvinceId = Number(event.target.value);
        setSelectedProvinceId(selectedProvinceId);

        props.onChange({provinceId: selectedProvinceId});
    }

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Select aria-label="provinceSelect"
                             onChange={onProvinceChange}
                             disabled={props.provinces.length === 0}>
                    <option value={-1} key={-1}>Select Province</option>
                    {
                        props.provinces.map(province =>
                            <option value={province.id} key={province.id}>{province.name}</option>
                        )
                    }
                </Form.Select>
            </Form.Group>
        </>
    );
}

export default RegionProvince;

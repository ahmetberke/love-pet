import React from "react";
import Form from "react-bootstrap/Form";
import regionService from "../../services/region-service";

class RegionProvince extends React.Component {
    constructor(props) {
        super(props);
        this.state = {provinces: [], selectedProvinceId: 'none'};
    }

    onProvinceChange = (event) => {
        let selectedProvinceId = event.target.value;
        this.setState(prevState => {
            return {...prevState, selectedProvinceId: selectedProvinceId};
        });

        this.props.onChange({provinceId: selectedProvinceId});
    }

    componentDidMount() {
        if(this.props.cityId !== 'none'){
            regionService.getProvincesForCity(this.props.cityId)
                .then(provinces => {
                    this.setState(prevState => ({...prevState, provinces: provinces}));
                });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cityId !== this.props.cityId){
            if(this.props.cityId !== 'none'){
                regionService.getProvincesForCity(this.props.cityId)
                    .then(provinces => {
                        this.setState(prevState => ({...prevState, provinces: provinces}));
                    });
            }
            else{
                this.setState(prevState => ({provinces: [], selectedProvinceId: 'none'}));
            }
        }
    }

    render() {
        return (
            <>
                <Form.Group className="mb-3">
                    <Form.Select aria-label="provinceSelect"
                                 onChange={this.onProvinceChange}
                                 disabled={this.props.cityId === 'none'}>
                        <option value='none'>Select Province</option>
                        {
                            this.state.provinces.map((province) =>
                                <option value={province.id} key={province.id}>{province.name}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>
            </>
        );
    }
}

export default RegionProvince;

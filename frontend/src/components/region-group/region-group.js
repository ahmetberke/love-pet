import React, {useEffect, useState} from 'react';
import RegionCountry from './region-country';
import regionService from '../../services/region-service';
import {Row} from 'react-bootstrap';

function RegionGroup(props) {
  const [countries, setCountries] = useState([]);

  const [fetchedRegions, setFetchedRegions] = useState(false);
  useEffect(() => {
    if (!fetchedRegions) {
      regionService.getRegions().then((countries) => {
        setCountries(countries);
        setFetchedRegions(true);
      }).catch((error) => {
        console.log(error);
      });
    }
  });

  return (
    <Row>
      <RegionCountry countries={countries} onChange={props.onChange}/>
    </Row>
  );
}

export default RegionGroup;

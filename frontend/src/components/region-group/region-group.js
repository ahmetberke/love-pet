import React, {useEffect, useState} from "react";
import RegionCountry from "./region-country";
import regionService from "../../services/region-service";

function RegionGroup(props) {
    const [countries, setCountries] = useState([]);

    const [fetchedRegions, setFetchedRegions] = useState(false);
    useEffect(() => {
        if(!fetchedRegions){
            regionService.getRegions()
                .then((countries) => {
                    setCountries(countries);
                    setFetchedRegions(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    });

    return (
        <RegionCountry countries={countries} onChange={props.onChange}/>
    );
}

export default RegionGroup;

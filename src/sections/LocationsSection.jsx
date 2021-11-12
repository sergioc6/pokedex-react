import React, { useState, useEffect } from "react";
import { getLocations } from "../services/locationService";
import { v4 as uuidv4 } from 'uuid';

const LocationsSection = () => {
    
    const [locations, setLocations] = useState([])

    useEffect(() => {
        async function fetchLocations() {
            const response = await getLocations();
            setLocations(response.data.results)
        }
        fetchLocations()
    }, [])

    return (
        <>
        {
        locations.map(location => 
            <div key={uuidv4()}>
                {location.name}
            </div>
        )}
        </>
    )
}

export default LocationsSection
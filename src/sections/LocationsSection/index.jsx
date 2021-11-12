import React, { useState, useEffect } from "react";
import './LocationsSection.css';
import { getLocations } from "../../services/locationService";
import { v4 as uuidv4 } from 'uuid';
import LocationDetail from "../../components/LocationDetail";

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
        <div className="grid-locations">
            {
            locations.map(location => 
                <LocationDetail key={uuidv4()} />
            )}
        </div>
    )
}

export default LocationsSection
import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=$AIzaSyD08qDs5EatZ_D-e-Hfulpp48J_WgogBg8`;

    useEffect(() => {
        async function handler() {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        }
        handler();
    }, []);
    return map;
};

export default useGoogleAddress;
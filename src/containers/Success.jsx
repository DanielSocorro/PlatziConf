import React from "react";
import '../styles/components/Success.css';
const Success = () => {
    return (
        <div className="Success">
            <div className="Succcess-content">
                <h2>Mary, Gracias por tu compra </h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Succes-map">
                    Google Maps
                </div>
            </div>
        </div>
    );
}

export default Success;
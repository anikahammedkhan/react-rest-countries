import React from 'react';

const Country = (props) => {
    const { name, flags, area, population, region } = props.country;
    return (
        <div className="card shadow">
            <div className="card-body">
                <img src={flags.png} alt="" />
                <h3>{name.common}</h3>
                <h5>Region : {region}</h5>
                <h6>Population : {population}</h6>
                <p>Area : {area} sqKm</p>
            </div>
        </div>
    );
};

export default Country;
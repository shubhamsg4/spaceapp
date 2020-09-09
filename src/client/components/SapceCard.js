import React,{Fragment} from 'react';
import PropTypes from "prop-types";

const SpaceCard=({data}) => {
    return (
      <Fragment>
        <div className="space-card">
          <div className="container">
            <img
              className="img"
              src={data.links.mission_patch_small}
              alt="spacex_image"
            ></img>
          </div>
          <h5 className="blue-color">
            {data.mission_name} #{data.flight_number}
          </h5>
          <h4>Mission Ids:</h4>
          <ul>
            {data.mission_id.map((m_id) => (
              <li className="list">{m_id}</li>
            ))}
          </ul>
          <span className="span-margin">
            <h4>Launch Year:</h4>
            <h5 className="card-value light-blue-color">{data.launch_year}</h5>
          </span>
          <span className="span-margin">
            <h4>Successful Launch:</h4>
            <h5 className="card-value light-blue-color">
              {String(data.launch_success)}
            </h5>
          </span>
          <span className="span-margin">
            <h4>Successful Landing:</h4>
            <h5 className="card-value light-blue-color">
              {String(data.rocket.first_stage.cores[0].land_success)}
            </h5>
          </span>
        </div>
      </Fragment>
    );
}

SpaceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SpaceCard;

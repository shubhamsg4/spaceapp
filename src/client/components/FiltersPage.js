import React, { useState,useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { spaceValues } from "../actions/spacedata";
import SapceCard from "./SapceCard";
 import "../App.css";


const FiltersPage = ({ spaceValues, spacedata: { spaceData, loading } }) => {
  useEffect(() => {
    spaceValues();
  }, [spaceValues]);
  const [formData, setFormData] = useState({
    launch_year: "",
    land_success: "",
    launch_success: "",
  });

  const yearInput = (e) =>{
    setFormData({ ...formData, launch_year: e.target.value });
    console.log(formData);
  }

   const launchSuccess = (e) => {
     setFormData({ ...formData, launch_success: e.target.value });
     console.log(formData);
   };
    const landSuccess = (e) => {
      setFormData({ ...formData, land_success: e.target.value });
      console.log(formData);
    };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    spaceValues(formData);
  };
  return (
    <Fragment>
      <div className="screen-size">
        <div className="grid-container-2-80">
          <div className="filter">
            <h3>Filters</h3>
            <h5 className="alignment">Launch Year</h5>
            <hr align="center" className="line"></hr>
            <div className="grid-container-2">
              <button
                className="year-button"
                value="2006"
                onClick={(e) => yearInput(e, "value")}
              >
                2006
              </button>
              <button
                className="year-button span-data-right"
                value="2007"
                onClick={(e) => yearInput(e, "value")}
              >
                2007
              </button>
              <button
                className="year-button"
                value="2008"
                onClick={(e) => yearInput(e, "value")}
              >
                2008
              </button>
              <button
                className="year-button span-data-right"
                value="2009"
                onClick={(e) => yearInput(e, "value")}
              >
                2009
              </button>
              <button
                className="year-button "
                value="2010"
                onClick={(e) => yearInput(e, "value")}
              >
                2010
              </button>
              <button
                className="year-button"
                value="2011"
                onClick={(e) => yearInput(e, "value")}
              >
                2011
              </button>
              <button
                className="year-button"
                value="2012"
                onClick={(e) => yearInput(e, "value")}
              >
                2012
              </button>
              <button
                className="year-button"
                value="2013"
                onClick={(e) => yearInput(e, "value")}
              >
                2013
              </button>
              <button
                className="year-button"
                value="2014"
                onClick={(e) => yearInput(e, "value")}
              >
                2014
              </button>
              <button
                className="year-button"
                value="2015"
                onClick={(e) => yearInput(e, "value")}
              >
                2015
              </button>
              <button
                className="year-button"
                value="2016"
                onClick={(e) => yearInput(e, "value")}
              >
                2016
              </button>
              <button
                className="year-button"
                value="2017"
                onClick={(e) => yearInput(e, "value")}
              >
                2017
              </button>
              <button
                className="year-button"
                value="2018"
                onClick={(e) => yearInput(e, "value")}
              >
                2018
              </button>
              <button
                className="year-button"
                value="2019"
                onClick={(e) => yearInput(e, "value")}
              >
                2019
              </button>
              <button
                className="year-button"
                value="2020"
                onClick={(e) => yearInput(e, "value")}
              >
                2020
              </button>
            </div>
            <h5 className="alignment">Successful Launch</h5>
            <hr align="center" className="line"></hr>
            <button
              className="year-button"
              value="true"
              onClick={(e) => launchSuccess(e, "value")}
            >
              True
            </button>
            <button
              className="year-button span-data-right"
              value="false"
              onClick={(e) => launchSuccess(e, "value")}
            >
              False
            </button>
            <h5 className="alignment">Successful Landing</h5>
            <hr align="center" className="line"></hr>
            <div className="margin-bottom">
              <button
                className="year-button span-data-left"
                value="true"
                onClick={(e) => landSuccess(e, "value")}
              >
                True
              </button>
              <button
                className="year-button span-data-right"
                value="false"
                onClick={(e) => landSuccess(e, "value")}
              >
                False
              </button>
            </div>
            <div className="submit-button">
              <button className="button-color" onClick={(e) => onSubmit(e)}>
                Apply Filters
              </button>
            </div>
          </div>
          <div className="horizontal-flex">
            {spaceData.length > 0 ? (
              <Fragment>
                {loading === false &&
                  spaceData.map((data) => (
                    <SapceCard key={data.flight_number} data={data} />
                  ))}
              </Fragment>
            ) : (
              <h4>No space Card availble for this details.</h4>
            )}
          </div>
        </div>
        <h3 className="developer-name">Developed By:Shubham Goel</h3>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  spacedata: state.spacedata,
});

FiltersPage.propTypes = {
  spaceValues: PropTypes.func.isRequired,
  spaceData: PropTypes.object.isRequired,
};

function loadData(store) {
  return store.dispatch(spaceValues());
}

export default {
  loadData,
  component: connect(mapStateToProps, { spaceValues })(FiltersPage),
};


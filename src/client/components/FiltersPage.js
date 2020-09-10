import React, { useState,useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { spaceValues } from "../actions/spacedata";
import SapceCard from "./SapceCard";
 import "../App.css";


const FiltersPage = ({ spaceValues, spacedata: { spaceData, loading } }) => {
 const [formData, setFormData] = useState({
   launch_year: "",
   land_success: "",
   launch_success: "",
 });
 
  useEffect(() => {
    spaceValues();
  }, []);

  const yearInput = (e) => {
    e.preventDefault();
      let newFormData = { ...formData, launch_year: e.target.value };
    setFormData(newFormData);
    spaceValues(newFormData);
  }

   const launchSuccess = (e) => {
      e.preventDefault();
     let newFormData={ ...formData, launch_success: e.target.value };
     setFormData(newFormData);
     spaceValues(newFormData);
   };
    const landSuccess = (e) => {
       e.preventDefault();
      let newFormData={ ...formData, land_success: e.target.value };
      setFormData(newFormData);
      spaceValues(newFormData);
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
                onClick={yearInput}
              >
                2006
              </button>
              <button
                className="year-button span-data-right"
                value="2007"
                onClick={yearInput}
              >
                2007
              </button>
              <button
                className="year-button"
                value="2008"
                onClick={yearInput}
              >
                2008
              </button>
              <button
                className="year-button span-data-right"
                value="2009"
                onClick={yearInput}
              >
                2009
              </button>
              <button
                className="year-button "
                value="2010"
                onClick={yearInput}
              >
                2010
              </button>
              <button
                className="year-button"
                value="2011"
                onClick={yearInput}
              >
                2011
              </button>
              <button
                className="year-button"
                value="2012"
                onClick={yearInput}
              >
                2012
              </button>
              <button
                className="year-button"
                value="2013"
                onClick={yearInput}
              >
                2013
              </button>
              <button
                className="year-button"
                value="2014"
                onClick={yearInput}
              >
                2014
              </button>
              <button
                className="year-button"
                value="2015"
                onClick={yearInput}
              >
                2015
              </button>
              <button
                className="year-button"
                value="2016"
                onClick={yearInput}
              >
                2016
              </button>
              <button
                className="year-button"
                value="2017"
                onClick={yearInput}
              >
                2017
              </button>
              <button
                className="year-button"
                value="2018"
                onClick={yearInput}
              >
                2018
              </button>
              <button
                className="year-button"
                value="2019"
                onClick={yearInput}
              >
                2019
              </button>
              <button
                className="year-button"
                value="2020"
                onClick={yearInput}
              >
                2020
              </button>
            </div>
            <h5 className="alignment">Successful Launch</h5>
            <hr align="center" className="line"></hr>
            <button
              className="year-button"
              value="true"
              onClick={launchSuccess}
            >
              True
            </button>
            <button
              className="year-button span-data-right"
              value="false"
              onClick={launchSuccess}
            >
              False
            </button>
            <h5 className="alignment">Successful Landing</h5>
            <hr align="center" className="line"></hr>
            <div className="margin-bottom">
              <button
                className="year-button span-data-left"
                value="true"
                onClick={landSuccess}
              >
                True
              </button>
              <button
                className="year-button span-data-right"
                value="false"
                onClick={landSuccess}
              >
                False
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


import React from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <LayoutMaster>
      <div className="container py-5 h-100">
        <div className="bg-light p-30 mb-5">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input className="form-control" type="text" placeholder="John" />
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input className="form-control" type="text" placeholder="Doe" />
            </div>
            <div className="col-md-6 form-group">
              <label>E-mail</label>
              <input
                className="form-control"
                type="text"
                placeholder="example@email.com"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Mobile No</label>
              <input
                className="form-control"
                type="text"
                placeholder="+123 456 789"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 1</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 2</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Country</label>
              <select className="custom-select">
                <option selected="">United States</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>State</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>ZIP Code</label>
              <input className="form-control" type="text" placeholder={123} />
            </div>
            <div className="col-md-4 offset-md-4">
              <button className="btn btn-dark btn-lg btn-block" type="submit">
              Register
              </button>
              <Link className="btn btn-success btn-lg btn-block" to="/login">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutMaster>
  );
}

export default Register;

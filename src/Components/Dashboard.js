import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../Redux/dashboardActions";
import "./script.css";

function Dashboard() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const user = useSelector((state) => {
    return state.user.userobj;
  });
  console.log("dashboard", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  const toggleDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg background_colour"> */}
      {/* <div className="icon "> */}
      {/* <h2 className="beige-text text-center mx-auto">BANKING APP</h2> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {user.loading ? (
              <p>Loading..</p>
            ) : user.error ? (
              <p>Error: {user.error}</p>
            ) : (
              <div>
                <span
                  className="navbar-brand beige-text"
                  onClick={toggleDetailsModal}
                >
                  <img
                    src="user-icon.jpg"
                    alt="User Icon"
                    width="30"
                    height="30"
                    className="mr-2"
                  />
                  &nbsp; {user.name}
                </span>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            )}
          </ul>
        </div>
      </nav>

      {/* </div> */}
      {/* </nav> */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column align-items-center">
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img
                      src="banking.jpg"
                      className="card-img-top w-100 h-100"
                      alt="Banking"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary btn-color btn-lg"
                        style={{ backgroundColor: "#5EBFAC" }}
                      >
                        Banking
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img
                      src="invest-image.png"
                      className="card-img-top w-100 h-100"
                      alt="Investments"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary btn-lg"
                        style={{ backgroundColor: "#5EBFAC" }}
                      >
                        Investments
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img
                      src="loan-image.png"
                      className="card-img-top w-100 h-100"
                      alt="Loans"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary btn-lg"
                        style={{ backgroundColor: "#5EBFAC" }}
                      >
                        Loans
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img
                      src="fintech-image.jpg"
                      className="card-img-top w-100 h-100"
                      alt="Fintech"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary btn-lg"
                        style={{ backgroundColor: "#5EBFAC" }}
                      >
                        Fintech
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img
                      src="exchange-image.png"
                      className="card-img-top w-100 h-100"
                      alt="Exchange"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary btn-lg"
                        style={{ backgroundColor: "#5EBFAC" }}
                      >
                        Exchange
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100">
                    <img
                      src="inc-image.png"
                      className="card-img-top w-100 h-100"
                      alt="Exchange"
                    />
                    <div className="card-body">
                      <button
                        className="btn btn-primary btn-lg"
                        style={{ backgroundColor: "#5EBFAC" }}
                      >
                        Inc
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Modal */}
      <div
        className={`modal fade ${showDetailsModal ? "show" : ""}`}
        id="userDetailsModal"
        tabIndex="-1"
        aria-labelledby="userDetailsModalLabel"
        aria-hidden={!showDetailsModal}
        style={{ display: showDetailsModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userDetailsModalLabel">
                {user.name}'s Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={toggleDetailsModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Add more user details here */}
              <p>Account Number: {user.accountNo}</p>
              <p>Email: {user.email}</p>
              <p>Mobile Number: {user.mobile}</p>
              <p>Date of Birth: {user.dob}</p>
              <p>Address: {user.address}</p>
              <p>Aadhar Number: {user.aadhar}</p>

              {/* Add more user details as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

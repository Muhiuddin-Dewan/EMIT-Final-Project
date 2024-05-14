import React from "react";
import Layout from "../components/Layouts/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/Contactus.jpg"
            alt="contactUS"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 text">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p className="text-justify mt-2" style={{ fontWeight: "bold" }}>
            Information We Collect
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Personal Information: </span>
            Name, email, address, payment details when you make a purchase or
            create an account.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>LogData: </span>IP address,
            browser type, pages visited, and visit duration.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Cookies: </span>Used to enhance
            your browsing experience
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

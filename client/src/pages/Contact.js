import React from "react";
import Layout from "../components/Layouts/Layout";
import { BiMailSend, BiPhone, BiSupport } from "react-icons/bi";

const Contact = () => {
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
          <h1 className="bg-dark p-2 text-white text-center">Contact US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24/7
            available
          </p>
          <p className="mt-2">
            <BiMailSend /> www.help@bookstore.com
          </p>
          <p className="mt-2">
            <BiPhone /> +8801639479190
          </p>
          <p className="mt-2">
            <BiSupport /> 16239
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

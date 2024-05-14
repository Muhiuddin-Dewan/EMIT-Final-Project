import React from "react";
import Layout from "../components/Layouts/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/aboutus.png"
            alt="contactUS"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 mt-5">
          <h1 className="bg-dark p-2 text-white text-center">About US</h1>
          <p className="mt-2" style={{ textAlign: "justify" }}>
            Welcome to Bookstore, your number one source for all things books.
            We're dedicated to giving you the very best of literature, with a
            focus on quality, variety, and customer service. Founded in [2024]
            by Muhiuddin Dewan, Bookstore has come a long way from its
            beginnings. When Muhiuddin Dewan first started out, their passion
            for making quality books accessible to everyone drove them to do
            intense research and gave them the impetus to turn hard work and
            inspiration into a booming online store. We now serve customers all
            over Bangladesh, and are thrilled to be a part of the fair trade
            wing of the book industry. At Bookstore, we believe in the
            transformative power of books. Our mission is to provide a diverse
            range of books to enrich, educate, and entertain. Whether you’re
            looking for the latest bestsellers, timeless classics, or hidden
            gems, we have something for every reader. Our curated collection
            includes genres ranging from fiction and non-fiction to academic
            texts and children's books.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

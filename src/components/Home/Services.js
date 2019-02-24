import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";
import { FaGulp } from "react-icons/fa";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">Hallo from Services</p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
            <FaGulp />
          </div>
        </div>
      </div>
    </section>
  );
}

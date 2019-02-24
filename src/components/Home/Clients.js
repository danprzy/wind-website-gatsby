import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function info() {
  return (
    <section classNameName="py-5">
      <div className="container box-clients">
        <div className="row">
          <div className="col-md-12 section-heading text-center">
            <h2 className="to-animate">Our Clients</h2>
          </div>
        </div>
        <div className="row " id="carousel">
          <ul className="to-animate">
            <li>
              <div className="client_img cez img-responsive" />
            </li>
            <li>
              <div className="client_img greenbear img-responsive" />
            </li>
            <li>
              <div className="client_img renesola img-responsive" />
            </li>
            <li>
              <div className="client_img eesti img-responsive" />
            </li>
            <li>
              <div className="client_img cee img-responsive" />
            </li>
            <li>
              <div className="client_img baltcap img-responsive" />
            </li>
            <li>
              <div className="client_img ge img-responsive" />
            </li>
            <li>
              <div className="client_img mep img-responsive" />
            </li>
            <li>
              <div className="client_img bos img-responsive" />
            </li>
            <li>
              <div className="client_img ebrd img-responsive" />
            </li>
            <li>
              <div className="client_img laing img-responsive" />
            </li>
            <li>
              <div className="client_img alior img-responsive" />
            </li>
            <li>
              <div className="client_img polenergia img-responsive" />
            </li>
            <li>
              <div className="client_img enea img-responsive" />
            </li>
            <li>
              <div className="client_img strabag img-responsive" />
            </li>
            <li>
              <div className="client_img cgn img-responsive" />
            </li>
            <li>
              <div className="client_img tommaszt img-responsive" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import { FaEdit } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

export default function services() {
  return (
    <section id="fh5co-services">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-heading text-left">
            <h2 className=" left-border to-animate">What we do</h2>
            <div className="row">
              <div className="col-md-8 subtext to-animate">
                <h3>
                  Wind Prospect is able to provide world className technical and
                  commercial consultancy services at all stages of a wind
                  project - from development through to the operation.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 fh5co-service to-animate">
            <FaEdit className="icon to-animate-2" />
            <h3>Due diligence</h3>
            <p>
              When investing in a project during the development phase, it is
              important to confirm that the project is being developed to
              industry standards ensuring the project will be suitable for
              financing and pre-construction work. As a project reaches middle
              age and its initial operations and maintenance contract expires,
              the risk of significant maintenance issues can be higher, and
              careful consideration of O&M options for the remainder of the
              project’s lifetime is important to maximise revenue and
              profitability and minimise costly repairs and downtime.
            </p>
          </div>
          <div className="col-md-6 col-sm-6 fh5co-service to-animate">
            <FaChartBar className="icon to-animate-2 icon-bar-chart" />
            <h3>Energy yield assessment</h3>
            <p>
              Wind Prospect is a world leader in energy resource assessment. Our
              energy resource team is made up of highly professional analysts
              from backgrounds in engineering, mathematics, physics and
              geography, giving us first rate knowledge of all the key factors
              relevant to energy yield assessments. Quantifying a project’s
              energy yield accurately is pivotal to securing project investment.
              Our track record within wind energy demonstrates that
              international banks and investors trust us to provide bankable
              analyses. The same diligence has now been transferred into solar
              resource assessments using in-house tools with industry standard
              modelling software and best practice.
            </p>
          </div>
          <div className="clearfix visible-sm-block" />
          <div className="col-md-6 col-sm-6 fh5co-service to-animate">
            <FaEye className="icon to-animate-2" />
            <h3>Construction monitoring</h3>
            <p>
              Construction Monitoring can help to bring your projects to
              successful completion by acting in partnership with you and your
              investors, lenders or Bank by providing a comprehensive services
              package tailored to meet the specific requirements of your
              project.
              <br />
              <br />
              We provide complex services (technical and commercial) which
              consist among the others:
            </p>
            <ul>
              <li>Lenders / Banks Engineer</li>
              <li>Project management</li>
              <li>Site supervision</li>
              <li>Valuations and audits</li>
              <li>Budgetary Control</li>
              <li>Health and Safety</li>
              <li>Technical Inspections</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-6 fh5co-service to-animate">
            <FaDesktop className="icon to-animate-2" />
            <h3>Asset Management</h3>
            <p>
              We offer full spectrum of RES projects operation management in the
              technical and commercial area. Our aim is to maximise the
              investor’s operational performance and protection of assets value.
            </p>
            <p>That include:</p>
            <ul>
              <li>Market strategy support</li>
              <li>
                Support in the area of energy market as well as settlement of
                accounts with the contractors and the property owners
              </li>
              <li>Optimisation of operational costs and operation policy</li>
              <li>Supervision of O&M contracts</li>
              <li>Inspections and testing</li>
              <li>We are the investor’s local representatives</li>
              <li>Providing operation personnel</li>
              <li>And more</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

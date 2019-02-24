import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function info() {
  return (
    <section id="fh5co-testimonials" data-section="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-heading text-center">
            <h2 className="to-animate">Testimonials</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 subtext to-animate" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <div className="box-testimony">
              <blockquote className="to-animate-2">
                <p>
                  &ldquo;Wind Prospect is a robust and reliable technical
                  advisor. It is a solid team of experts working in an
                  exceptionally efficient manner, while bringing and exposing
                  value of the project. As a long-term client of Wind Prospect I
                  fully recommend them as professional partner.&rdquo;
                </p>
              </blockquote>
              <div className="author to-animate">
                <p>
                  JEAN-CLAUDE MOUSTACAKIS <br />
                  <a href="http://www.greenbearcorp.com/" target="_blank">
                    Green Bear Corporation Poland Sp. z o.o.
                  </a>
                  <span className="subtext">CEO</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box-testimony">
              <blockquote className="to-animate-2">
                <p>
                  &ldquo;We would thoroughly recommend Wind Prospect as a
                  quality partner in all aspects of wind project development,
                  construction, operation and consultancy.&rdquo;
                </p>
              </blockquote>
              <div className="author to-animate">
                <p>
                  <a href="https://www.edf-re.com/" target="_blank">
                    EDF Renewables
                  </a>{" "}
                  <span className="subtext">CEO</span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
                  <div className="box-testimony">
                    <blockquote className="to-animate-2">
                      <p>&ldquo;Vivamus eget iaculis ipsum, non ultricies lectus. Vivamus in ligula sit amet mi finibus rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. &rdquo;</p>
                    </blockquote>
                    <div className="author to-animate">
                      <figure><img src="images/person3_.jpg" alt="Person"></figure>
                        <p>
                          Adam Nowak <a href="#" target="_blank">Firma XXX</a> <span className="subtext">Creative Director</span>
                        </p>
                        </div>
                    </div>
                  </div>
  -->*/}
        </div>
      </div>
    </section>
  );
}

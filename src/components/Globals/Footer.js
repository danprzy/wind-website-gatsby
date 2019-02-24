import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer id="footer" role="contentinfo" className="gradient-background">
      <Link to="/" className="gotop js-gotop">
        <i className="icon-arrow-up2" />
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-1  col-xs-offset-2 col-xs-4 text-right">
            <img
              src="images/WP_logo_16.png"
              alt="Image"
              width="70"
              className="img-responsive"
            />
          </div>
          <div className="col-sm-5 col-xs-6 text-left">
            <p>
              <strong>Wind Prospect Sp. z o.o.</strong>
              <br />
              Łukasza Gołębiowskiego 4/1
              <br />
              01-504 Warszawa
              <br />
              KRS 0000679170
              <br />
              REGON 367332835
              <br />
              NIP 5252711973
            </p>
          </div>
          <div className="col-sm-3 col-xxs-12 text-left">
            <p>
              <strong>Quick links</strong>
              <br />
              <Link to="/#fh5co-services">Services</Link>
              <br />
              <Link to="/services/#fh5co-preconstruction">Preconstruction</Link>
              <br />
              <Link to="/services/#fh5co-construction">Construction</Link>
              <br />
              <a href="/services/#fh5co-operation">Operation</a>
              <br />
              <a href="/#fh5co-work">News</a>
              <br />
            </p>
          </div>
        </div>
        <div className="row border">
          <div className="col-md-12 text-center">
            <div>
              &copy; Wind Prospect. All rights reserved & copy;{" "}
              {new Date().getFullYear().toString()} Created by{" "}
              <a href="#" target="_blank">
                XXXX
              </a>
              <span> Privacy Policy </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

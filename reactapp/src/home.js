import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Typist from "react-typist";

function Home() {
  return (
    <div>
      <div className="navbar" role="navigation">
        <Link to="/table2">
          <button type="button">Listings</button>
        </Link>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
        <Link to="/signin">
          <button type="button">Sign In</button>
        </Link>
      </div>

      <section id="section1">
        <div className="main" role="banner">
          <h1 id="header2">
            <Typist>
              Looking for a new place to call home?
              <Typist.Delay ms={500} />
              <br />
              Come join FindHome today.
            </Typist>
          </h1>
        </div>
      </section>

      <Card className="text-center" role="contentinfo">
        <Card.Footer className="color-footer">
          Copyright © 2020 Jennifer Chang. All Rights Reserved. Picture credits
          to Matt Donders.
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Home;

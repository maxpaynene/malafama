/*!
=========================================================
* BLK Design System React - v1.2.0
=========================================================
*/

import React from "react";
import { Container } from "reactstrap";
import logo from "../../assets/img/mlf_records.png"

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      {/*
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      */}
      <div className="page-header-image" data-parallax="true"></div>
      <Container>
        <div className="content-center brand">
          <img src={logo} width="400px" height="280px" alt="img"/>
          {/*
            <h1 className="h1-seo">Malafama</h1>
          */}
        </div>
      </Container>
    </div>
  );
}

import React, { Component } from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          height: "200px",
          padding: "2rem",
          backgroundColor: "#434343",
          color: "white",
        }}
      >
        <Row justify="space-around" align="middle">
          <Col style={{ color: "white" }}>
            <h4 style={{ color: "white" }}>Social Links</h4>
            <YoutubeFilled
              style={{ fontSize: "1.3rem", color: "#ff7875" }}
            />{" "}
            Youtube
            <br />
            <LinkedinFilled
              style={{ fontSize: "1.3rem", color: "#2f54eb" }}
            />{" "}
            LinkedIn <br />
            <TwitterOutlined
              style={{ fontSize: "1.3rem", color: "#40a9ff" }}
            />{" "}
            Twitter <br />
            <InstagramFilled
              style={{ fontSize: "1.3rem", color: "#fa8c16" }}
            />{" "}
            Instagram <br />
            <FacebookFilled
              style={{ fontSize: "1.3rem", color: "#096dd9" }}
            />{" "}
            Facebook <br />
          </Col>
          <Col>
            <h4 style={{ color: "white", marginBottom: "0" }}>Our Products</h4>
            <hr style={{ margin: "0" }} />
            <p style={{ margin: "0" }}>
              <Link to="/">Mobile Apps</Link>
            </p>

            <p style={{ margin: "0" }}>
              <Link to="/website">Website Apps</Link>
            </p>
            <h4 style={{ color: "white", marginBottom: "0" }}>Our Services</h4>
            <hr style={{ margin: "0" }} />
            <p style={{ margin: "0" }}>
              <Link to="/services">Cloud Services</Link>
            </p>
            <p style={{ margin: "0" }}>
              <Link to="/services">Data Analytics</Link>
            </p>
            <p style={{ margin: "0" }}>
              <Link to="/services">SEO</Link>
            </p>
          </Col>
          <Col>
            Egesa Villa, <br />
            NAIROBI,KE
            <br />
            +254 7999 808 46
            <br />
            jorammanoah1@gmail.com <br />
          </Col>
        </Row>
      </footer>
    );
  }
}

export default withRouter(Footer);

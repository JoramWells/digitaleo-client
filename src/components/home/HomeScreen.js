import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Row, Col, Button, Divider } from "antd";
// import browsing from "../../images/browsing.svg";
// import inspection from "../../images/code_inspection.svg";
// import review from "../../images/Code_review.svg";
import seo from "../../images/search_engines.svg";
import cloud from "../../images/cloud_hosting.svg";
import programming from "../../images/programming.svg";

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <header style={{ paddingBottom: "1rem", backgroundColor: "#434343" }}>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Digitaleo, Inc
          </h1>
          <Row
            justify="space-around"
            align="middle"
            style={{ marginTop: "2rem" }}
          >
            <Col>
              <img
                src={programming}
                alt="programming"
                style={{ width: "250px" }}
              />
            </Col>
            <Col span={18}>
              {/* <h2>
                At digitaleo, we are continously improving how uses interact and
                manage your products
              </h2> */}
              <div>
                <p
                  style={{ color: "grey", fontSize: "1rem", marginTop: "1rem" }}
                >
                  Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                  laudantium molestias eos sapiente officiis modi at sunt
                  excepturi expedita sint? Sed quibusdam recusandae alias error
                  harum maxime adipisci amet laborum.
                </p>
              </div>
            </Col>
          </Row>

          <Button
            icon={<ArrowRightOutlined />}
            style={{
              display: "block",
              margin: "auto",
              border: "0",
              borderRadius: "5px",
            }}
          >
            Learn More
          </Button>
        </header>
        <main>
          <div style={{ padding: "1rem" }}>
            <Row justify="space-around" align="middle">
              <Col style={{ width: "85%" }}>
                <Divider>
                  <h2 style={{ color: "rgb(40,44,53)" }}>OUR PRODUCTS</h2>
                </Divider>
                <p style={{ color: "grey" }}>
                  Quaerat provident commodi consectetur veniam similique ad
                  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est
                  explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                  mollitia maiores labore suscipit quas? Nulla, placeat.
                </p>
              </Col>
            </Row>
            <Row justify="space-around" gutter={[16, 16]} align="middle">
              <Col md={12} sm={12}>
                <Card
                  style={{
                    width: "inherit",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                  }}
                >
                  <h3>Mobile App developmet</h3>
                  <p style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit,
                  </p>
                </Card>
              </Col>
              <Col md={12} sm={12}>
                <Card
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                >
                  <h3>Web Applications</h3>
                  <p style={{ color: "grey" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit{" "}
                    <Link to="/website">
                      {" "}
                      learn more
                      <RightOutlined style={{ fontSize: ".6rem" }} />
                    </Link>
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Row justify="space-around" align="middle">
              <Col style={{ width: "50%" }}>
                <Divider>
                  <h2 style={{ color: "rgb(40,44,53)" }}>OUR SERVICES</h2>
                </Divider>
              </Col>
            </Row>
            <Row justify="center">
              <Col style={{ padding: "1rem" }}>
                <img
                  src={cloud}
                  alt="cloud_hosting"
                  style={{ width: "250px" }}
                />
              </Col>
              <Col span={18} style={{padding:"1rem"}}>
                <h3>Cloud Services</h3>
                <p style={{ color: "grey" }}>
                  Sed quibusdam recusandae alias error harum maxime adipisci
                  amet laborum. Perspiciatis minima nesciunt dolorem! Officiis
                  iure rerum voluptates a cumque velit quibusdam sed amet
                  tempora.{" "}
                  <Link to="/services">
                    Know more
                    <RightOutlined style={{ fontSize: ".6rem" }} />
                  </Link>
                </p>
              </Col>
            </Row>
          </div>
          <Row justify="center" align="middle">
            <Col style={{ padding: "1rem" }}>
              <img
                src={seo}
                alt="search_engines.jpg"
                style={{ width: "250px" }}
              />
            </Col>
            <Col span={18}>
              <h3>SEO</h3>
              <p style={{ color: "grey" }}>
                Quaerat provident commodi consectetur veniam similique ad earum
                omnis ipsum saepe, voluptas, hic voluptates pariatur est
                explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                mollitia maiores labore suscipit quas? Nulla, placeat.{" "}
                <Link to="/services">
                  Know more
                  <RightOutlined style={{ fontSize: ".6rem" }} />
                </Link>
              </p>
            </Col>
          </Row>
          <div style={{ height: "350px" }}>
            <Row justify="space-around" align="middle">
              <Col style={{ width: "50%" }}>
                <Divider>
                  <h2 style={{ color: "rgb(40,44,53)" }}>LEARN HOW </h2>
                </Divider>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col span={18}>
                <p>
                  Learn how we are transforming and helping business and
                  organizations in Kenya and around the cloud.
                </p>
              </Col>
            </Row>
          </div>
        </main>
      </>
    );
  }
}

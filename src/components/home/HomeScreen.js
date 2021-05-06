import { Card, Row, Col } from "antd";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <header>
        <Row
          justify="space-around"
          align="middle"
          style={{ marginTop: "2rem" }}
        >
          <h2>
            Exciting times! A whole new array of consumer technology that are
            shapping our world.
          </h2>
        </Row>
      </header>
      <main>
        <div style={{width:"95%"}}>
          <Row justify="space-around" align="middle">
            <h2>Our Insights</h2>
          </Row>
          <h3 style={{ textAlign: "center" }}>Our products</h3>
          <Row justify="space-around" gutter={[5,16]} align="middle">
            <Col md={12} sm={12}>
              <Card >
                <p>
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
              <Card>
                <p>
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
          </Row>
        </div>

        <Row justify="space-around" align="middle">
          <h2>Company</h2>
        </Row>
      </main>
    </>
  );
}

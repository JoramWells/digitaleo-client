import { Card, Row,Col } from "antd";
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
          <div>
          <Row justify="space-around" align="middle">
              <h2>Our Insights</h2>
              
          </Row>
          <h3 style={{textAlign:"center"}}>Our products</h3>
          <Row justify="space-around" align="middle">
              <Col>
              <Card>
                  Mobile Apps
              </Card>
              </Col>
              <Col>
              <Card>
                  Web App
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

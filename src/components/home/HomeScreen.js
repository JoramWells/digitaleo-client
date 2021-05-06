import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Row, Col, Button } from "antd";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <header style={{padding:"1rem"}}>
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
        <p style={{textAlign:"center",color:"grey" }}>
        Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum.
        </p>
        <Button icon={<ArrowRightOutlined/>} style={{display:"block", margin:"auto"}}>Learn More</Button>
      </header>
      <main>
        <div style={{padding:"1rem"}}>
          <Row justify="space-around" align="middle">
            <h2>Our Insights</h2>
          </Row>
          <h3 style={{ textAlign: "center" }}>Our products</h3>
          <Row justify="space-around" gutter={[16,16]} align="middle">
            <Col md={12} sm={12}>
              <Card style={{width:"inherit"}}>
                <h3>Mobile App developmet</h3>
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
                <h3>Web Applications</h3>
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

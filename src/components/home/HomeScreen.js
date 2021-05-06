import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Row, Col, Button, Divider } from "antd";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <header style={{ padding: "1rem", height:"250px" }}>
        <Row
          justify="space-around"
          align="middle"
          style={{ marginTop: "2rem" }}
        >
          <h2>
            Exciting times! A whole new array of consumer technology that are
            shapping our world.
          </h2>
          <div style={{ width: "85%" }}>
            <p style={{ textAlign: "center", color: "grey" }}>
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum.
            </p>
          </div>
        </Row>

        <Button
          icon={<ArrowRightOutlined />}
          style={{ display: "block", margin: "auto" }}
        >
          Learn More
        </Button>
      </header>
      <main>
        <div style={{ padding: "1rem",height:"450px" }}>
          <Row justify="space-around" align="middle">
            <Col style={{ width: "50%" }}>
              <Divider>
                <h2>OUR PRODUCTS</h2>
              </Divider>
            </Col>
          </Row>
          <Row justify="space-around" gutter={[16, 16]} align="middle" >
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
                  officia aut! Impedit sit sunt quaerat, odit,
                </p>
              </Card>
            </Col>
          </Row>
        </div>

        <Row justify="space-around" align="middle">
          <Col style={{ width: "50%" }}>
            <Divider>
              <h2>OUR SERVICES</h2>
            </Divider>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={12}>
            <h3>Cloud Services</h3>
            <Card>
              <p>
                Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora.
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={12}>
            <h3>Data Analytics</h3>
            <p>
              Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus
              enim commodi iusto libero magni deleniti quod quam consequuntur!
              Commodi minima excepturi repudiandae velit hic maxime doloremque.
            </p>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={12}>
            <h3>SEO</h3>
            <p>
              Quaerat provident commodi consectetur veniam similique ad earum
              omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
              fugiat, dolorum eligendi quam cupiditate excepturi mollitia
              maiores labore suscipit quas? Nulla, placeat.
            </p>
          </Col>
        </Row>
        <div style={{height:"350px"}}>
        <Row justify="space-around" align="middle">
          <Col style={{width:"50%"}}>
          <Divider>
            <h2>OUR CLIENTS</h2>
          </Divider>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
            <Col>
            img1
            <br/>
            testimonies
            </Col>
            <Col>
            img2
            <br/>
            testimonies2
            </Col>
            <Col>
            img3
            <br/>
            testimonies3
            </Col>
          </Row>
        </div>

      </main>
      <footer style={{height:"200px"}}>
        This is a footer
      </footer>
    </>
  );
}

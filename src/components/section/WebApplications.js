import React, { Component } from "react";
import { Row, Col, Card } from "antd";

export default class WebApplications extends Component {
  render() {
    return (
      <>
        <Row align="center">
          <h1>Website developmet</h1>
        </Row>
        <Row justify="center" style={{margin:"1rem"}}>
          <Col md={12}>
            <Card>
              <h2>E-commerce</h2>
              <p>
                Quaerat provident commodi consectetur veniam similique ad earum
                omnis ipsum saepe, voluptas, hic voluptates pariatur est
                explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                mollitia maiores labore suscipit quas? Nulla, placeat.
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="center" style={{margin:"1rem"}}>
          <Col md={12}>
            <Card>
              <h2>E-learning portals</h2>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="center" style={{margin:"1rem"}}>
          <Col md={12}>
            <Card>
              <h2>Brochure Websites</h2>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

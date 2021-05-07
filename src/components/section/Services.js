import React, { Component } from "react";
import { Row, Col, Card } from "antd";

export default class Services extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <h1>Our Services</h1>
        </Row>
        <Row justify="center">
          <Col md={12}>
            <h2>Cloud Services</h2>
            <Card>
                <p>Reducing server costs and going for a nore reliable and faster solution for maintanance.
                    Cloud orchestration technologies that are secure and ensure high performance.
                </p>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col md={12}>
            <h2>Data Analytics</h2>
            <Card>
                <p>
                    Artificial Intelligence and Machine lEarning technologies to perform big data analysis from
                    machine teschnologies.Client predictions and how to make more sales.
                </p>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col md={12}>
            <h2>SEO</h2>
            <Card>
                <p>
                    Making sure that your website appears first as the first option when import PropTypes from 'prop-types'
                    is search.
                </p>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col md={12}>
            <h2>E-commerce Search Engines</h2>
            <Card>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col md={12}>
            <h2>Code review & maintanance</h2>
            <Card>
                <p>
                    Demand of clients increases as the need to develop and maintain software increases.Faster deployment
                    and regular automation tools and software.
                </p>
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

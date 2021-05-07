import React, { Component } from 'react'
import {Row,Col} from 'antd'
import {withRouter} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer style={{ height: "200px", padding: "2rem", backgroundColor:"#434343", color:"white" }}>
            <Row justify="space-around" align="middle">
              <Col>links</Col>
              <Col>products</Col>
              <Col>more</Col>
            </Row>
          </footer>
        )
    }
}

export default withRouter(Footer)

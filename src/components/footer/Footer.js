import React, { Component } from 'react'
import {Row,Col} from 'antd'
import {withRouter} from 'react-router-dom'
import { InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'

class Footer extends Component {
    render() {
        return (
            <footer style={{ height: "200px", padding: "2rem", backgroundColor:"#434343", color:"white" }}>
            <Row justify="space-around" align="middle">
              <Col style={{color:"white"}}>
              <h4 style={{color:"white"}}>SOCIAL LINKS</h4>
              <YoutubeOutlined/> Youtube<br/>
              <LinkedinOutlined/> LinkedIn <br/>
              <TwitterOutlined/> Twitter <br />
              <InstagramOutlined/> Instagram <br/>
              </Col>
              <Col>
              <h4 style={{color:"white", marginBottom:"0"}}>OUR PRODUCTS</h4>
              <hr style={{margin:"0"}}/>
              <p style={{margin:"0"}}>Mobile Apps</p>
              <p style={{margin:"0"}}>Website Apps</p>
              <h4 style={{color:"white", marginBottom:"0"}}>OUR SERVICES</h4>
              <hr style={{margin:"0"}}/>
              <p style={{margin:"0"}}>Cloud Services</p>
              <p style={{margin:"0"}}>Data Analytics</p>
              <p style={{margin:"0"}}>SEO</p>
              </Col>
              <Col>more</Col>
            </Row>
          </footer>
        )
    }
}

export default withRouter(Footer)

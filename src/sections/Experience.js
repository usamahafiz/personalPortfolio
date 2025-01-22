import React from 'react'
import '../scss/_expertise.scss'
import { Col, Row } from 'antd'
import { CodepenOutlined , TeamOutlined, SketchOutlined  } from "@ant-design/icons";

const Experience = () => {
  return (
    <div className='expertise-container mt-4' id='expertise'>
      <h1 className='text-center mt-1 '>Expertise</h1>
      <p className='text-center mt-2 mb-3'>Gaining Experience by improving yourself in any field.</p>
      <Row justify="center" gutter={[16,16]} >
        <Col xs={24} sm={12} md={8}>
        <div className="expertise-card">
          <div className="icon-circle">
          <CodepenOutlined className='expertise-icon' />
          </div>
          <h3>Web Development</h3>
          <p>I build responsive websites using HTML, CSS, JavaScript, React, and Firebase, handle backend integration with MongoDB and Node.js.</p>
        </div>
        </Col>

        <Col xs={24} sm={12} md={8}>
        <div className="expertise-card">
          <div className="icon-circle">
          <SketchOutlined  className='expertise-icon' />
          </div>
          <h3>UX/UI Design</h3>
          <p>My goal is to become highly proficient in UX/UI design, creating intuitive experiences that meet users' needs and exceed their expectations.</p>
        </div>
        </Col>

        <Col xs={24} sm={12} md={8}>
        <div className="expertise-card">
          <div className="icon-circle">
          <TeamOutlined className="expertise-icon" />
          </div>
          <h3>Communication Skills</h3>
          <p>I strive to become proficient in communication skills,build strong relationships, and drive impactful results.</p>
        </div>
        </Col>

      </Row>
    </div>
  )
}

export default Experience

import React from 'react'
import { Row , Col , Image } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../assets/usama barat pic without bg.jpg'
import '../scss/_about.scss'

const About = () => {
  return (
    <div className='container about-section' id='about'>
     <Row>
      <Col xs={24} md={8} className='about-left'>
      <div className="profile-img mb-4 text-center">
      <Image
      width={250}
      height={250}
      src={myImage}
      alt='profile-pic'
      className='rounded'

       />
      
      </div>
      <div className="profile-info mb-4">
        <h4 className="text-center">Hafiz Muhammad Usama</h4>
        <p className='text-center mt-2'><b>Profile</b>: Mern Stack Developer</p>
        <p className='text-center'><b>Email</b>:<a href='hafizmuhammadusama664@gmail.com'> hafizmuhammadusama664@gmail.com</a></p>
        <p className='text-center'><b>Phone/WhatsApp No</b>: +92 305-5565781</p>
      </div> 
      </Col>


      <Col xs={24} md={16} className="right-section">
          <div className="about-me-content mt-4">
            <h5>About Me</h5>
            <p>
              I'm a dedicated student pursuing my bachelor of <b>Computer Science</b> at the prestigious <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Agriculture University of Faisalabad.</span>In addition to my academic pursuits, I have also honed my skills in web and app development through a program at <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>SMIT</span>, where I have become proficient in designing and building innovative digital solutions.
            </p>
            <p>
              My academic journey has equipped me with a solid foundation in computer science principles, while my technical training has honed my skills in web and app development.
            </p>
            <p>
            As I continue on my academic and professional journey, I am driven by a passion for exploring new technologies and solving complex problems. I am committed to continually enhancing my skills in <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>communication, teamwork, and leadership.</span>
            </p>
            <p>
            As I move forward, I am excited to leverage my technical expertise, creative problem-solving skills, and passion for innovation to drive positive change and make a lasting impact in the world of technology. With a strong foundation in computer science and a keen interest in emerging technologies, <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>I am poised to make a meaningful impact in the tech industry and beyond.</span>
            </p>
            {/* <p>
              During my internship at <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>BV Logics</span>, I gained hands-on experience in developing and implementing innovative software solutions. My role involved collaborating with a dynamic team to design and deploy web applications, troubleshoot issues, and ensure high-quality code delivery.
            </p> */}
            {/* <p>
              I am passionate about leveraging technology to address modern challenges and enhance productivity. My goal is to integrate my dual expertise in science and technology to create impactful solutions that drive growth and efficiency in the IT sector.
            </p> */}
            {/* <p>
              I’m eager about harnessing technology to tackle contemporary challenges and boost productivity. <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>My aim is to blend my expertise in both science and technology</span> to develop innovative solutions that drive growth and efficiency in the IT industry.
            </p> */}
          </div>
        </Col>

     </Row>

    </div>


  )
}

export default About

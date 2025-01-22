import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/_hero.scss';
import ResumePdf from '../assets/Resume.pdf'


// DownloadButton component
const DownloadButton = () => {
  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = ResumePdf;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className="contact-button btn w-100 text-white"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

const Hero = () => {
  const skills = ['Web Developer', 'UI/UX Designer', 'React Enthusiast', 'Frontend Developer'];
  
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0); 
  const [currentSkillText, setCurrentSkillText] = useState(''); 
  const [charIndex, setCharIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle typing effect
    const typeSkill = () => {
      const currentSkill = skills[currentSkillIndex]; // Get the current skill
      if (charIndex < currentSkill.length) {
        // If there are characters left to display, add the next character
        setCurrentSkillText((prev) => prev + currentSkill[charIndex]);
        setCharIndex((prev) => prev + 1); // Move to the next character
      } else {
        // Once the current skill is fully displayed, immediately switch to the next one
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length); // Move to the next skill
        setCurrentSkillText(''); // Clear the displayed text for the next skill
        setCharIndex(0); // Reset character index
      }
    };

    // Start the typing effect without any pause
    const typingTimeout = setTimeout(typeSkill, 150); // Speed of typing in milliseconds

    return () => clearTimeout(typingTimeout); // Cleanup on unmount
  }, [charIndex, currentSkillIndex]); // Dependencies: re-run when charIndex or currentSkillIndex changes

  // Scroll event listener to toggle the navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check for scrolling state

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <div className="hero" id="hero">
      <Navbar expand="lg" className={`navbar-custom fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <Navbar.Brand href="#home" className="brand">Hafiz Usama</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Portfolio</Nav.Link>
            <Nav.Link href="#expertise">Expertise</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="intro-section" id='hero'>
        <div className="row justify-content-center text-center">
          <div className="col-lg-6 col-md-10">
            <h1 className="name">I'm Hafiz Muhammad Usama</h1>
            <h2 className="skills">{currentSkillText}</h2>
            <Button  className="Resume-button mt-3 text-white" shape="rounded" size="large" >
              <DownloadButton />
            </Button>
            <div className="social-media-icons mt-4">
              <a href="https://www.linkedin.com/in/hafiz-usama-38a9922b0/" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined />
              </a>
              <a href="https://github.com/usamahafiz" target="_blank" rel="noopener noreferrer">
                <GithubOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// import React from 'react'
// import { useState , useEffect } from 'react'
// import { Navbar  , Nav, Button } from 'react-bootstrap'
// import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../scss/_hero.scss'

// const Hero =() => {
//   const skills = ['Web Developer', 'JavaScript Enthusiast', 'React Specialist', 'UI/UX Designer'];
//   const [currentSkill, setCurrentSkill] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
//     }, 2000);

//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('scroll', handleScroll);
//     };
// // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div className='hero'  id='hero'>
//         <Navbar
//         expand="lg"
//         className={`navbar-custom fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
//       >
//         <Navbar.Brand href="#home" className="brand">Hafiz Usama</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link href="#Hero">
//                  Home
//             </Nav.Link>
//             <Nav.Link href="#About">
//                About
//             </Nav.Link>
//             <Nav.Link href="#Projects">
//                Portfolio
//             </Nav.Link>
//             <Nav.Link href="#Expertise">
//               Expertise
//             </Nav.Link>
//             <Nav.Link href="#contact">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>


//       <div className="intro-section">
//         <div className="row justify-content-center text-center">
//           <div className="col-lg-6 col-md-10">
//             <h1 className="name">I'm Hafiz Muhammad Usama</h1>
//             <h2 className="skills">
//               {skills[currentSkill]}
//             </h2>
//            <Button type='primary' className='mt-3'
//            shape = 'rounded'
//            size = 'large'
//            >
//             Download Resume
//            </Button>
//            <div className="social-icons mt-4">
//             <a href="" target='_blank' rel="noopener noreferrer">
//             <LinkedinOutlined />
//             </a>
//             <a href="" target='_blank' rel="noopener noreferrer">
//             <LinkedinOutlined />
//             </a>
//            </div>

//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Hero

// // Progress.js
// import React, { useEffect, useRef } from 'react';
// import '../scss/_progress.scss';
// import { Col, Row } from 'antd';
// import { CheckCircleOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
// import backgroundImage from '../assets/progress2.jpg'; // Import your background image

// const Progress = () => {
//   const progressRef = useRef(null);

//   useEffect(() => {
//     const counters = document.querySelectorAll('.counter');
//     let hasAnimated = false; // To track if the animation has already run

//     // Function to animate the counters
//     const animateCounters = () => {
//       counters.forEach(counter => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;
//         const increment = target / 600; // Adjust the increment for smoother or faster animation

//         const updateCount = () => {
//           const currentValue = +counter.innerText;
//           if (currentValue < target) {
//             counter.innerText = Math.ceil(currentValue + increment);
//             setTimeout(updateCount, 20); // Adjust the timeout for smoother or faster animation
//           } else {
//             counter.innerText = target;
//           }
//         };

//         updateCount();
//       });
//     };

//     // Use IntersectionObserver to trigger animation when section is visible
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting && !hasAnimated) {
//           animateCounters();
//           hasAnimated = true; // Mark animation as complete
//         }
//       });
//     }, { threshold: 0.3 }); // Start the animation when 20% of the element is visible

//     if (progressRef.current) {
//       observer.observe(progressRef.current);
//     }

//     return () => {
//       if (progressRef.current) {
//         observer.unobserve(progressRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="progress-container mt-3" style={{ backgroundImage: `url(${backgroundImage})` }} ref={progressRef}>
//       <div className="blue-overlay">
//         <Row justify="center" align="middle" className="progress-row">
//           <Col className="progress-item">
//             <CheckCircleOutlined className="progress-icon" />
//             <h2 className="counter" data-target="10">0</h2> {/* Initial value set to 0 */}
//             <p className='text-white'>PROJECTS COMPLETED</p>
//           </Col>
//           <Col className="progress-item">
//             <CalendarOutlined className="progress-icon" />
//             <h2 className="counter" data-target="1">0</h2> {/* Initial value set to 0 */}
//             <p className='text-white'>YEARS OF EXPERIENCE</p>
//           </Col>
//           <Col className="progress-item">
//             <TrophyOutlined className="progress-icon" />
//             <h2 className="counter" data-target="4">0</h2> {/* Initial value set to 0 */}
//             <p className='text-white'>SKILLS</p>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Progress;

import { Col, Row } from 'antd'
import React, { useEffect, useRef } from 'react'
import '../scss/_progress.scss';
import { CheckCircleOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
import backgroundImage from '../assets/progress2.jpg'; // Import your background image

const Progress = () => {
  const progressRef = useRef(null)

  useEffect(() => {
    const counter = document.querySelectorAll('.counter');
    let hasAnimated = false
    const animateCounters = () => {
      counter.forEach((counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        const updateCount = () => {
          const currentValue = +counter.innerText;
          if (currentValue < target) {
            counter.innerText = Math.ceil(currentValue + increment);
            setTimeout(updateCount, 20); // Adjust the timeout for smoother or faster animation
          } else {
            counter.innerText = target;
          }

        };
        updateCount();

      });
    };

 

    //  Use IntersectionObserver to trigger animation when section is visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          hasAnimated = true; // Mark animation as complete
        }
      });
    }, { threshold: 0.3 }); // Start the animation when 20% of the element is visible

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);



  return (
    <div className='progress-container mt-3' style={{ backgroundImage: `url(${backgroundImage})` }} ref={progressRef}>
      <div className="blue-overlay">
        <Row justify={'center'} align={'middle'} className='progress-row'>
          <Col className='progress-item'>
            <CheckCircleOutlined className='progress-icon' />
            <h2 className='counter' data-target='10'>0</h2>
            <p className='text-white'>PROJECTS COMPLETE</p>
          </Col>

          <Col className='progress-item'>
            <CalendarOutlined className='progress-icon' />
            <h2 className='counter' data-target='1'>0</h2>
            <p className='text-white'>YEARS OF EXPERIENCE</p>
          </Col>

          <Col className='progress-item'>
            <TrophyOutlined className='progress-icon' />
            <h2 className='counter' data-target='4'>0</h2>
            <p className='text-white'>SKILLS</p>
          </Col>

        </Row>
      </div>

    </div>
  )
}

export default Progress


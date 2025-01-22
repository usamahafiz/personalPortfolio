import React from 'react'
import '../scss/_projects.scss'
import ReataurantApp from '../assets/image5.png'
import CarLandingPage from '../assets/image 7.png'
import AestheticResort from '../assets/image 3.png'
import TodoApp from '../assets/todo by react.png'
import ImageGallery from '../assets/image 1.png'
import BrArchitect from '../assets/image 6.png'
// import EventApp from '../assets/eventapp.jpg'

export default function Project() {
  const projects = [
    {
      title: "Restaurant Ordering Website",
      description: "Restaurant ordering website build with React JS ,Bootstrap and Firebase.",
      image: ReataurantApp,
      link: 'https://e-commerce-app-001.web.app/',
    },
    // {
    //   title: "Restaurant Ordering Website",
    //   description: "Restaurant ordering website build with React JS ,Bootstrap and Firebase.",
    //   image: EventApp,
    //   link: 'https://e-commerce-app-001.web.app/',
    // },
    {
      title: "Car's Landing Page",
      description: "Landing page built with React JS also using Bootstrap and CSS.",
      image: CarLandingPage,
      link: 'https://carslandingpage.vercel.app/',
    },
    {
      title: "Aesthetic Resort",
      description: 'A Stunning website built with HTML, CSS and Javascript.',
      image: AestheticResort,
      link: 'https://aesthetic-resort.surge.sh/',
    },
    {
      title: "Todo App",
      description: 'A Todo App built with React JS alongwith the use of local storage.',
      image: TodoApp,
      link: 'https://sparkly-melba-3c6085.netlify.app/',
    },
    {
      title: "Images Galary",
      description: 'A Stunning images gallery built with HTML, CSS, Javascript and Bootstrap.',
      image: ImageGallery,
      link: 'https://photos-world.surge.sh/',
    },
    {
      title: "Br Architect",
      description: 'An Architect website built with HTML, CSS and Javascript.',
      image: BrArchitect,
      link: 'https://brachitect.surge.sh/',
    },

  ]
  return (
    <section className='projects container my-5' id='projects'>
      <h1 className='text-center mb-1'>Projects</h1>
      <p className='text-center mb-4'>Due to client's policy, I can't show of all the projects that I have done.</p>
      <div className="row">
        {projects.map((project , index )=>(
          <div className="col-md-4 mb-4 mt-3" key={index}>
            <div className="card project-card">
              <img src={project.image} className="card-img-top project-image" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <p className='card-description'>{project.description}</p>
                <div className="project-details">
                  {project.details}
                </div>
                <div className="text-center">
                <a href={project.link} target='blank' rel='noopener noreferrer' className='btn btn-dark'>Visit Project</a>
                </div>

                </div>
                <div className="overlay text-center">
                <a href={project.link} target='blank' rel='noopener noreferrer' className='btn btn-dark'>Visit Link</a>
                </div>
                </div>
                </div>

        ))}
      </div>
      
    </section>
  )
}

import './App.css'
import NameTag from './NameTag.tsx'
import VideoCard from './MediaCard.tsx'
import { useRef } from 'react';
import { Mail } from "lucide-react";

function App() {
  const aboutRef = useRef<HTMLHeadingElement | null>(null);
  const experienceRef = useRef<HTMLHeadingElement | null>(null);
  const projectsRef = useRef<HTMLHeadingElement | null>(null);

  function scrollTo(ref: React.RefObject<HTMLHeadingElement | null>) {
    ref.current?.scrollIntoView({behavior: "smooth", block: "start"})
  }

  return (
    <body>
      <nav>
        <NameTag></NameTag>
        <div className='menu'>
          <p className='menu-item' onClick={() => scrollTo(aboutRef)}>About</p>
          <p className='menu-item' onClick={() => scrollTo(experienceRef)}>Experience</p>
          <p className='menu-item' onClick={() => scrollTo(projectsRef)}>Projects</p>
        </div>

        <div className='contact'>
          <a href="mailto:setu.marathe@gmail.com" target="_blank" className='move'>
              <div className='icon'>
                <Mail></Mail>
              </div>
          </a>

          <a href="https://github.com/SetuMar" target="_blank" className='move'>
              <div>
                <img src="./src/assets/icons/github.png" alt="github icon" className='icon'/>
              </div>
          </a>

          <a href="https://www.linkedin.com/in/setu-marathe-4448a9237/" target="_blank" className='move'>
              <div>
                <img src="./src/assets/icons/linkedin.png" alt="github icon" className='icon'/>
              </div>
          </a>
        </div>
      </nav>

      <div className='content'>
        <div className='about'>
              <h1 className='content-header' ref={aboutRef}>About</h1>
              <p>Honours Computer Science student at Western University. Interested in Machine Learning and Web Dev. </p>
              <p>Always happy to chat about anything so feel free to reach out. My email is <a href='mailto:setu.marathe@gmail.com' target='_blank' className='email-in-about'>setu.marathe[at]gmail[dot]com</a></p>
        </div>

        <br />

        <h1 className='content-header' ref={experienceRef}>Work Experience</h1>
        <div className='video-cards'>
          <VideoCard title='Software Developer Intern' mediaSrc='./src/assets/cgi.jpg' techStack='At CGI Inc. For BMO' bodyText='Frontend developer for BMO Small Business Banking application.' mediaType='image' mediaLink={{text: 'Visit Site', url:'https://www.cgi.com/en'}}></VideoCard>
          <VideoCard title='Computer Science Tutor' mediaSrc='./src/assets/logowhite.png' techStack='Self-Employed' bodyText='Tutored students struggling in computer science. Provided lectures, exercises, and sample homework problems.' mediaType='gif' mediaLink={{text: 'Contact for Tutoring', url:'mailto:setu.marathe@gmail.com'}}></VideoCard>
          <VideoCard title='Lifeguard and Swim Instructor' mediaSrc='./src/assets/city.jpg' techStack='At City of Toronto' bodyText='Taught young children how to swim. Created lesson plans and kept detailed reports on student progress. Kept pool patrons safe.' mediaType='image' mediaLink={{text: 'Visit Site', url:'https://www.toronto.ca/'}}></VideoCard>
        </div>

        <br />

        <h1 className='content-header' ref={projectsRef}>Projects</h1>
        <div className='video-cards'>
          <VideoCard title="Obstacle Detection Visualizer" mediaSrc='./src/assets/lidar.gif' bodyText='Tool to visualize Machine Learning obstacle analysis of LiDAR scans. 3rd Place Western Engineering Auto Innovation Challenge.' techStack='Python, Numpy, Vedo' mediaType='gif' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/movie-explorer'}}></VideoCard>
          <VideoCard title='Movie Review & Suggestion Site' mediaSrc='https://www.youtube.com/embed/03WI73jkcuE?si=A1s_W4W71p7H5YmP' bodyText='Movie review aggregator and explorer with Machine Learning Reccomendation Algorithm.' techStack='HTML, CSS, React (JS), Python, Flask, SciKit Learn' mediaType='video' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/movie-explorer'}}></VideoCard>
          <VideoCard title='Bad Apple in Python Console' mediaSrc='https://www.youtube.com/embed/tjSRx2eydwk?si=oHKBSDGWnlp2HhUN' bodyText='ASCII art tool which uses Computer Vision to recreate image files to console. 27k YouTube views.' techStack='Python, OpenCV' mediaType='video' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/Bad-Apple'}}></VideoCard>
          <VideoCard title='Wolfenstein Raycaster' mediaSrc='./src/assets/raycast.gif' bodyText='Faux-3D renderer created using Raycasting technique. Inspired by Wolfenstein game engine.' techStack='HTML, CSS, JS' mediaType='gif' mediaLink={{text: 'Try now', url:'https://setumar.github.io/'}}></VideoCard>
          <VideoCard title='Swordtail Quest Platformer' mediaSrc='https://player.vimeo.com/video/880679042?h=85f7f6997e' bodyText='Platformer game built by a team of 8 led by myself. Winner of 1st place North Shore Hackathon.' techStack='Python, Pygame' mediaType='video' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/Swordtail-Quest'}}></VideoCard>
          <VideoCard title='Sorting Algorithm Visualizer' mediaSrc='./src/assets/sorting.gif' bodyText='Tool to visualize and step through sorting algorithms.' techStack='HTML, CSS, JS' mediaType='gif' mediaLink={{text: 'Try now', url:'https://github.com/SetuMar/sorting-algorithm-visualizer'}}></VideoCard>
          <VideoCard title='Boids Flocking Simulation' mediaSrc='./src/assets/boids.gif' bodyText='Simulating the travel patterns of flocks of animals. Original paper written by Craig Reynolds.' techStack='Python, Pygame' mediaType='gif' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/Boids'}}></VideoCard>
          <VideoCard title="Conway's Game of Life" mediaSrc='./src/assets/conways1.gif' bodyText='Zero-player cellular automaton simulation which derives complex results from simple rules. Originally created by John Conway.' techStack='Python, Pygame' mediaType='gif' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/conways-game'}}></VideoCard>
          <VideoCard title="Graphing Camper Attendence" mediaSrc='./src/assets/campers.gif' bodyText='Graphing the attendence rates of age groups of campers over two decades.' techStack='Python, Pandas, Numpy, MatPlotLib' mediaType='gif' mediaLink={{text: 'GitHub', url:'https://github.com/SetuMar/camper-graph'}}></VideoCard>
        </div>

        <br/>

        <p className="show-more" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
          Return to Top
        </p>
      </div>
    </body>
  )
}

export default App

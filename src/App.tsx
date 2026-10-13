import './App.css'
import Timeline, { type TimelineEntry } from './Timeline.tsx'

import lidarGif from './assets/lidar.gif';
import vanLuyk from './assets/vanluyk.jpeg'
import cgi from './assets/cgi.jpg'
import uwo from './assets/uwo.png'
import ufc from './assets/ufc.png'

const EMAIL = 'setu.marathe@gmail.com';
const GITHUB = 'https://github.com/SetuMar';
const LINKEDIN = 'https://www.linkedin.com/in/setu-marathe-4448a9237/';
const RESUME = 'src/assets/Setu_Marathe-Resume.pdf'; 

// Search for "TODO" to find every placeholder.
// Newest first. `date`, `links` and `media` are all optional.
const experience: TimelineEntry[] = [
  {
    title: 'Data Analyst Intern',
    org: 'Van Luyk Greenhouse',
    date: 'Jul 2026 - Aug 2026',
    tech: 'Python, Pandas, NumPy',
    description: 'Researched the climate and economic viability of growing saffron in Southern Ontario.',
    media:{src: vanLuyk, alt:'Vany Luyk Garden Center Logo'}
  },
  {
    title: 'Summer Research Intern',
    org: 'Western University',
    date: 'May 2026 - Aug 2026',
    tech: 'Python, Pandas, NumPy, Gemini API',
    links: [{ text: 'GitHub', url: 'https://github.com/SetuMar/USRI'}, { text: 'Research Output', url: 'src/assets/Setu-Marathe-USRI-Poster.pdf'}],
    description: 'Researched the use of Large Language Models (LLMs) as causal inference tools to determine mechanisms of missingness in datasets.',
    media:{src: uwo, alt:'UWO Logo'}
  },
  {
    title: 'Software Developer Intern',
    org: 'CGI Inc. for BMO',
    date: 'May 2025 - Aug 2025',
    description:
      'Angular developer for the BMO Small Business Banking application. Built frontend for Pin Reset user story.',
    tech: 'HTML, CSS, TypeScript, Angular, Git',
    media:{src: cgi, alt:'CGI Inc. Logo'}
  },
];

const projects: TimelineEntry[] = [
  {
    title: 'UFC Fight Outcome Predictor',
    description:
      'Engineered a machine learning pipeline using UFC fight data to forecast match outcomes with over 70% accuracy.',
    tech: 'Python, SQL, NumPy, Pandas, SKLearn, BeautifulSoup',
    links: [
      { text: 'GitHub', url: 'https://github.com/SetuMar/UFC-predictor' },
    ],
    media: {src:ufc, alt:'UFC Logo'},
  },
  {
    title: 'Movie Review & Suggestion Site',
    description:
      'Built a movie reviewer and aggregator that processes data across 10000+ current films and leverages a KNN algorithm to deliver highly tailored recommendations to users.',
    tech: 'React, Python, Flask, SKLearn',
    links: [
      { text: 'GitHub', url: 'https://github.com/SetuMar/movie-explorer' },
      { text: 'Demo video', url: 'https://www.youtube.com/watch?v=03WI73jkcuE' },
    ],
    media: {
      src: 'https://img.youtube.com/vi/03WI73jkcuE/hqdefault.jpg',
      alt: 'Movie site demo video',
      href: 'https://www.youtube.com/watch?v=03WI73jkcuE',
    },
  },
  {
    title: 'Obstacle Detection Visualizer',
    description:
      'Developed a LiDAR Obstacle Analysis Visualization Tool to analyze machine learning obstacles across 19000+ LiDAR scans and efficiently processing datasets of 100000+ data points per scan. Received 3rd Place at Western Engineering Auto Innovation Challenge.',
    tech: 'Python, NumPy, Vedo',
    links: [{ text: 'GitHub', url: 'https://github.com/SetuMar/lidar' }],
    media: { src: lidarGif, alt: 'LiDAR obstacle detection demo' },
  },
];

function App() {
  return (
    <>
      <nav>
        <span className="name">Setu Marathe</span>

        <div className="menu">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="contact">
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a href={RESUME} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </nav>

      <main id="top">
        <section id="about" className="about">
          <h2 className="section-title">About</h2>
          <div className="about-card">
            <div className="about-text">
              <p>I'm a Computer Science & Data Science student at Western University interested in Data Analytics & Machine Learning. I'm always happy to chat about anything, so feel free to reach out at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </div>

            <dl className="about-facts">
              <dt>Studying</dt>
              <dd>CS @ UWO</dd>
              <dt>Focus</dt>
              <dd>Data Science & ML</dd>
              <dt>Looking for</dt>
              <dd>Summer 2027 internships</dd>
              <dt>Based in</dt>
              <dd>London, ON | Toronto, ON</dd>
            </dl>
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">Work Experience</h2>
          <Timeline items={experience} />
        </section>

        <section id="projects">
          <h2 className="section-title">Projects</h2>
          <Timeline items={projects} />
          <p className="more-link">
            <a href={GITHUB} target="_blank" rel="noreferrer">More projects on GitHub</a>
          </p>
        </section>

        <a href="#top" className="back-to-top">Back to top</a>
      </main>
    </>
  )
}

export default App

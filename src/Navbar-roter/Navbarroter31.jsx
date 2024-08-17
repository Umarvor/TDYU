import React, { useEffect, useState } from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const App = () => {
    const [data, setData] = useState({ projects: [], services: [] });

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Malumot olishda xatolik error:', error));
    }, []);

    return (
        <div className="container">
            <br />
            <header>
                <h1>Elektron universitet markazi</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                
           

            </header>
            <section>
                <h2 className='Project'>Bizning loyihalar</h2>
                <div className="project-grid">
                    {data.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 className='Project'>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href="#">{project.link}</a>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <br />
                <h2 className='Project'>Bizning xizmatlar</h2>
                <div className="service-grid">
                    {data.services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3 id='h3'>{service.title}</h3>
                            <p id='h333'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default App;


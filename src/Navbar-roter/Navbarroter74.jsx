import React, { useState } from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const courseData = [
    {
        degree: 'Bakalavr',
        faculty: 'Xususiy huquq fakulteti',
        year: '2020-2021-o‘quv yili 2-semester'
    },
    {
        degree: 'Bakalavr',
        faculty: 'Ommaviy huquq fakulteti',
        year: '2020-2021-o‘quv yili 2-semester'
    },
    {
        degree: 'Bakalavr',
        faculty: 'Jinoyat odil sudlov fakulteti',
        year: '2020-2021-o‘quv yili 2-semester'
    },
    {
        degree: 'Bakalavr',
        faculty: 'Xalqaro huquq va qiyosiy huquqshunoslik fakulteti',
        year: '2020-2021-o‘quv yili 2-semester'
    }
];

const courses = [
    'I kurs',
    'II kurs',
    'III kurs',
    'IV kurs',
    'V kurs',
    'VI kurs'
];

const DarsJadvali = () => {
    const [activeTab, setActiveTab] = useState(courses[0]);

    const renderCourseContent = () => {
        switch (activeTab) {
            case 'IV kurs':
                return courseData.map((item, index) => (
                    <div key={index} className="course-item">
                        <div className="degree">{item.degree}</div>
                        <div className="faculty">{item.faculty}</div>
                        <div className="year">{item.year}</div>
                    </div>
                ));
            case 'V kurs':
                return courseData.slice(0, 2).map((item, index) => (
                    <div key={index} className="course-item">
                        <div className="degree">{item.degree}</div>
                        <div className="faculty">{item.faculty}</div>
                        <div className="year">{item.year}</div>
                    </div>
                ));
            default:
                return courseData.slice(0, 3).map((item, index) => (
                    <div key={index} className="course-item">
                        <div className="degree">{item.degree}</div>
                        <div className="faculty">{item.faculty}</div>
                        <div className="year">{item.year}</div>
                    </div>
                ));
        }
    };

    return (
        <>
         <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />
               
                <NavLink to='/General-Pages/Elektron_kutubxona'><h3 className='H3'>Elektron kutubxona</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Masofaviy_talimm'><h3 className='H3'>Masoofaviy talim</h3></NavLink>
                <NavLink to='/General-Pages/Mashgulotlar_jadvali'><h3 className='H3'>Mashg'ulotlar jadvali</h3></NavLink>

                <NavLink to='/General-Pages/Xoriji_talabalarga'><h3 className='H3'>Xoriji talabalarga</h3></NavLink>
                <NavLink to='/General-Pages/Stipendiyalar_va_garntlar'><h3 className='H3'>Stipendiya va grantlar</h3></NavLink>
                <NavLink to='/General-Pages/Talabalarga_xizmat_korsatish'><h3 className='H3'>Talabalarga xizmat ko'rsatish markazi</h3></NavLink>
                <NavLink to='/General-Pages/Yuridik_klinika'><h3 className='H3'>Yuridik klinika</h3></NavLink>
                <NavLink to='/General-Pages/Akademik_mobilik'><h3 className='H3'>Akademig mobillik</h3></NavLink>
                <NavLink to='/General-Pages/Xorijiy_profetsorlar'><h3 className='H3'>Xorijiy profetsorlar</h3></NavLink>
                <NavLink to='/General-Pages/Treninglar'><h3 className='H3'>Treninglar va mayner kurslar</h3></NavLink>
                <NavLink to='/General-Pages/Klub'><h3 className='H3'>Klub va to'garaklar,mahorat darslari va festivallar</h3></NavLink>

                <NavLink to='/General-Pages/Korupsiyaga_qarshikurash_usullari'><h3 className='H3'>Korupsiyaga qarshikurash usullari</h3></NavLink>

                <br />

            </article>
            <div className="dars-jadvali">
                <h1 className="title">Dars jadvali</h1>
                <div className="tabs">
                    {courses.map((course, index) => (
                        <button
                            key={index}
                            className={`tab ${activeTab === course ? 'active' : ''}`}
                            onClick={() => setActiveTab(course)}
                        >
                            {course}
                        </button>
                    ))}
                </div>
                <div className="course-content">
                    {renderCourseContent()}
                </div>
            </div>
        </>
    );
}

export default DarsJadvali;

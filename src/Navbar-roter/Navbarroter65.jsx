import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div>
            <div onClick={onClick} style={{ cursor: 'pointer', background: isOpen ? '#003366' : '#004488', color: 'white', padding: '10px', margin: '5px 0' }}>
                {title}
            </div>
            {isOpen && <div style={{ padding: '10px', background: '#f1f1f1' }}>{content}</div>}
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/Savol")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
         <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />
                <NavLink to='/General-Pages/Masofaviy_talim'><h3 className='H3'>Masofaviy ta'lim</h3></NavLink>
                <NavLink to='/General-Pages/Kutubxona'> <h3 className='H3'>Kutubxona</h3></NavLink>
                <NavLink to='/General-Pages/Qabul_komissiyasii'><h3 className='H3'>Qabul komissiyasi</h3></NavLink>
                <NavLink to='/General-Pages/Intekrativ_xizmat'><h3 className='H3'>Intekrativ xizmatlar</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'> <h3 className='H3'>Elektron unversitet</h3></NavLink>
                <NavLink to='/General-Pages/Kop_savollar'><h3 className='H3'>Ko'p so'raladigan savollar</h3> </NavLink>
               




                <br />

            </article>
            <div>
                {data.map((item, index) => (
                    <AccordionItem
                    
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => toggleItem(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Accordion;

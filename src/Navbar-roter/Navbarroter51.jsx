import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemCardd from '../Components/ItemCardd.jsx';
import './Navbar-roter1.css';


const items = [
    { id: 1, title: 'TSUL Legal Report' },
    { id: 2, title: 'Kriminologiya va jinoiy odil sudlov' },
    { id: 3, title: 'Юридик фанлар ахборотномаси' },
    { id: 4, title: 'Юриспруденция' },
];

const App = () => {
    return (
        <>
            <br />
            <br /><br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />
                <NavLink to='/General-Pages/Ilmiy_faolyat'><h2 className='H3'>Ilmiy faolyat</h2></NavLink>
                <NavLink to='/General-Pages/Ilmiy_nashrlarr'><h2 className='H3'>Ilmiy nashrlar</h2></NavLink>
                <NavLink to='/General-Pages/Yosh_olimlar_kengashi'> <h2 className='H3'>Yosh olimlar kengashi</h2></NavLink>
                <NavLink to='/General-Pages/Davlat_grantlar'><h2 className='H3'>Davlat ilmiy texnik dasturlari doirasidagi grantlar</h2></NavLink>
                <br />

            </article>

            <div className="container">
                <h1 className='Project'>index.Ilmiy nashrlar</h1>
                <div className="grid" >
                    {items.map((item, id) => (
                        <NavLink to='/General/Pages/Ilmiy_nashrlar/index..Ilmiy_nashrlar'><ItemCardd key={id} title={item.title} /></NavLink>
                    ))}
                </div>
            </div>
            <br />
        </>
    );
};

export default App;
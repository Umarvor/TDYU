import React from 'react';
import ItemCard from '../Components/ItemCard.jsx';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';

const items = [
    { title: 'TSUL Legal Report' },
    { title: 'Kriminologiya va jinoiy odil sudlov' },
    { title: 'Юридик фанлар ахборотномаси' },
    { title: 'Юриспруденция' },
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

                <NavLink to='/General-Pages/Qabul'><h3 className='H3'>Qabul</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Ilm_fond'><h3 className='H3'>Ilm fond</h3></NavLink>
                <NavLink to='/General-Pages/Ilmiy_nashrlar'><h3 className='H3'>Ilmiy nashrlar</h3></NavLink>
                <NavLink to='/General-Pages/Ilmiy_kengashlar'><h3 className='H3'>Ilmiy kengashlar</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>



                <br />

            </article>

            <div className="container">
                <h1 className='Project'>index.Ilmiy nashrlar</h1>
                <div className="grid" >
                    {items.map((item, index) => (
                        <article key={index}>


                            <NavLink to='/General/Pages/Ilmiy_nashrlar/index.Ilmiy_nashrlar'><ItemCard title={item.title} /></NavLink>
                        </article>
                    ))}
                </div>
            </div>
            <br />
        </>
    );
};

export default App;
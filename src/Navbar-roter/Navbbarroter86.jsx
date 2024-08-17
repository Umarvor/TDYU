import React, { useEffect, useState } from 'react';
import './Navbar-roter1.css';
import { NavLink, Outlet } from 'react-router-dom';
const DataList = () => {

    return (
        <>
            <br /><br />
            <a href="/"><h2 className='H3'>Boshsahifaga qaytish</h2></a>
            <br />


            <br />


            <div className="data-list-container">

                <h1 className='data-list-container-h1'>Ma'lumotlar Ro'yxati</h1>
                <ul className="data-list">
                    <article className='data-list-article'>
                        <h2>Ism Familiya</h2>
                        <h2>Daraja</h2>

                    </article>

                    <NavLink to='Achilova'><li className="data-list-item">
                        <h2 className="data-list-item-ism">Achilova Gulhayo</h2>
                        <h4 className="data-list-item-daraja">Phd</h4>
                    </li></NavLink>
                    <NavLink to='Xayrilinna'><li className="data-list-item">
                        <h2 className="data-list-item-ism">Xayrilinna</h2>
                        <h4 className="data-list-item-daraja">Darajasiz</h4>
                    </li></NavLink>
                    <NavLink to='Abzalova'><li className="data-list-item">
                        <h2 className="data-list-item-ism">Abzalova Muhayyo</h2>
                        <h4 className="data-list-item-daraja">Phd</h4>
                    </li></NavLink>
                    <NavLink to='Mahmudjon'>
                        <li className="data-list-item">
                            <h2 className="data-list-item-ism">Mahmudjon Azimov</h2>
                            <h4 className="data-list-item-daraja">Phd</h4>
                        </li>
                    </NavLink>
                    <NavLink to='Salobar'>
                        <li className="data-list-item">
                            <h2 className="data-list-item-ism">Salobar Anvorova</h2>
                            <h4 className="data-list-item-daraja">Phd</h4>
                        </li></NavLink>
                    <NavLink to='Abdurahim'>
                        <li className="data-list-item">
                            <h2 className="data-list-item-ism">Abdurahim Mamadjonov</h2>
                            <h4 className="data-list-item-daraja">Darajasiz</h4>
                        </li>
                    </NavLink>
                    <NavLink to='Nodira'>
                        <li className="data-list-item">
                            <h2 className="data-list-item-ism">Nodira Pirimova</h2>
                            <h4 className="data-list-item-daraja">Datajasiz</h4>
                        </li>
                    </NavLink>
                    <NavLink to='Gulhayo'>
                        <li className="data-list-item">
                            <h2 className="data-list-item-ism">Gulhayo Siddiqova</h2>
                            <h4 className="data-list-item-daraja">Phd</h4>

                        </li>
                    </NavLink>
                    <NavLink to='Bahodir'>
                        <li className="data-list-item">
                            <h2 className="data-list-item-ism">Bahodir Ashurmatov</h2>
                            <h4 className="data-list-item-daraja">Phd</h4>
                        </li></NavLink>
                </ul>
                <Outlet />
            </div>
        </>

    );
};

export default DataList;

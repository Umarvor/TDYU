import React from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';
import logo4 from '../img/logo4.png';
import logo5 from '../img/logo5.png';
import logo6 from '../img/logo6.png';
import logo7 from '../img/logo7.png';
import logo8 from '../img/logo8.png';
import logo9 from '../img/logo9.png';
import logo10 from '../img/logo10.png';
import logo11 from '../img/logo11.png';
// Qo'shimcha logolarni shu tarzda import qiling

const partnersData = [
    {
        name: 'Toshkent davlat yuridik universiteti',
        country: 'O\'zbekiston Respublikasi',
        contractYears: '2020 - 2025',
        logo: logo2,
    },
    {
        name: 'Osaka universiteti',
        country: 'Xitoy',
        contractYears: '2021 - 2026',
        logo: logo3,
    },
    {
        name: 'Shpayer shahridagi Germaniya mamuriy fanlari universiteti, Germaniya ommaviy-huquqiy boshqaruv tadqiqoti',
        country: 'Koreya',
        contractYears: '2021 - 2026',
        logo: logo4,
    },
    {
        name: 'Boston kolleji huquq maktabi',
        country: 'Amerika',
        contractYears: '2021 - 2026',
        logo: logo5,
    },
    {
        name: 'Shanxay siyosat va huquq universiteti',
        country: 'Kanada',
        contractYears: '2021 - 2026',
        logo: logo6,
    },
    {
        name: ' Rossiya odil sudlov davlat universiteti',
        country: 'Rossiya',
        contractYears: '2021 - 2026',
        logo: logo7,
    },
    {
        name: 'Tuluza 1 Kapitoliy universiteti',
        country: 'Tojikiston',
        contractYears: '2021 - 2026',
        logo: logo8,
    },
    {
        name: 'Tojik davlat huquq, biznes va siyosat universiteti',
        country: 'Eron',
        contractYears: '2021 - 2026',
        logo: logo9,
    },
    {
        name: 'Ural davlat yuridik universiteti',
        country: 'Marokash',
        contractYears: '2021 - 2026',
        logo: logo10,
    },
    {
        name: 'Polotsk davlat universiteti',
        country: 'Hindiston',
        contractYears: '2021 - 2026',
        logo: logo11,
    },
    // Qo'shimcha hamkorlarni shu yerga qo'shing
];

const Partner = ({ name, country, contractYears, logo }) => (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img src={logo} alt={`${name} logosi`} style={{ maxWidth: '400px', height: '150px' }} />
        <h2>{name}</h2>
        <h3>{country}</h3>
        <p>Shartnoma yillari: {contractYears}</p>
    </div>
);

const Partners = () => (
    <>  <br />
    <br />
    <br />
    <article className='sahifalar'>
        <h1>O'xshahsh sahifalar</h1>
        <a className='H3' href="/">Bosh sahifaga qaytish</a>
        <br />


      
        <NavLink to='/General-Pages/Xalqaro_hamkorlik'><h3 className='H3'>Xalqaro hamkorlik</h3></NavLink>
                <NavLink to='/General-Pages/Xalqaro_OTMlar'><h3 className='H3'>Hamkor OTMlar</h3></NavLink>
                <NavLink to='/General-Pages/Xalqaro_Tashkilotlar'><h3 className='H3'>Xalqaro tashkilotlar</h3></NavLink>
                <NavLink to='/General-Pages/Akademik_mobillik'><h3 className='H3'>Akademig mobillik</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>



        <br />

    </article>
        <div className="containerrr">
            <h1 style={{ textAlign: 'center' }}>Hamkor Tashkilotlar</h1>
            {partnersData.map((partner, index) => (
                <Partner
                    key={index}
                    name={partner.name}
                    country={partner.country}
                    contractYears={partner.contractYears}
                    logo={partner.logo}
                />
            ))}
        </div>
    </>
);

export default Partners;

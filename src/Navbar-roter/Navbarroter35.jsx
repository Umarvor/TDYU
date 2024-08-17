// src/components/DocumentList.js
import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const documents = [
    {
        id: 1,
        code: "DSc.0713.05.2020.Yu.22.03",
        items: [
            { title: "Kengash",  },
            { title: "Seminar",  },
        ],
    },
    {
        id: 2,
        code: "DSc.0730.12.2019.Yu.22.01",
        items: [
            { title: "Kengash",  },
            { title: "Seminar", },
        ],
    },
    {
        id: 3,
        code: "DSc.0730.12.2019.Yu.22.02",
        items: [
            { title: "Kengash", },
            { title: "Seminar",},
        ],
    },
];

const DocumentList = () => {
    const handleDownload = () => {
        // PDF fayl URL manzilini kiriting
        const pdfUrl = '../img/IELTS 8.5 Routine.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
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
            <div className="document-list">
                {documents.map((doc) => (
                    <div key={doc.id} className="document-item">
                        <div id='h33' className="document-code">{doc.code}</div>
                        <div className="document-details">
                            {doc.items.map((item, index) => (
                                <div key={index} className="document-row">
                                    <div id='h33' className="document-title">{item.title}</div>
                                    <div className="document-download">
                                        <a  onClick={handleDownload}>
                                            yuklab olish
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DocumentList;

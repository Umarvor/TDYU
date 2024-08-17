import React, { useState, useEffect } from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const App = () => {
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
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Book')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Jsondan malumot kelmayapti:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

   

    return (
        <> <br />
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

            <div className="App">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Kitob qidirish..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button onClick={handleSearch}>Qidirish</button>
                </div>
                <div  className="book-section">
                    <h2 id='h3'>Kitoblar</h2>
                    <div className="book-list">
                        {filteredBooks.map(book => (
                            <div key={book.id} className="book-item">
                                <img src={book.image} alt={book.title} />
                                <p>{book.title}</p>
                                <button target="_blank" onClick={handleDownload}>Yuklash</button>
                            </div>
                        ))}
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default App;

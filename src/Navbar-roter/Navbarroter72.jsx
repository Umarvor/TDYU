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
        < > <br id='anti-corruption-container' />
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
                <div className="book-section">
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

import React, { useState, useEffect } from 'react';
import './Slid.css';
import { NavLink } from 'react-router-dom';
const App = () => {
    
    
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/boook')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Jsondan malumot kelmayapti:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter(boook =>
        boook.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

   

    return (
        <> <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />




                <br />

            </article>

            <div className="App">
                
                <div  className="book-section">
                    <h2 id='h3'>Ma'lumotlar</h2>
                    <hr />
                    <div className="book-listt">
                        <h1>Bizning kelajagimiz O'zbekiston kelajagi</h1>
                        {filteredBooks.map(boook => (
                            <div key={boook.id} className="book-itemm">
                                <img src={boook.img} alt={boook.title} />
                                <p>{boook.title}</p>
                            </div>
                        ))}
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default App;

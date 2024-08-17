// src/components/SearchComponent.js
import React, { useState, useEffect } from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [names, setNames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [namesPerPage, setNamesPerPage] = useState(10);

    useEffect(() => {
        // Fetch the JSON data from the public directory
        fetch('http://localhost:3000/names')
            .then(response => response.json())
            .then(data => setNames(data))
            .catch(error => console.error('Error fetching the names:', error));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page on search
    };

    const handleNamesPerPageChange = (num) => {
        setNamesPerPage(num);
        setCurrentPage(1); // Reset to the first page when changing items per page
    };

    const filteredNames = names.filter(name => {
        const firstName = name.firstName ? name.firstName.toLowerCase() : '';
        const lastName = name.lastName ? name.lastName.toLowerCase() : '';
        return firstName.includes(searchTerm.toLowerCase()) || lastName.includes(searchTerm.toLowerCase());
    });

    // Get current names
    const indexOfLastName = currentPage * namesPerPage;
    const indexOfFirstName = indexOfLastName - namesPerPage;
    const currentNames = filteredNames.slice(indexOfFirstName, indexOfLastName);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredNames.length / namesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>

            <br /><br />
            <a href="/"><h2 className='H3'>Boshsahifaga qaytish</h2></a>
            <br />
            <article className='H2'>
                <h2 id='h3'>Barcha o'qituvchilar</h2>
                <br />
                <h2 id='h33'>Bugungi kunda iniversitet professor-o'qituvchilari tarkibi 309 kishidan(bundan asosiy - 278 ta, ichki o'rindosh - 9 ta, tashqi o'rindsh - 22 ta) iborat bo'lib, shundan ilmiy darajaga ega bo'lganlar soni129 nafarni tashkil etadi</h2>
            </article>

            <div className="search-container">

                <input
                    className='input_1'
                    type="text"
                    placeholder="O'qituvchisi ismini kiriting?"
                    onChange={handleSearch}
                />
                <div className="pagination-controls">
                    {[10, 20, 30, 40, 50].map(num => (
                        <button key={num} onClick={() => handleNamesPerPageChange(num)}>
                            {num}
                        </button>
                    ))}
                </div>


                <table className='table'>

                    <tbody>
                        <tr className='trr'>
                            <td>
                                <h2 id='h33'>Ism sharif</h2>
                            </td>
                            <td>
                                <h2  id='h33'>daraja</h2>
                            </td>
                            <td>
                                <h2  id='h33'>Kafedralar</h2>
                            </td>
                            <td>
                                <h2  id='h33'>{">>"}</h2>
                            </td>
                        </tr>
                        {currentNames.length === 0 ? (
                            <tr>
                                <td colSpan="4" className='tdd'>Sizda bunday ism familya mavjud emas</td>
                            </tr>
                        ) : (
                            currentNames.map((name, index) => (
                                <tr key={index}>

                                    <td><h2 id='h3'>{name.firstName}</h2></td>
                                    <td><h2 id='h3'>{name.daraja}</h2></td>
                                    <td><h2 id='h3'>{name.kafedra}</h2></td>
                                    <td><h2 id='h33'>{name.a}</h2></td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
                <div className="pagination">
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchComponent;

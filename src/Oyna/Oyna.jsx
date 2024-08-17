// App.js
import React, { useState } from 'react';
import './Oyna.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Oynani ochish</button>

      <div className={`modal ${isModalOpen ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Universitet</h2>
          <ul>
            <li>Universitet haqida</li>
            <li>Rektor murojaati</li>
            <li>Maqsad va qadriyatlar</li>
            <li>Hisobotlar va taqdimotlar</li>
            <li>Logotip va xos uslub</li>
            <li>Muzey</li>
            <li>Universitetning ustuvor yo'nalishi</li>
            <li>Universitet rivojlanishining strategik yo'nalishlari</li>
            <li>Ekologik barqarorlik</li>
          </ul>
          <h2>Ta'lim</h2>
          <ul>
            <li>Bakalavriat</li>
            <li>Magistratura mutaxassisliklari</li>
            <li>Stipendiya va grantlar</li>
            <li>Elektron kutubxona</li>
            <li>Mashg'ulotlar jadvali</li>
            <li>Masofaviy ta'lim</li>
            <li>Treninglar va mayner kurslar</li>
            <li>Yakuniy davlat attestatsiyalari</li>
            <li>Yuridik klinika</li>
            <li>Street Law</li>
            <li>O'quv dastur</li>
            <li>O'quv reja</li>
            <li>Malaka talablari</li>
            <li>Bandlik va kariyera</li>
            <li>Xalqaro standartlar</li>
            <li>Yoshlar ittifoqi TDYU boshlang'ich tashkiloti</li>
            <li>Yoshlar Parlamenti</li>
            <li>Ma'naviyat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

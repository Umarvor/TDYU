import React from 'react';
import { NavLink } from 'react-router-dom';
const GrantProjects = () => {

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
      <br />
      <br />
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
      <div className='Navbarroter47'>
        <h1>Toshkent davlat yuridik universiteti Grant Loyiha</h1>
        <br />
        <h2 id='h3' onClick={handleDownload}>Loyiha 1: Yuridik terminlar elektron tezaurusi va innovatsion multimedia platformasini yaratish</h2>
        <p><strong>Loyiha miqdori:</strong> 985 mln soʻm</p>
        <p>
          <br />
          Mazkur loyiha qonunchilikda va huquqni qoʻllash amaliyotida foydalanib kelinayotgan yuridik terminlar onlayn bazasini yaratishni maqsad qilgan. Bunda, oddiy izohli lugʻatlardan farqli oʻlaroq, Oʻzbekistonda ilk bor yuridik terminlarning semantik tavsifi (sinonim, antonim, paronim va h.k.) ishlab chiqiladi.
        </p>
        <br />
        <h2 id='h3'>Loyiha 2: Qishloq xoʻjaligi klasterlari uchun elektron tijorat mexanizmlari asosida tovar (ish, xizmat)larning onlayn savdosiga oid raqamli platforma va uning mobil ilovasini yaratish</h2>
        <p><strong>Loyiha miqdori:</strong> 801 mln soʻm</p>
        <br />

        <p>
          Mazkur loyiha natijasida tadbirkorlik subyektlarining huquqlari kafolatlari mustahkamlanadi hamda klasterlik faoliyatining huquqiy asoslari takomillashtiriladi.
        </p>
      </div>
    </>
  );
};

export default GrantProjects;

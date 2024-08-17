import React from 'react';
import './Navbar-roter1.css';

const TransferApplication = () => {
  return (
    <>
      <br />
      <br />
      <article className='sahifalar'>
        <h1>O'xshahsh sahifalar</h1>
        <a className='H3' href="/">Bosh sahifaga qaytish</a>
        <br />



        <NavLink to='/General-Pages/Qabul_jarayoniga_oid_elonlar'><h2 className='H3'>Qabul jarayoniga oid elonlar</h2></NavLink>
        <NavLink to='/General-Pages/Talabalarni_uqishini_kuchirish'><h2 className='H3'>Talabalarni o'qishini ko'chirish</h2></NavLink>
        <NavLink to='/General-Pages/Qushmaa_talim_dasturlari'><h2 className='H3'>Qo'shma talim dasturlari asosida o'qishga qabul qilish</h2></NavLink>

        <br />

      </article>
      <div className="container">
        <h1 className="text-center">Oʻqishni koʻchirish uchun onlayn ariza qabul qilish jarayonlari</h1>
        <div className="content">
          <p>2022/2023-oʻquv yili uchun respublika oliy taʼlim muassasalariga talabalar oʻqishini koʻchirish, qayta tiklash boʻyicha arizalar quyidagi elektron tizimlar orqali qabul qilinadi:</p>
          <ul>
            <li><strong>transfer.edu.uz</strong> — respublikaning bir OTMdan boshqa OTMga yoki bir OTM doirasida;</li>
            <li><strong>my.dtm.uz</strong> — xorijiy va nodavlat oliy taʼlim muassasalaridan.</li>
          </ul>
          <p>Qabul 2022-yil 15-iyuldan 5-avgustgacha (shu kuni ham) davom etadi.</p>
          <p>Kerakli hujjatlar:</p>
          <ul>
            <li>ariza (onlayn tarzda)</li>
            <li>transkript yoki reyting daftarchasi (JPG yoki PDF shakli)</li>
            <li>akademik ma’lumotnoma (oʻqishni tiklovchilar uchun).</li>
          </ul>
          <p>Eslatib o‘tamiz, joriy yildan boshlab faqat 2 toifadagi talabalar (turmush qursa yoki davlat xizmatchisining ishi boshqa joyga o‘tganda)ga ichki "perevod" uchun o‘qishini ko‘chirishga ruxsat beriladi.</p>
          <p>Ogoh bo‘ling, xorijdan o‘qishni ko‘chirish bilan bog‘liq noqonuniy holatlarning oldini olish maqsadida testlar yakuniga yetgach, hujjatlar qayta tekshiriladi. Agarda ushbu jarayonda soxta hujjatlar aniqlangan, oliy ta’lim muassasasida qarzdorliklar mavjud bo‘lsa, talaba oʻtish balidan yuqori ball to‘plagan taqdirda ham unga o‘qishni ko‘chirishga ruxsat etilmaydi.</p>
        </div>
      </div>
    </>
  );
};

export default TransferApplication;

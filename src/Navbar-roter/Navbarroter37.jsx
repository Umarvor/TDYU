import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const KasabaUyushmasiInfo = () => {
    return (
        <>
            <br />
            <br /><br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />




                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Kasaba'><h3 className='H3'>Kasaba uyushmasi</h3></NavLink>
                <h3 className='H3'>Elektron kutubxona</h3>
                <NavLink to='/General-Pages/Murojaat_qilish'><h3 className='H3'>Malaka oshirish</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>
                <br />

            </article>
            <div className='Navbarroter37'>
                <h1 id='h3' className="title">TDYU Kasaba Uyushmasi Qo‘mitasi</h1>
                <h2 id='h3'>TDYU Kasaba Uyushmasi Tomonidan 2023-yilda Amalga Oshirilgan Ishlar Bo‘yicha Axborot</h2>

                <p>
                    TDYU Kasaba uyushmasi qo‘mitasi xodimlarning o‘z faoliyati yoki o‘qishi turi bo‘yicha umumiy kasbiy manfaatlari bilan bog‘liq bo‘lgan,
                    ularning mehnatga oid, boshqa ijtimoiy-iqtisodiy huquq va manfaatlarini ifodalash hamda himoya qilish maqsadida tuzilgan, ustav asosida faoliyat
                    yuritadigan jamoat tashkilotidir. Bugungi kunda universitet Kasaba uyushmasi “Elektron kasaba uyushmasi” platformasiga o‘tkazildi. Barcha hujjatlar
                    aylanmasi, murojaatlar, moliyaviy hisobotlar elektron tizimda amalga oshirilmoqda.
                </p>

                <p>
                    TDYU Kasaba uyushmasi o‘z faoliyatini O‘zbekiston Respublikasi Konstitutsiyasi, “Mehnat kodeksi”, “Aholi bandligi to‘g‘risida”,
                    “Mehnatni muhofaza qilish to‘g‘risida”gi, “Kasaba uyushmalari to‘g‘risida”, “Ijtimoiy sheriklik to‘g‘risida”, “Ta’lim to‘g‘risida”gi
                    qonunlari, O‘zbekiston Respublikasi Adliya vazirligi hamda O‘zbekiston davlat muassasalari va jamoat xizmati xodimlari kasaba uyushmasi Respublika Kengashi va
                    O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi hamda O‘zbekiston ta’lim, fan xodimlari kasaba uyushmasi Respublika kengashi o‘rtasida
                    2021-2023-yillar uchun tuzilgan tarmoq kelishuvlari hamda O‘zbekiston ta’lim, fan xodimlari kasaba uyushmasi Ustavi va boshqa huquqiy xujjatlar asosida
                    yuritadi. Hozirgi kunda kasaba uyushma qo‘mitasi 643 nafar a’zolarini birlashtirgan.
                </p>

                <p>
                    Universitet ma’muriyati bilan Kasaba uyushmasi qo‘mitasi o‘rtasida jamoa a’zolarining mehnatga oid, boshqa ijtimoiy, iqtisodiy huquq va manfaatlarini
                    ta’minlashga qaratilgan Jamoa shartnomasi imzolangan. Ushbu jamoa shartnomasi bandlarining bajarilishi muntazam ravishda nazoratga olingan.
                </p>

                <h3 id='h3'>TDYU Kasaba Uyushma Qo‘mitasining Asosiy Faoliyat Yo‘nalishlari:</h3>
                <ul>
                    <li>Kasaba uyushma qo‘mitasi a’zolarining ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan
                        tartibga solish sohasidagi normativ hujjatlar loyihalarini ishlab chiqishda ishtirok etish</li>
                    <li>Kasaba uyushma qo‘mitasi xodimlar nomidan jamoa muzokaralarini olib borishga, jamoa shartnomalari va kelishuvlarini tuzish</li>
                    <li>Mehnat qonunchiligi ustidan jamoatchilik nazoratini amalga oshirish</li>
                    <li>Jamoa shartnomalarini tuzish va mehnatni muhofaza qilish faoliyatida ishtirok etish</li>
                    <li>Kasaba uyushma a’zolari bilan birgalikda madaniy-ma’rifiy tadbirlar o‘tkazish</li>
                    <li>Kasaba uyushma a’zolari va ularning farzandlarining sog‘oshi, jismoniy tarbiya va sportga jalb etish borasida ishlarni olib borish</li>
                    <li>Kasaba uyushmasi ijtimoiy va nodavlat tashkilotlar, xorijiy mamlakatlar kasaba uyushmalari bilan hamkorlik qilish va xalqaro aloqalarni o‘rnatish</li>
                </ul>

                <h3 id='h3'>TDYU Kasaba Uyushma Qo‘mitasi raisi</h3>
                <p>O‘razaliev Murod Qorayevich</p>
                <a href="tel:+998 983677807"><p>98-367-78-07</p></a>
                <a href="tel:+998 712336636"><p>71 233 66 36 (1107)</p></a>

                <h3 id='h3'>TDYU Kasaba uyushma qo‘mitasi buxgalteri</h3>
                <p>Yusupov Baxtiyor Farxodovich</p>
                <a href="tel:+998 99-981-08-26"><p>99-981-08-26</p></a>
                <a href="tel:+998 712336636"><p>71 233 66 36 (1107)</p>
                </a>
                <h3 id="h3">TDYU Kasaba uyushma qo‘mitasi ish yurituvchisi</h3>
                <p>Nurmirzayev Komil Ulug‘bek ug‘li</p>
                <p>91-361-03-61</p>
                <p>71 233 66 36 (1107)</p>
            </div>
        </>
    );
}

export default KasabaUyushmasiInfo;

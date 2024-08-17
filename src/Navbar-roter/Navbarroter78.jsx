import React from 'react';
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
const TalabalargaXizmat = () => {
    return (
        <>
        <br />
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
            <div id='anti-corruption-container'>
                <h1>Talabalarga Xizmat Ko‘rsatish Markazi</h1>

                <div className="section">
                    <h2 id='h33'>Bizning maqsadimiz:</h2>
                    <p>
                        Talabalarga xizmat ko‘rsatish markazi — Toshkent davlat yuridik universiteti talabalari uchun samarali, qulay va tezkor xizmat turlarini taqdim etish, shuningdek, universitetning tarkibiy bo‘linmalari hamda professor-o‘qituvchilar bilan talabalar o‘rtasida muloqotning yangi formatini joriy etishni amalga oshiradi.
                    </p>
                    <p>
                        Biz mijozlarga yo‘naltirilgan yondashuv asosida o‘quv jarayoniga oid turli ma’lumotlar berish va “yagona darcha” tamoyili bo‘yicha universitet talabalariga yuqori sifatli va tezkor xizmatlar ko‘rsatishni maqsad qilganmiz.
                    </p>
                </div>

                <div className="section">
                    <h2 id='h33'>Markazning vazifalari:</h2>
                    <ul>
                        <li>“Yagona darcha” tamoyili asosida talabalarga tezkor va sifatli xizmat (davlat xizmati) ko‘rsatish faoliyatini amalga oshirish.</li>
                        <li>Universitetda ortiqcha ma’muriy tartib-taomillarni qisqartirish hisobiga talabalarga xizmat ko‘rsatish tizimini takomillashtirish.</li>
                        <li>Talabalarga “E-universitet” elektron platformasi doirasida o‘quv jarayoniga oid axborot olish xizmatini tashkil qilishda ko‘maklashadi.</li>
                        <li>Talabalarga xizmat ko‘rsatishda dasturiy va texnik vositalardan foydalanishning innovatsion shakllari va usullarini joriy etishni tashkil qilish.</li>
                        <li>Ta’lim jarayonida korrupsiyaviy omillar va huquqbuzarliklarni oldini olish bo‘yicha shaffof sharoit yaratishga ko‘maklashish.</li>
                    </ul>
                </div>

                <div className="section">
                    <h2 id='h33'>Elektron Murojaatlar:</h2>
                    <p>
                        Toshkent davlat yuridik universiteti talabalari o‘z murojaatlarini masofadan turib, elektron tarzda ushbu <a href="https://t.me/TSULSSCbot" target="_blank" rel="noopener noreferrer">@t.me/TSULSSCbot</a> telegram bot orqali yuborgan holda markazning barcha xizmatlaridan foydalanishi mumkin.
                    </p>
                    <p>
                        Shuningdek, mamlakatimiz hamda universitet hayotida sodir bo‘layotgan turli dolzarb ma’lumotlar, o‘quv jarayoniga oid axborotlar va shunga o‘xshash yangiliklar Markazning rasmiy <a href="https://t.me/Law_SSC" target="_blank" rel="noopener noreferrer">@t.me/Law_SSC</a> telegram kanali orqali muntazam tarqatib boriladi.
                    </p>
                </div>

                <div className="section">
                    <h2 id='h33'>Xizmatlar:</h2>
                    <h3 id='h33'>Talabalarga tegishli ma’lumotlar berish bo‘yicha:</h3>
                    <ul>
                        <li>O‘qish joyidan ma’lumot berish (zarur xollarda tashkilot nomi va maqsadi belgilanadi).</li>
                        <li>Talabani o‘qiyotgani sababli xarbiy xizmatga chaqiriqdan cho‘zdirish bo‘yicha ma’lumotnoma.</li>
                        <li>Talabaning shaxsiy hujjatlaridan (shahodatnoma, diplom) ma’lumot (nusxa) olishi.</li>
                        <li>Talabalarning xalqaro va xorijiy davlatlarning grant hamda turli loyihalarida ishtirok etishida ma’lumotnoma berish.</li>
                    </ul>

                    <h3 id='h33'>Talaba tomonidan beriladigan arizalar bo‘yicha:</h3>
                    <ul>
                        <li>Talabalar turar joyiga joylashtirish bo‘yicha arizalar.</li>
                        <li>Yozgi va qishki maktablarda ishtirok etish bo‘yicha va boshqa arizalar.</li>
                    </ul>

                    <h3 id='h33'>Talabalarga akademik o‘quv jarayoniga oid axborot yordami bo‘yicha:</h3>
                    <ul>
                        <li>Shaxsiy kabinet login va parollarini olish, qayta tiklash.</li>
                        <li>Talabalik guvohnomasini (ID Card) berish, yo‘qolgan bo‘lsa qayta tiklash.</li>
                        <li>Bitiruvchilarga diplom va ilovasini berish.</li>
                        <li>Akademik ma’lumotnoma (transkript) berish.</li>
                    </ul>

                    <h3 id='h33'>Talabalarga ta’lim jarayoni bo‘yicha maslahat (konsultatsiya) berish bo‘yicha:</h3>
                    <ul>
                        <li>TDYU tashkil etilgan xorijiy til kurslari.</li>
                        <li>TDYU talabalarning bo‘sh vaqtini mazmunli tashkil etish uchun turli to‘garaklar, yozgi-qishki maktablar, klublar haqida ma’lumot.</li>
                        <li>Talabalar sog‘lig‘ini tiklash va profilaktika ishlari bo‘yicha.</li>
                    </ul>
                </div>

                <div className="section">
                    <h2 id='h33'>Bizning xodimlarimiz:</h2>
                    <ul>
                        <li>Sayidumarov Oybek Tursunxo‘ja o‘g‘li – markaz direktori</li>
                        <li>Aminov Shaxrizod Umidbek o‘g‘li – uslubchi</li>
                        <li>Ahmedov Jasurbek Muzaffarjon o‘g‘li – uslubchi</li>
                    </ul>
                </div>

                <div className="section">
                    <h2 id='h33'>Bizning manzil:</h2>
                    <p>
                        Toshkent shahri, Amir Temur shoh ko‘chasi TDYU 3-o‘quv binosi, katta majlislar zali yonida.
                    </p>
                    <p>
                        Murojaat uchun telefonlar:
                        <ul>
                            <li>(97) 742-99-24</li>
                            <li>(93) 535-12-02</li>
                        </ul>
                    </p>
                    <p>
                        Elektron pochta: <a href="mailto:info-ssc@tsul.uz">info-ssc@tsul.uz</a>
                    </p>
                    <p>
                        Telegram kanal: <a href="https://t.me/Law_SSC" target="_blank" rel="noopener noreferrer">https://t.me/Law_SSC</a>
                    </p>
                    <p>
                        Telegram bot: <a href="https://t.me/TSUL_SSC_bot" target="_blank" rel="noopener noreferrer">https://t.me/TSUL_SSC_bot</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default TalabalargaXizmat;

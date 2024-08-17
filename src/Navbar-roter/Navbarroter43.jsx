// src/components/UniversityInfo.js
import React from 'react';
import './Navbar-roter1.css';
import Telegram from '../img/telegram.png'
import Twitter from '../img/twitter.png'
import Facebook from '../img/icons8-facebook-48.png'
import Logatip from '../img/logatip.jpg'
const UniversityInfo = () => {
    return (
        <>
            <br />
            <br />

            <a className='H3' href="/"><h3></h3>Bosh sahifaga qaytish</a>
            <div className="university-info-container">

                <header className="header">
                    <img className='Logatip' src={Logatip} alt="" />
                    <h1>Toshkent davlat yuridik universiteti</h1>
                    <div className="contact-info">
                        <p  >Email: <a href="mailto:info@tsul.uz">info@tsul.uz</a></p>
                        <p>Phone: <a href="tel:+998712334209">+998 71 233-42-09</a></p>
                        <div className="social-icons">
                            <a href="https://t.me/tsulofficial"><i ><img className="fab_facebook" src={Telegram} alt="" /></i></a>
                            <a href="https://twitter.com/tsulofficial"><i ><img className="fab_facebook" src={Twitter} alt="" /></i></a>
                            <a href="https://www.fb.com/tsulofficial"><i className="fab fa-instagram"></i><img src={Facebook} alt="" /></a>
                        </div>
                    </div>
                </header>
                <main className="content">
                    <h2 id='h3'>Universitet haqida</h2>
                    <p>
                        Toshkent davlat yuridik universiteti (TDYU) yuridik kadrlarni tayyorlash bo'yicha O'zbekistonda tayanch oliy o'quv va ilmiy-uslubiy muassasa hisoblanadi.
                        Oliy o'quv tarixi, davlatimizda milliy huquqshunoslik maktabining rivojlanishi va Xadicha Sulaymonova, Hojiakbar Rahmonqulov, Boris Blinder, Georgiy Sarkisyan, Anvar Agzamovdjayev, Shavkat Urazayev, Shoakbar Shoahmedov, G'afur Abdurahmanov, Ilhom Zokirov kabi ko'zga ko'ringan yetuk huquqshunos-olimlar hamda milliy huquqshunosligimizga katta hissa qo'shgan boshqa ko'plab huquqshunoslar nomlari bilan chambarchas bog'liqdir.
                        1991-yil 15-avgustda Vazirlar Mahkamasining qaroriga ko'ra Toshkent davlat universitetidan Toshkent davlat yuridik instituti nomi bilan ajralib chiqdi.
                        O'zbekiston Respublikasi Prezidentining 2013 yil 28 iyundagi PQ–1990-son qarori bilan Toshkent davlat yuridik instituti, Toshkent davlat yuridik universitetiga aylantirildi.
                        Universitet o'z faoliyatini mustaqil o'quv-uslubiy va ilmiy-izlanish muassasasi sifatida boshlaganidan to bugungi kunga qadar ko'plab yirik an'analarni o'zida saqlab kelgan holda, o'quv jarayoniga yangi pedagogik texnologiyalarni faol tatbiq etmoqda. O'n mingdan ortiq yuridik kadrlarni tayyorlash jarayonida fundamental va ilmiy izlanishlar olib bormoqda hamda jamiyatda huquqiy ong va huquqiy madaniyatni oshirishga qaratilgan keng qamrovli ma'naviy-ma'rifiy faoliyatni amalga oshirmoqda.
                        Toshkent davlat yuridik universiteti tomonidan bakalavr, magistr, doktorant va mustaqil izlanuvchi darajasidagi mutaxassislar tayyorlanmoqda.
                        O'zbekiston Respublikasi Prezidentining 2020-yil 29-apreldagi “O'zbekiston Respublikasida yuridik ta'lim va fanini tubdan takomillashtirish bo'yicha qo'shimcha chora-tadbirlar to'g'risida”gi PF–5987-son Farmoniga muvofiq TDYU tashkiliy tuzilmasi qayta ko'rib chiqildi va yangi fakultetlar va tarkibiy bo'linmalar tashkil etildi. Hozirda Toshkent davlat yuridik universitetida 4 ta fakultet faoliyat yuritmoqda.
                    </p>
                    <ul>
                        <li>Ommaviy huquqiy</li>
                        <li>Jinoy odis sudlovi</li>
                        <li>Xususiy huquq</li>
                        <li>Xalqaro huquq va qiyosiy huquqshunoslik</li>
                    </ul>
                    <p>
                        Mazkur fakultetlar kesimida bir necha yangi kafedra va markazlar tashkil etilgan bo'lib, Konstitutsiyaviy huquq kafedrasi, Ma'muriy va moliya huquqi kafedrasi, Sud, huquqni muhofaza qiluvchi organlar va advokatura kafedrasi, Kriminalistika va sud ekspertizasi kafedrasi, Yapon huquqini o'rganish markazi, Nemis huquqi va qiyosiy-huquqiy tadqiqotlar markazi shular jumlasidandir. Universitetda 19 ta kafedra mavjud. Universitet ilmiy salohiyat ko'rsatkichi 2021-yil fevral holatiga ko'ra, 41,2 foizni tashkil etmoqda. Kelgusi 5 yil ichida ilmiy-tadqiqot ishlarini qo'llab-quvvatlash orqali ilmiy salohiyatni kamida 70 foizga yetkazish bo'yicha chora-tadbirlar amalga oshirilmoqda.
                    </p>
                    <p>
                        Ma'lumot uchun: bugungi kunda universitetda 279 nafar professor-o'qituvchi faoliyat yuritib, ularning 33 nafari fan doktori (DSc), 82 nafari fan nomzodi (shundan, falsafa doktori (PhD) 29 nafar), 23 nafari professor, 42 nafari dosent ilmiy daraja va unvonlariga ega.
                        Universitetda o'quv jarayoni mamlakatimizda qabul qilingan kredit-modul tizimi asosida yo'lga qo'yilgan. Talabalarning fanlarni tanlash imkoniyatini taminlash borasida Yevropa kredit tizimi - ECTS (European Credit Transfer and Accumulation System) joriy etilgan.
                        Mazkur 2020/2021 o'quv yilidan boshlab universitetda masofaviy ta'lim shaklida bakalavriat va magistratura dasturlari amalga oshirilmoqda.
                        Universitetda “Ikki tomonlama diplom” (double degree) tizimi nazarda tutilgan va hozirgi kunda dasturlar joriy etilmoqda.
                    </p>
                    <p>
                        TDYU Universitetlar xalqaro assotsiatsiyasi (International Association of Universities – IAU), Yuridik maktablar xalqaro assotsiatsiyasi (International Association of Law Schools – IALS), Yevropa huquq fakul`tetlari assotsiatsiyasi (European Law Faculties Association – ELFA) kabi xalqaro tashkilotlarning to'laqonli a'zoligiga qabul qilindi. Hozirgi vaqtda Universitetlar buyuk xartiyasi (Magna charta) va Yevropa oliy ta'lim muassasalari uyushmasi (EURASHE)ga a'zo bo'lish yuzasidan arizalar topshirildi.

                        Toshkent davlat yuridik universiteti magistraturasida quyidagi mutaxassisliklar bo'yicha kadrlar tayyorlanadi (o'quv muddati – 1 yil):
                    </p>
                    <ul>
                        <li>
                            Advokatlik faoliyati
                        </li>
                        <li>
                            Xalqaro arbitraj va nizolarni hal etish
                        </li>
                        <li>
                            Sport huquqi
                        </li>
                        <li>
                            Davlat boshqaruvi huquqi
                        </li>
                        <li>
                            Biznes huquqi
                        </li>
                        <li>
                            Mehnat huquqi
                        </li>
                        <li>
                            Jinoyat qonunchiligini qo'llash nazariyasi va amaliyoti,


                        </li>
                        <li>
                            Intellektual mulk va axborot texnologiyalari huquqi
                        </li>
                    </ul>
                    <p>
                        Shuningdek, universitet huzurida Yuridik kadrlarni xalqaro standartlar bo'yicha professional o'qitish markazi, profilaktika inspektorlarini tayyorlash va malakasini oshirish bo'yicha universitetning Ixtisoslashtirilgan filiali hamda universitet huzuridagi akademik litseyi faoliyat yuritmoqda.

                        Shu bilan birga, respublikamizning har bir hududida tashkil etilgan Adliya vazirligining yuridik texnikumlari faoliyati universitet tomonidan muvofiqlashtirib borilmoqda.

                        Toshkent davlat yuridik universiteti (TDYU) yuridik kadrlarni tayyorlash bo‘yicha O‘zbekistonda tayanch  oliy o‘quv va ilmiy-uslubiy muassasa hisoblanadi.
                        Aloqa
                        Ishonch telefoni: +998 71 233-42-09

                        Faks: <a href="/+998 71 233-37-48">+998 71 233-37-48</a>

                        <a href="/e-mail: info@tsul.uz
">e-mail: info@tsul.uz
                        </a>
                        O‘zbekiston Respublikasi, 100047. Toshkent sh., Sayilgoh ko‘ch., 35 uy



                        J
                    </p>
                </main>
            </div>
        </>
    );
};

export default UniversityInfo;

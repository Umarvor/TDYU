import React from 'react';
import './Navbar-roter1.css'; 
import { NavLink } from 'react-router-dom';
const professors = [
    {
        id: 1,
        name: "Pablo Cortes",
        position: "Leycester Universiteti Fuqarolik huquqi professori, Buyuk Britaniya",
        email: "pablo.cortes@le.ac.uk",
        subjects: [
            "Qiyosiy konstitutsiyaviy huquq",
            "Huquq va axborot texnologiyalari",
            "Sud va huquqni muhofaza qilish",
            "Biznes huquqi"
        ],
        department: "Konstitutsiyaviy huquq"
    },
    {
        id: 2,
        name: "Jose Ignacio Hernandez G.",
        position: "Amerika taraqqiyot banki konsultanti, Garvard o‘qituvchisi",
        email: "Jose_Ignacio_Hernandez_Gonzalez@hks.harvard.edu",
        subjects: [
            "Ma’muriy huquq",
            "Konstitutsiyaviy huquq",
            "Lotin Amerikasi konstitutsionalizmi"
        ],
        department: "Konstitutsiyaviy huquq"
    },
    {
        id: 3,
        name: "Dr Przemyslaw Panfil",
        position: "Gdansk universiteti Huquq va boshqaruv fakulteti dotsenti",
        email: "deruyter@wp.pl",
        subjects: [
            "Xalqaro moliyaviy huquq va bank huquqi"
        ],
        department: "Biznes va boshqaruv huquqi"
    },
    {
        id: 4,
        name: "Paolo Macchi",
        position: "Withers advokatlik firmasi katta yordamchisi",
        email: "paolomacchiesq@gmail.com",
        subjects: [
            "Sport va ommaviy axborot vositalari to'g'risidagi qonun (sportdagi televidenie / translyatsiya huquqlariga e'tibor)",
            "Qiyosiy huquq (AQSh qonunchiligi va huquqiy tizimiga e'tibor)"
        ],
        department: "Davlat va huquq nazariyasi"
    },
    {
        id: 5,
        name: "Mateja Durovic",
        position: "Londonning Qirollik Kolleji huquq dotsenti, Buyuk Britaniya, Texnologiya, axloq qoidalari, huquq va jamiyat markazi hamraisi",
        email: "mateja.durovic@kcl.ac.uk",
        subjects: [
            "Huquq va yangi texnologiyalar"
        ],
        department: "Davlat va huquq nazariyasi"
    },
    {
        id: 6,
        name: "Sorkin Vladimir",
        position: "Grodno shahridagi Yanka Kupala davlat universiteti Jinoyat huquqi, jinoyat protsessi va kriminalistika kafedrasi dotsenti",
        email: "ina.sorkina@gmail.com",
        subjects: [
            "Dalillar nazariyasi"
        ],
        department: "Jinoyat protsessual huquqi"
    },
    {
        id: 7,
        name: "Dr.Krzysztof Woźniewski",
        position: "Huquq va boshqaruv fakulteti Gdansk universiteti Jinoyat protsessual va kriminalistik bo‘lim Kriminalistika va dalillar huquqi kafedrasi mudiri",
        email: "krzysztof.wozniewski@prawo.ug.edu.pl",
        subjects: [
            "Jinoyat huquqbuzarliklarining protsessual qonuni",
            "Jinoyat protsessida dalillar qonuni",
            "Evropa jinoyat protsessi"
        ],
        department: "Jinoyat protsessual huquqi"
    },
    {
        id: 8,
        name: "Nikolay Kovalev",
        position: "Ulfrid Laurier Universitetining dotsenti, Barrister va advokat, Yupori Kanada yuridiк jamiyati a’zosi.",
        email: "nkovalev@wlu.ca",
        subjects: [
            "Jinoyat jaraёnida sodir sudlov asoslari",
            "Chet davlatlarda jinoyat sodir sudlov xususiyatlari"
        ],
        department: "Jinoyat protsessual huquqi"
    },
    {
        id: 9,
        name: "Goran Klemenechik",
        position: "Regional dialog (Sloveniya Respublikasi Korrupsiyaning oldini olish komissiyasi komissari sifatida tanilgan yurist va davlat xizmatchisi)",
        email: "",
        subjects: [
            "Jinoyat huquqi, kriminologiya va korrupsiyaga qarshi kurash"
        ],
        department: "Jinoyat huquqi"
    },
    {
        id: 10,
        name: "Djyems Iglin",
        position: "Regional dialog Katta yuriskonsul",
        email: "",
        subjects: [
            "Sud, huquqni muhofaza qilish organlari va odil sudlovni monitoring qilish"
        ],
        department: "Jinoyat protsessual huquqi"
    },
    {
        id: 9,
        name: "Goran Klemenechik",
        position: "Regional dialog (Sloveniya Respublikasi Korrupsiyaning oldini olish komissiyasi komissari sifatida tanilgan yurist va davlat xizmatchisi)",
        email: "",
        subjects: [
            "Jinoyat huquqi, kriminologiya va korrupsiyaga qarshi kurash"
        ],
        department: "Jinoyat huquqi"
    },
    {
        id: 10,
        name: "Djyems Iglin",
        position: "Regional dialog Katta yuriskonsul",
        email: "",
        subjects: [
            "Sud, huquqni muhofaza qilish organlari va odil sudlovni monitoring qilish"
        ],
        department: "Jinoyat protsessual huquqi"
    },
    {
        id: 9,
        name: "Goran Klemenechik",
        position: "Regional dialog (Sloveniya Respublikasi Korrupsiyaning oldini olish komissiyasi komissari sifatida tanilgan yurist va davlat xizmatchisi)",
        email: "",
        subjects: [
            "Jinoyat huquqi, kriminologiya va korrupsiyaga qarshi kurash"
        ],
        department: "Jinoyat huquqi"
    },
    {
        id: 10,
        name: "Djyems Iglin",
        position: "Regional dialog Katta yuriskonsul",
        email: "",
        subjects: [
            "Sud, huquqni muhofaza qilish organlari va odil sudlovni monitoring qilish"
        ],
        department: "Jinoyat protsessual huquqi"
    }
];

const ProfessorsTable = () => {
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
            <div  className="table-container">
                <article>
                    <h1 className='zc'>Univeristetga taklif etilgan va faoliyat olib borayotgan xorijiy professor-o‘qituvchilar</h1>
                    <h1 className='zc'>2020-yil davomida 24 ta yetuk xorijiy professorlar jalb etilgan hamda ayni paytda ularning soni ortmoqda.</h1>
                </article>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>F.I.O</th>
                            <th>Lavozimi</th>
                            <th>Fanlar</th>
                            <th>Kafedra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professors.map((professor, index) => (
                            <tr key={professor.id}>
                                <td id='h33'>{index + 1}</td>
                                <td id='h33'>{professor.name}</td>
                                <td id='h33'>{professor.position}</td>
                                <td>
                                    <ul>
                                        {professor.subjects.map((subject, idx) => (
                                            <li key={idx}>{subject}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td id='h33'>{professor.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProfessorsTable;

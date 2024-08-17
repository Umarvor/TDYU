import React from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const AntiCorruption = () => {
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
            <div className="anti-corruption-container">
                <h1>Tashkent State Law University: Combating Corruption</h1>

                <section>
                    <h2>Reporting Corruption</h2>
                    <p>
                        If you come across cases of corruption at TSUL, report them via <a href="https://t.me/antikorbot" target="_blank" rel="noopener noreferrer">@antikorbot</a>.
                    </p>
                    <p>
                        An uncompromising fight against corruption has been announced in the system of justice. Now, you can send information about cases of corruption in the system of the Ministry of Justice, including departments and divisions of justice, notaries, state service centers, registries, and legal education institutions, to <a href="https://t.me/antikorbot" target="_blank" rel="noopener noreferrer">@antikorbot</a>, the hotline "1008" or a special platform of the official website of the Ministry. (<a href="http://www.minjust.uz/uz/anticorruption/feedback" target="_blank" rel="noopener noreferrer">Official Website</a>).
                    </p>
                    <p>
                        Materials will be reviewed in due course and the identity of the applicant will remain confidential.
                    </p>
                </section>

                <section>
                    <h2>Round Table on "Corruption - an Obstacle to Development"</h2>
                    <p>
                        The event was attended by Azamat Ergashev of the Agency for Anti-Corruption, the Vice-Rector for Youth Affairs and Spiritual Outreach of Tashkent State University of Law, Ahror Khashimhonov, specialists and students of the Private Law faculty.
                    </p>
                    <p>
                        During the round table, the students were provided with information on the activities of the agency and the state policy on combating corruption, as well as reforms in this area. The students also received answers to their questions from the experts.
                    </p>
                </section>

                <section>
                    <h2>Special Master's Degree in the Study of Corruption Problems</h2>
                    <p>
                        A memorandum of cooperation was signed between the Tashkent State Law University and the Anti-Corruption Agency. According to the memorandum, a special master's degree in the study of corruption problems will be opened at TSUL.
                    </p>
                    <p>
                        Also, work is carried out in cooperation on the organization of sociological, scientific, and other research on the state, trends, and causes of corruption.
                    </p>
                    <p>
                        In addition, within the framework of the memorandum, cooperation will be established with leading foreign higher education institutions and international organizations in the field of combating corruption, and foreign experts and professors will be involved in the educational process of the university.
                    </p>
                    <p>
                        At the same time, systematic work is carried out on participation in republican, international, and foreign grant projects, preventing and fighting corruption in the university system.
                    </p>
                </section>

                <section>
                    <h2>Local Documents and Normative-Legal Laws</h2>
                    <p>
                        In addition, local documents establishing specific objectives and duties for combating corruption in TSUL are followed, as are normative-legal laws.
                    </p>
                    <p>
                        For more information, visit the official links:
                        <ul>
                            <li><a href="https://t.me/tsulofficial/13067" target="_blank" rel="noopener noreferrer">TSUL Official Telegram</a></li>
                            <li><a href="https://tsul.uz/uz/general-page/Documents-on-Counteraction-of-Corruption" target="_blank" rel="noopener noreferrer">Documents on Counteraction of Corruption</a></li>
                        </ul>
                    </p>
                </section>
            </div>
        </>
    );
};

export default AntiCorruption;

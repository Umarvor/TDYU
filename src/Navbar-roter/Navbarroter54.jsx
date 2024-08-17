import React from 'react';
import { NavLink } from 'react-router-dom';

const DormitoryInfo = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />





                <NavLink to='/General-Pages/talabalar_turar_jooylari'><h2 className='H3'>Talabalar turar joyi</h2></NavLink>
                <NavLink to='/General-Pages/Kitob_dukoni'><h2 className='H3'>Talabalar kitob do'koni</h2></NavLink>
                <NavLink to='/General-Pages/Ovqatlanish_joylari'><h2 className='H3'>Ovqatlanish joylari</h2></NavLink>
                <NavLink to='/General-Pages/Stipendiyalar'><h2 className='H3'>Stipendiyalar</h2></NavLink>

                <br />

            </article>
            <div className='Navbarroter52'>
                <h1>Toshkent davlat yuridik universiteti Talabalar turar joylari haqida</h1>
                <p>
                    <strong>MA’LUMOT</strong>
                </p>
                <p>
                    Toshkent davlat yuridik universitetiga qarashli 3 ta Talabalar turar joylari mavjud.
                </p>
                <h2 className='xxxx'>1-sonli Talabalar turar joyi</h2>
                <p>
                    Olmazor tumani Talabalar ko‘chasi 192-uy manzilida joylashgan. Bino 1960-yil qurilgan, 4 qavatdan iborat bo’lib, sig’imi 292 ta, Jami xonalar soni 148 ta, yashash xonalar soni 115 ta.
                </p>
                <p>
                    Hozirgi kunda 292 nafar talabalar istiqomat qiladi. Shulardan 199 nafari qiz bolalar.
                </p>
                <h2 className='xxxx'>2-sonli Talabalar turar joyi</h2>
                <p>
                    Olmazor tumani Talabalar ko‘chasi 192-uy manzilida joylashgan. Bino 1960-yil qurilgan, 4 qavatdan iborat bo’lib, sig’imi 297 ta, Jami xonalar soni 144 ta, yashash xonalar soni 115 ta.
                </p>
                <p>
                    Hozirgi kunda 297 nafar talabalar istiqomat qiladi. Shulardan 54 nafari qiz bolalar.
                </p>
                <h2 className='xxxx'>3-sonli Talabalar turar joyi</h2>
                <p>
                    Toshkent shahar Uchtepa tumani 12 mavzey 67 А-uy manzilida joylashgan. Bino 2021-yil dekabr oyidan boshlab universitet talabalari uchun foydalanishga topshirilgan, 4 qavatdan iborat bo’lib, sig’imi 548 ta, jami xonalar soni 178 ta, yashash xonalar soni 137 ta.
                </p>
                <p>
                    Hozirgi kunda 529 nafar talabalar istiqomat qiladi. Shulardan 58 nafari qiz bolalar.
                </p>

            </div>
        </>
    );
};

export default DormitoryInfo;

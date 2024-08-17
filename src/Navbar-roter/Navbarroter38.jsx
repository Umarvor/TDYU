import React from 'react';
import { NavLink } from 'react-router-dom';
const XodimlarJadvali = () => {
    // Xodimlar ma'lumotlarini massiv shaklida o'z ichiga olamiz
    const xodimlar = [
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Xitoy' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Xitoy' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Xitoy' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Xitoy' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Xitoy' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Xitoy' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Uzbekiston' },
        { ism: 'Murod', familiya: 'O‘razaliev', davlat: 'Uzbekiston' },
        { ism: 'Baxtiyor', familiya: 'Yusupov', davlat: 'Uzbekiston' },
        { ism: 'Komil Ulug‘bek', familiya: 'Nurmirzayev', davlat: 'Xitoy' },

    ];

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
            <div>
                <h1 className='Project'>Professor-o‘qituvchi va xodimlar uchun stajirovkalar</h1>
                <h2 id='h3'>    2022-yilning may-avgust oylari davomida TDYUning pedagog-xodimlari malaka oshirish, tajriba almashish oʼquv kurslarida ishtirok etdi.

                    2022-yil davomida 10 nafar pedagog-xodim xorijga xizmat safarlari amalga oshirildi.</h2>
                <h2 id='h33'>Xodimlar Jadvali</h2>
                <table>
                    <thead>
                        <tr id='h3'>
                            <th className='tbody'>Ism</th>
                            <th className='tbody'>Familiya</th>
                            <th className='tbody'>Davlat</th>
                            <th className='tbody'>Strajirovka muddati</th>
                        </tr>
                    </thead>
                    <tbody id='h33' className='tbody'>
                        {xodimlar.map((xodim, index) => (
                            <tr key={index}>
                                <td className='tbody'>{xodim.ism}</td>
                                <td className='tbody'>{xodim.familiya}</td>
                                <td className='tbody'>{xodim.davlat}</td>
                                <td className='tbody'><h3>09.05.-17.06.2022</h3></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default XodimlarJadvali;

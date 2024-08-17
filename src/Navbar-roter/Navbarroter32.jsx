import React, { useEffect, useState } from 'react';
import './Navbar-roter1.css';
import { NavLink } from 'react-router-dom';
const DownloadTable = () => {
    const [users, setUsers] = useState([]);
    const [link, setLink] = useState('http://localhost:3000/React');


    useEffect(() => {
        const dataFetch = async () => {
            try {
                const req = await fetch(link)
                const data = await req.json()
                setUsers(data)
            } catch (error) {
                console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
            }
        }
        dataFetch()
    }, [link])
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
            <br /><br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />


                <NavLink to='/General-Pages/Qabul'><h3 className='H3'>Qabul</h3></NavLink>
                <NavLink to='/General-Pages/E_unversitety'><h3 className='H3'>E-unversitety</h3></NavLink>
                <NavLink to='/General-Pages/Ilm_fond'><h3 className='H3'>Ilm fond</h3></NavLink>

                <NavLink to='/General-Pages/Ilmiy_nashrlar'><h3 className='H3'>Ilmiy nashrlar</h3></NavLink>
                <NavLink to='/General-Pages/Ilmiy_kengashlar'><h3 className='H3'>Ilmiy kengashlar</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>




                <br />

            </article>
            <h2 id='h3'>Ilmiy fond – Toshkent davlat yuridik universiteti professor-o'qituvchilari, doktorantlari va mustaqil mustaqil izlanuvchilarining avtoreferatlari, monografiyalari kabi barcha ilmiy tadqiqotlarini to'plash va saqlash uchun mo'ljallangan huquqiy tadqiqot bazasidir.</h2>
            <br />
            <table border="3" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr id='h3'>
                        <th>ism</th>
                        <th>sarlavha</th>
                        <th>harakat</th>
                    </tr>
                </thead>
                <tbody id='h33'>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.title}</td>
                            <td ><a id='h33'  onClick={handleDownload} className='yuklash'>Yuklab olish</a></td>
                        </tr>
                    ))}
                </tbody>
                <br />
            </table>
        </>
    );
};

export default DownloadTable;

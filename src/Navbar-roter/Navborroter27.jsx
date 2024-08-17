import React from 'react'
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
function Navborroter27() {
    return (
        <>
            <br />
            <br /><br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <br />

               
               
                <NavLink to='/General-Pages/Talim_dasturlari'><h3 className='H3'>Ochiq eshiklar kuni</h3></NavLink>
                <NavLink to='/General-Pages/Bakalavriyatga_qabul'><h3 className='H3'>Bakalavriyatga qabul</h3></NavLink>
                <NavLink to='/General-Pages/Xorijiy_fuqarolar_qabuli'><h3 className='H3'>Xorijiy fuqarolar qabuli</h3></NavLink>
                <NavLink to='/General-Pages/Qabul_komissiyasi'><h3 className='H3'>Qabul komissiyasi bilan bog'lanish</h3></NavLink>
                <NavLink to='/General-Pages/Murojaat'><h3 className='H3'>Murojaat qilish</h3></NavLink>
                <NavLink to='/Genera-Pages/Qushma_talim_dasturlari'><h3 className='H3'>Qo'shma ta'lim dasturlari</h3></NavLink>

               
                <br />

            </article>
            <article>
                <h2 id='h3' className='Navbarroter26-h2'>Hurmatli abituriyentlar va ularning ota-onalari!</h2>
                <br />
                <h3 id='h33' className='Navbarroter27-h3'>2021/2022-o‘quv yili uchun Toshkent davlat yuridik universitetiga o‘qishga qabul qilish bilan bog‘liq maʼlumotlarni 71-233-66-36 (1064) raqami orqali olishingiz mumkin.</h3>
                <br />
            </article>
        </>
    )
}

export default Navborroter27
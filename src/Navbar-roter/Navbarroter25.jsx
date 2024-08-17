import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbarroter25() {
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
                <NavLink to='/General-Pages/Qushma_talim_dasturlari'><h3 className='H3'>Qo'shma ta'lim dasturlari</h3></NavLink>



                <br />

            </article>
            <div className='h3'>
                <article>
                    <h2 id='h3'>Kunduzgi ta'lim shakli</h2>
                    <br />
                    <h3>•Kundizgi ta'lim shakli bo'ycha qabul kvotasi</h3>
                    <h3>•Kunduzgi ta'lim shakliga o'qishga  qabul qilishda fanlar majmuasi va bahholash mezonlari</h3>
                    <h3>•Hujjatlar  ro'yxati va topshirish muddati</h3>
                    <h3>•Kunduzgi ta'lim shakliga test sinovlarini o'tkazish tartibi</h3>
                    <h3>•Kunduzgi ta'lim shaklida ta'lim olish uchun to'lov-kontrakt miqdori </h3>

                </article>
                <article>
                    <br />
                    <h2 id='h3'>Sirtqi ta'lim shakli</h2>
                    <br />
                    <h3>•Sirtqi ta'lim shakli bo'ycha qabul kvotasi</h3>
                    <h3>•Sirtqi ta'lim shakliga o'qishga  qabul qilishda fanlar majmuasi va bahholash mezonlari</h3>
                    <h3>•Hujjatlar  ro'yxati va topshirish muddati</h3>
                    <h3>•Sirtqi ta'lim shakliga test sinovlarini o'tkazish tartibi</h3>
                    <h3>•Sirtqi ta'lim shaklida ta'lim olish uchun to'lov-kontrakt miqdori </h3>


                </article>
            </div>
        </>
    )
}

export default Navbarroter25
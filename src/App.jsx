import React, { useState, useEffect, useTransition } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Loader from './loader/loader.jsx';
import Sliderlar from "./Sliderlar/ggg.jsx";
import Navbardom from './Navbardom/Navbardom.jsx';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';



import Top from './Navbar-roter/Top.jsx';
import Navbarroter24 from './Navbar-roter/Navbarroter24.jsx';
import Navbarroter25 from './Navbar-roter/Navbarroter25.jsx';
import Navbarroter26 from './Navbar-roter/Navbarroter26.jsx';
import Navborroter27 from './Navbar-roter/Navborroter27.jsx';
import Navbarroter28 from './Navbar-roter/Navbarroter28.jsx';
import Navbarroter29 from './Navbar-roter/Navbarroter29.jsx';
import Navbarroter30 from './Navbar-roter/Navbarroter30.jsx';
import Navbarroter31 from './Navbar-roter/Navbarroter31.jsx';
import Navbarroter32 from './Navbar-roter/Navbarroter32.jsx';
import Navbarroter34 from './Navbar-roter/Navbarroter34.jsx';
import Navbarroter33 from './Navbar-roter/Navbarroter33.jsx';
import Navbarroter35 from './Navbar-roter/Navbarroter35.jsx';
import Navbarroter36 from './Navbar-roter/Navbarroter36.jsx';
import Navbarroter37 from './Navbar-roter/Navbarroter37.jsx';
import Navbarroter38 from './Navbar-roter/Navbarroter38.jsx';
import Navbarroter39 from './Navbar-roter/Navbarroter39.jsx';
import Navbarroter40 from './Navbar-roter/Navbarroter40.jsx';
import Navbarroter41 from './Navbar-roter/Navbarroter40.jsx';
import Navbarroter42 from './Navbar-roter/Navbarroter42.jsx';
import Navbarroter43 from './Navbar-roter/Navbarroter43.jsx';
import Navbarroter44 from './Navbar-roter/Navbarroter44.jsx';
import Navbarroter46 from './Navbar-roter/Navbarroter46.jsx';
import Navbarroter47 from './Navbar-roter/Navbarroter47.jsx';
import Navbarroter48 from './Navbar-roter/Navbarroter48.jsx';
import Navbarroter51 from './Navbar-roter/Navbarroter51.jsx';
import Navbarroter50 from './Navbar-roter/Navbarroter50.jsx';
import Navbarroter52 from './Navbar-roter/Navbarroter52.jsx';
import Navbarroter53 from './Navbar-roter/Navbarroter53.jsx';
import Navbarroter54 from './Navbar-roter/Navbarroter54.jsx';
import Navbarroter55 from './Navbar-roter/Navbarroter55.jsx';
import Navbarroter56 from './Navbar-roter/Navbarroter56.jsx';
import Navbarroter57 from './Navbar-roter/Navbarroter57.jsx';
import Navbarroter58 from './Navbar-roter/Navbarroter58.jsx';
import Navbarroter59 from './Navbar-roter/Navbarroter59.jsx';
import Navbarroter60 from './Navbar-roter/Navbarroter60.jsx';
import Navbarroter61 from './Navbar-roter/Navbarroter61.jsx';
import Navbarroter62 from './Navbar-roter/navbarroter62.jsx';
import Navbarroter63 from './Navbar-roter/Navbarroter63.jsx';
import Navbarroter64 from './Navbar-roter/Navbarroter64.jsx';
import Navbarroter65 from './Navbar-roter/Navbarroter65.jsx';
import Navbarroter66 from './Navbar-roter/Navbarroter66.jsx';
import Navbarroter67 from './Navbar-roter/Navbarroter67.jsx';
import Navbarroter68 from './Navbar-roter/Navbarroter68.jsx';
import Navbarroter69 from './Navbar-roter/Navbarroter69.jsx';
import Navbarroter70 from './Navbar-roter/Navbarroter70.jsx';
import Navbarroter71 from './Navbar-roter/Navbarroter71.jsx';
import Navbarroter72 from './Navbar-roter/Navbarroter72.jsx';
import Navbarroter73 from './Navbar-roter/Navbarroter73.jsx';
import Navbarroter74 from './Navbar-roter/Navbarroter74.jsx';
import Navbarroter75 from './Navbar-roter/Navbarroter75.jsx';
import Navbarroter77 from './Navbar-roter/Navbarroter77.jsx';
import Navbarroter78 from './Navbar-roter/Navbarroter78.jsx';
import Navbarroter79 from './Navbar-roter/Navbarroter79.jsx';
import Navbarroter80 from './Navbar-roter/Navbarroter80.jsx';
import Navbarroter81 from './Navbar-roter/Navbarroter81.jsx';
import Navbarroter82 from './Navbar-roter/Navbarroter82.jsx';
import Navbarroter83 from './Navbar-roter/Navbarroter83.jsx';
import Navbarroter84 from './Navbar-roter/Navbarroter84.jsx';
import Navbarroter85 from './Navbar-roter/Navbarroter85.jsx';
import Navbbarroter86 from './Navbar-roter/Navbbarroter86.jsx';
import Navbarroter87 from './Navbar-roter/Navbarroter87.jsx';
import Navbarroter88 from './Navbar-roter/Navbarroter88.jsx';
import Navbarroter89 from './Navbar-roter/Navbarroter89.jsx';
import Navbarroter90 from './Navbar-roter/Navbarroter90.jsx';
import Navbarroter91 from './Navbar-roter/Navbarroter91.jsx';
import Navbarroter92 from './Navbar-roter/Navbarroter92.jsx';
import Navbarroter93 from './Navbar-roter/Navbarroter93.jsx';
import Navbarroter94 from './Navbar-roter/Navbarroter94.jsx';
import Navbarroter95 from './Navbar-roter/Navbarroter95.jsx';

import Nuqta from './Nuqta/Nuqta3.jsx'
import Swip2 from './Slid/Swip2.jsx'
import Oyna from './Oyna/Oyna.jsx'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbardom />}>
      <Route index element={<Sliderlar />} />
      <Route path='*' element={<Navbarroter64 />} />
      <Route path='/General-Pages/Talim_dasturlari' element={<Navbarroter24 />} />
      <Route path='/General-Pages/Bakalavriyatga_qabul' element={<Navbarroter25 />} />
      <Route path='/General-Pages/Xorijiy_fuqarolar_qabuli' element={<Navbarroter26 />} />
      <Route path='/General-Pages/Qabul_komissiyasi' element={<Navborroter27 />} />
      <Route path='/General-Pages/Murojaat' element={< Navbarroter28 />} />
      <Route path='/General-Pages/Qushma_talim_dasturlari' element={<Navbarroter29 />} />
      <Route path='/General-Pages/Qabul' element={<Navbarroter30 />} />
      <Route path='/General-Pages/E_unversitety' element={<Navbarroter31 />} />
      <Route path='/General-Pages/Ilm_fond' element={<Navbarroter32 />} />
      <Route path='/General-Pages/Ilmiy_nashrlar' element={<Navbarroter34 />} />
      <Route path='/General-Pages/Ilmiy_nashrlar/index.Ilmiy_nashrlar' element={<Navbarroter33 />} />
      <Route path='/General-Pages/Ilmiy_kengashlar' element={<Navbarroter35 />} />
      <Route path='/uquvchilar_ruyxati' element={<Navbarroter36 />} />
      <Route path='/General-Pages/Kasaba' element={<Navbarroter37 />} />
      <Route path='/General-Pages/Murojaat_qilish' element={<Navbarroter38 />} />
      <Route path='/General-Pages/Xalqaro_hamkorlik' element={<Navbarroter39 />} />
      <Route path='/General-Pages/Xalqaro_OTMlar' element={<Navbarroter40 />} />
      <Route path='/General-Pages/Xalqaro_Tashkilotlar' element={<Navbarroter41 />} />
      <Route path='/General-Pages/Akademik_mobillik' element={<Navbarroter42 />} />
      <Route path='/General-Pages/Unversitet' element={<Navbarroter43 />} />
      <Route path='/General-Pages/Talim' element={<Navbarroter44 />} />
      <Route path='/General-Pages/Ilmiy_faolyat' element={<Navbarroter46 />} />
      <Route path='/General-Pages/Yosh_olimlar_kengashi' element={<Navbarroter47 />} />
      <Route path='/General-Pages/Davlat_grantlar' element={<Navbarroter48 />} />
      <Route path='/General-Pages/Ilmiy_nashrlar/index..Ilmiy_nashrlar' element={<Navbarroter50 />} />
      <Route path='/General-Pages/Ilmiy_nashrlarr' element={<Navbarroter51 />} />
      <Route path='/General-Pages/xalqaro_faolyatlar' element={<Navbarroter52 />} />
      <Route path='/General-Pages/xalqaro_hamkorliklar' element={<Navbarroter53 />} />
      <Route path='/General-Pages/talabalar_turar_jooylari' element={<Navbarroter54 />} />
      <Route path='/General-Pages/Kitob_dukoni' element={<Navbarroter55 />} />
      <Route path='/General-Pages/Ovqatlanish_joylari' element={<Navbarroter56 />} />
      <Route path='/General-Pages/Stipendiyalar' element={<Navbarroter57 />} />
      <Route path='/General-Pages/Qabul_jarayoniga_oid_elonlar' element={<Navbarroter58 />} />
      <Route path='/General-Pages/Talabalarni_uqishini_kuchirish' element={<Navbarroter59 />} />
      <Route path='/General-Pages/uqishini_kuchirish' element={<Navbarroter60 />} />
      <Route path='/General-Pages/Qushmaa_talim_dasturlari' element={<Navbarroter61 />} />
      <Route path='/General-Pages/2022/2023-o‘quv-yili-uchun qo‘shma-ta’lim-dasturlariga-o‘qishga-qabul-qilish-bo‘yicha-MA’LUMOT' element={<Navbarroter62 />} />
      <Route path='/General-Pages/Maktab_oquvchilari' element={<Navbarroter63 />} />
      <Route path='/General-Pages/Kop_savollar' element={<Navbarroter65 />} />
      <Route path='/General-Pages/Intekrativ_xizmat' element={<Navbarroter66 />} />
      <Route path='/General-Pages/Qabul_komissiyasii' element={<Navbarroter67 />} />
      <Route path='/General-Pages/Kutubxona' element={<Navbarroter68 />} />
      <Route path='/General-Pages/Masofaviy_talim' element={<Navbarroter69 />} />
      <Route path='/General-Pages/Rijolanish_yulida_hamkorlik' element={<Navbarroter70 />} />
      <Route path='/Yangiliklar' element={< Swip2 />} />
      <Route path='/Oyna' element={< Oyna />} />
      
      <Route path='/General-Pages/Yosh_olimlar' element={<Navbarroter71 />} />
      <Route path='/General-Pages/Elektron_kutubxona' element={<Navbarroter72 />} />
      <Route path='/General-Pages/masofaviy_talimm' element={<Navbarroter73 />} />
      <Route path='/General-Pages/Mashgulotlar_jadvali' element={<Navbarroter74 />} />
      <Route path='/General-Pages/Xoriji_talabalarga' element={<Navbarroter75 />} />
      <Route path='/General-Pages/Stipendiyalar_va_garntlar' element={<Navbarroter77 />} />
      <Route path='/General-Pages/Talabalarga_xizmat_korsatish' element={<Navbarroter78 />} />
      <Route path='/General-Pages/Yuridik_klinika' element={<Navbarroter79 />} />
      <Route path='/Genera-Pages/Street' element={<Navbarroter80 />} />
      <Route path='/General-Pages/Akademik_mobilik' element={<Navbarroter81 />} />
      <Route path='/General-Pages/Xorijiy_profetsorlar' element={<Navbarroter82 />} />
      <Route path='/General-Pages/Treninglar' element={<Navbarroter83 />} />
      <Route path='/General-Pages/Klub' element={<Navbarroter84 />} />
      <Route path='/General-Pages/Korupsiyaga_qarshikurash_usullari' element={<Navbarroter85 />} />
      <Route path='Uqituvchi' element={<Navbbarroter86 />} >
        <Route path='Achilova' element={<Navbarroter87 />} />
        <Route path='Abzalova' element={<Navbarroter88 />} />
        <Route path='Xayrilinna' element={<Navbarroter89 />} />
        <Route path='Mahmudjon' element={<Navbarroter90 />} />
        <Route path='Salobar' element={<Navbarroter91 />} />
        <Route path='Abdurahim' element={<Navbarroter92 />} />
        <Route path='Nodira' element={<Navbarroter93 />} />
        <Route path='Gulhayo' element={<Navbarroter94 />} />
        <Route path='Bahodir' element={<Navbarroter95 />} />
      </Route>
      <Route path='/media' element={<Nuqta />} />
    </Route>
  )
);

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isPending]);

  const handleNavigation = () => {
    startTransition(() => {
     
    });
  };

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div className='container'>
          <header className="App-header">
            <Top />
         
             <RouterProvider router={routes}/>
          </header>
        </div>
      </SignedIn>
    </>
  );
};

export default App;

import './Slider.css'
import Img from '../img/home-button.png'
import Imgg from '../img/books.png'
import Imggg from '../img/people.png'
import Imgggg from '../img/settings.png'
import Imggggg from '../img/network.png'
import Imgggggg from '../img/question-mark.png'
import { NavLink } from 'react-router-dom'
function Slider() {
  return (
    <>

      <div className="box21">
        <NavLink to='/General-Pages/Masofaviy_talim'><article className="box22">
          <img className='box15' src={Img} alt="" />
          <h3 id='h3'>Masofaviy ta'lim</h3>
        </article></NavLink>
        <NavLink to='/General-Pages/Kutubxona'><article className="box22">
          <img className='box16' src={Imgg} alt="" />
          <h3 id='h3' className='box23'>Kutubxona</h3>
        </article></NavLink>
        <NavLink to='/General-Pages/Qabul_komissiyasii'><article className="box22">
          <img className='box17' src={Imggg} alt="" />
          <h3 id='h3' className='box23'>Qabul komissiyasi</h3>
        </article></NavLink>
        <NavLink to='/General-Pages/Intekrativ_xizmat'><article className="box22">
          <img className='box18' src={Imgggg} alt="" />
          <h3 id='h3' className='box23'>Intekrativ xizmatlar</h3>
        </article></NavLink>


        <NavLink to='/General-Pages/E_unversitety'><article className="box22">
          <img className='box20' src={Imggggg} alt="" />


          <h3 id='h3' className='box23'>Elektron unversitet</h3>
        </article></NavLink>
        <NavLink to='/General-Pages/Kop_savollar'> <article className="box22">
          <img className='box19' src={Imgggggg} alt="" />
          <h3 id='h3' className='box23'>Ko'p so'raladigan savollar</h3>

        </article> </NavLink>

      </div>
    </>
  )

}
export default Slider
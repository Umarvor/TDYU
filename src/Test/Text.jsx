import { Fragment } from "react"
import './Text.css'
import Img2 from '../Img2/TDYU_uz_white.png'
import Img22 from '../Img2/phone-call.png'
import Img222 from '../Img2/fax.png'
import Img2222 from '../Img2/email.png'
import Img22222 from '../Img2/google-maps.png'
import Twitter from '../img/twitter.png'
import Telegram from '../img/telegram.png'
import Youtube from '../img/youtube.png'
import Instagram from '../img/instagram.png'
import Facebook from '../img/icons8-facebook-48.png'
function FirstComponent() {
  return (
    <Fragment>
      <div className="Test">
        <div className="Test-1">
          <div className="Test-2">
            <img className="boxTest" src={Img2} alt="" />
            <article className="boxh3">
              <h3>Toshkent davlat yuridik universiteti (TDYU) yuridik kadrlarni tayyorlash bo‘yicha O‘zbekistonda tayanch  oliy o‘quv va ilmiy-uslubiy muassasa hisoblanadi.</h3>
            </article>
          </div>
          <div className="Test-3">
            <h2 id="h33" className="sx">Aloqa</h2>
            <h4>_____________________________________________</h4>
            <br />
            <article className="Test-art1">
              <img className="Test-art2" src={Img22} alt="" />
              <a className="aa" href="tel:+998 77-027-03-57"><h3 className="Test-h31"> Ishonch telefoni:  +998 77-027-03-57</h3></a>

            </article>
            <article className="Test-art3">
              <img className="Test-art4" src={Img222} alt="" />
              <a className="aa" href="tel:+998 71-770-22-42"><h3 className="Test-h32">Faks:  +998 71-770-22-42</h3></a>
            </article>
            <article className="Test-art5">
              <img className="Test-art6" src={Img2222} alt="" />
              <h3 className="Test-h33">e-mail:tysul@.uz</h3>
            </article>
            <article className="Test-art7">
              <img className="Test-art8" src={Img22222} alt="" />
              <h3 className="Test-h34">Toshket shahar,sayilgoh ko'ch.., 35uy</h3>

            </article>
            <article className="Footer" >

              <a href="https://twitter.com/tsulofficial" target="_blank" > <img className="Footer1" src={Twitter} alt="" /></a>
              <a href="https://t.me/tsulofficial" target="_blank" ><img className="Footer1" src={Telegram} alt="" /></a>
              <a href="https://www.youtube.com/channel/UCTAhGEQDYohjqmDAsD9yRBg" target="_blank" ><img className="Footer1" src={Youtube} alt="" /></a>

              <a href="https://www.instagram.com/tsulofficial" target="_blank" ><img className="Footer1" src={Instagram} alt="" /></a>
              <a href="https://www.fb.com/tsulofficial" target="_blank" ><img className="Footer1" src={Facebook} alt="" /></a>

            </article>

          </div>
          <div className="local">
            <h2 className="sx" id="h33">Joylashuv</h2>
            <h4>__________________________________________________</h4>
            <br />
            <iframe width="100%" height="250" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tashkent%20yuridik%20unversiteti+(My%20Business%20Name)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a>
            </iframe>

            <a id="h33" href="https://iqtidoracademy.uz/" target="_blank"><p>©TDYU saytini 7 oy imtihon uchun yozildi sayt yozuvchi Shahriyorov Shohinur Iqtidor IT №1</p></a>
          </div>

        </div>


      </div>

    </Fragment>
  )
}
export default FirstComponent
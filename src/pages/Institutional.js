import Header from "../components/Header"
import "./Institutional.css"
import { aboutText, whoIsText } from "../helpers/messages"
import teamImage from "../assets/equipe-simac.jpg"

import naka from "../assets/founders/Naka.jpg"
import fugita from "../assets/founders/Fugita.jpg"
import joao from "../assets/founders/Joao.jpg"

import nakadocinhos from "../assets/sites/nakadocinhos.png"
import sextaholdem from "../assets/sites/sextaholdem.png"

import whatsapp from "../assets/socialMedias/whatsapp.png"
import linkedin from "../assets/socialMedias/linkedin.png"
import gmail from "../assets/socialMedias/gmail.png"

import Employer from "../components/Employer"
import Asset from "../components/Asset"
import SocialMedia from "../components/SocialMedia"

function Institutional() {
  return (
    <div>
      <div className="about">
        <Header></Header>
        
      </div>

      <div className="whoIs">
        <img src={teamImage} className="image"></img>
        <div className="textArea">
          <div className="text">
            <h1>Quem somos?</h1>
            <p>{whoIsText}</p>
          </div>
          <div className="founders">
            <Employer
              image={fugita}
              name={"Mateus Fugita"}
              office={"CTO"}
            ></Employer>
            <Employer
              image={naka}
              name={"Lucas Nakagawa"}
              office={"CEO"}
            ></Employer>
            <Employer
              image={joao}
              name={"João Paulo"}
              office={"CIO"}
            ></Employer>
          </div>
        </div>
      </div>

      <div className="assets">
        <h1>
          <strong>Nosso Portfólio</strong>
        </h1>
        <div className="cards">
          <Asset
            image={nakadocinhos}
            title={"Nakadocinhos"}
            link={"https://www.nakadocinhos.com.br"}
          ></Asset>
          <Asset
            image={sextaholdem}
            title={"Sexta Hold'em"}
            link={"https://www.sextaholdem.com.br"}
          ></Asset>
        </div>
      </div>

      <footer>
        <p>Contato</p>
        <div className="contact">
          <SocialMedia
            image={linkedin}
            link={"https://www.linkedin.com/in/lucas-nakagawa/"}
          ></SocialMedia>
          <SocialMedia
            image={whatsapp}
            link={"https://wa.me/5511998877717"}
          ></SocialMedia>
          <SocialMedia image={gmail}></SocialMedia>
        </div>
      </footer>
    </div>
  )
}

export default Institutional

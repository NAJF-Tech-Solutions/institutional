import Header from "../components/Header"
import "./Institutional.css"
import {
  whoIsText,
  descriptionNakadocinhos,
  descriptionSextaHoldem,
} from "../helpers/messages"
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
      <div id="about" className="about">
        <Header></Header>
        <div id="slogan" className="slogan">
          <h1>Sistemas de Gestão</h1>
          <h1>Criação de Sites</h1>
          <h1>Soluções de TI</h1>
        </div>
        <div className="seeMore">
          <p>
            Nós acreditamos que qualidade e transparência são a base para um negócio
            saudável.
          </p>
          <a href="#whoIs">
            <strong> Conhecer a NAJF</strong>
          </a>
        </div>
      </div>

      <div id="whoIs" className="whoIs">
        <img src={teamImage} className="image" alt="Imagem da Premiação"></img>
        <div className="textArea">
          <div className="text">
            <h1>Quem Somos?</h1>
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

      <div id="assets" className="assets">
        <div className="description">
          <h1>
            <strong>Nosso Portfólio</strong>
          </h1>
          <p>
            Nós desenvolvemos sistemas de gestão, automação, plataformas, sites,
            aplicativos e o que mais seu negócio precisar!
            <br />
            Confira nossos principais projetos abaixo.
          </p>
        </div>
        <div className="cards">
          <Asset
            image={nakadocinhos}
            title={"Nakadocinhos"}
            description={descriptionNakadocinhos}
            link={"https://www.nakadocinhos.com.br"}
          ></Asset>
          <Asset
            image={sextaholdem}
            title={"Sexta Hold'em"}
            description={descriptionSextaHoldem}
            link={"https://www.sextaholdem.com.br"}
          ></Asset>
        </div>
      </div>

      <footer id="contact">
        <p>
          <strong>Entre em contato conosco!</strong>
        </p>
        <div className="contact">
          <div className="cellphones">
            <div className="item">
              <SocialMedia
                image={whatsapp}
                link={"https://wa.me/5511998877717"}
              ></SocialMedia>
              <p>(11) 99887-7717</p>
              <p>Lucas Nakagawa</p>
            </div>

            <div className="item">
              <SocialMedia
                image={whatsapp}
                link={"https://wa.me/5511988742687"}
              ></SocialMedia>
              <p>(11) 98874-2687</p>
              <p>Mateus Fugita</p>
            </div>

            <div className="item">
              <SocialMedia
                image={whatsapp}
                link={"https://wa.me/5511967535340"}
              ></SocialMedia>
              <p>(11) 96753-5340</p>
              <p>João Paulo</p>
            </div>
          </div>
          <div className="socialMedias">
            <div className="item">
              <SocialMedia
                image={linkedin}
                link={"https://www.linkedin.com/company/najf-tech-solutions"}
              ></SocialMedia>
              <p>linkedin.com/company/najf-tech-solutions</p>
            </div>
            <div className="item">
              <SocialMedia image={gmail}></SocialMedia>
              <p>najf@gmail.com</p>
            </div>
            <h3 className="copyright">
              © DESENVOLVIDO POR NAJF TECH SOLUTIONS
            </h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Institutional

import Header from "../components/Header"
import "./Institutional.css"
import { whoIsText } from "../helpers/messages"
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
        <img src={teamImage} className="image" alt="Imagem da Premiação"></img>
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
        <div className="description">
          <h1>
            <strong>Nosso Portfólio</strong>
          </h1>
          <p>
            Nós desenvolvemos sistemas de gestão, automação, plataformas, sites,
            aplicativos e o que seu negócio precisar!
            <br />
            Confira nossos principais projetos abaixo.
          </p>
        </div>
        <div className="cards">
          <Asset
            image={nakadocinhos}
            title={"Nakadocinhos"}
            description={
              "Um cardápio digital para os deliciosos doces e bolos personalizados do Nakadocinhos, facilitando a divulgação da marca e o primeiro contato com o cliente."
            }
            link={"https://www.nakadocinhos.com.br"}
          ></Asset>
          <Asset
            image={sextaholdem}
            title={"Sexta Hold'em"}
            description={
              "Uma plataforma online para um Home Game de Poker, com avisos, rankings, estapas, fotos, permitindo a divulgação do local. O Administrador da plataforma pode gerenciar todos os dados, facilitando a gestão."
            }
            link={"https://www.sextaholdem.com.br"}
          ></Asset>
        </div>
      </div>

      <footer>
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
                link={"https://www.linkedin.com/in/lucas-nakagawa/"}
              ></SocialMedia>
              <p>linkedin.com/in/lucas-nakagawa/</p>
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

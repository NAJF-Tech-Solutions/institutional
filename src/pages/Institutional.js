import { useState, useEffect } from "react"
import { Asset, Employer, Header, Loading, SocialMedia } from "../components"

import teamImage from "../assets/equipe-simac.jpg"
import whatsapp from "../assets/socialMedias/whatsapp.png"
import linkedin from "../assets/socialMedias/linkedin.png"
import gmail from "../assets/socialMedias/gmail.png"

import { whoIsText } from "../helpers/messages"
import { contactList } from "../helpers/socialMedia"
import { assetsList } from "../helpers/assets"
import { founders } from "../helpers/founders"

import "./Institutional.css"

function Institutional() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <div>
      {loading && <Loading />}
      <div id="home" className="about">
        <Header></Header>
        <div id="slogan" className="slogan">
          <h1>Sistemas de Gestão</h1>
          <h1>Criação de Sites</h1>
          <h1>Soluções de TI</h1>
        </div>
        <div className="seeMore">
          <p>
            Nós acreditamos que qualidade e transparência são a base para um
            negócio saudável.
          </p>
          <a href="#sobre">
            <strong> Conhecer a NAJF</strong>
          </a>
        </div>
      </div>

      <div id="sobre" className="whoIs">
        <img
          src={teamImage}
          className="image"
          alt="Imagem da Premiação"
          loading="lazy"
        ></img>
        <div className="textArea">
          <div className="text">
            <h1>Quem Somos?</h1>
            <p>{whoIsText}</p>
          </div>
          <div className="founders">
            {founders.map(({ name, role, image }) => (
              <Employer image={image} name={name} office={role}></Employer>
            ))}
          </div>
        </div>
      </div>

      <div id="portfolio" className="assets">
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
          {assetsList.map(({ image, title, description, link }) => (
            <Asset
              key={title}
              image={image}
              title={title}
              description={description}
              link={link}
            ></Asset>
          ))}
        </div>
      </div>

      <footer id="contato">
        <div>
          <h2>Entre em contato conosco!</h2>
        </div>
        <div className="contact">
          <div className="cellphones">
            {contactList.map(({ name, phoneNumber, whatsAppLink }) => (
              <div className="item" key={phoneNumber}>
                <SocialMedia image={whatsapp} link={whatsAppLink}></SocialMedia>
                <p>{phoneNumber}</p>
                <p>{name}</p>
              </div>
            ))}
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
          </div>
        </div>
        <div className="copyright">
          <strong className="copyright">
            © DESENVOLVIDO POR NAJF TECH SOLUTIONS
          </strong>
        </div>
      </footer>
    </div>
  )
}

export default Institutional

import AboutImage from '../../assets/about2.jpg'
import StyleGuide from '../../assets/Outfitly_Style_Guide.pdf'
import { IoCloudDownloadOutline } from "react-icons/io5";
import Card from '../../components/Card'
import data from './data'
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__picture">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Us</h2>
          <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
          </div>
          <p>
            Outfitly was created to inspire confidence through style. We believe 
            that fashion should be more than just trends — it's a way to express who 
            you are every day. By combining creativity, technology, and an eye for 
            aesthetics, Outfitly brings outfit inspiration directly to your screen, 
            helping you explore new ideas and rediscover your unique sense of style.
          </p>
          <p>
            Whether you're dressing for an important meeting, a casual day out, or a 
            special occasion, Outfitly is here to guide your choices with simplicity 
            and inspiration. Our team is passionate about curating looks that are not 
            only beautiful but also wearable and real — because great style should feel 
            effortless. Click the button below to download your free Outfitly Style Guide 
            and start exploring new outfit ideas today.
          </p>
          <a href={StyleGuide} download className='btn primary'>Download Free Style Guide <IoCloudDownloadOutline /></a>
        </div>
      </div>
    </section>
  )
}

export default About
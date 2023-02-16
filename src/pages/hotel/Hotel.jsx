import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://magazineprestige.com/IMG/jpg/nov2018_900x600_83.jpg"
    },
    {
      src: "https://opt-765163.ssl.1c-bitrix-cdn.ru/upload/iblock/b00/18610d1dea21afb7dc41d8dba8a44a04.jpg?154325958074443"
    },
    {
      src: "https://tour-center-msk.ru/public/sites/pages/162/45119.jpg"
    },
    {
      src: "https://i9.photo.2gis.com/images/branch/0/30258560076617798_1c89.jpg"
    },
    {
      src: "https://restconcept.ru/upload/iblock/a90/restoran-s-otkrytoy-kuhney1.jpg"
    },
    {
      src: "https://www.maldives.ru/upload/iblock/9ea/9eaf588d31df89f2578c271d9affba91.jpg"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow left" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow right" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 from center
          </span>
          <span className="hotelPriceHignLight">
            Book a stay over $114 a this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="hotels" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere, labore laborum quod ut nisi qui! Quisquam voluptates dolores necessitatibus illo doloribus dicta harum iure ipsum alias. Beatae, accusamus nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque eaque aut a dignissimos repellat odio sunt in fugit! Consectetur, sunt! Fugit voluptatem culpa sint provident, nostrum odio eum similique?</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real of Krakow, this property has an excellent location score OF 9.8!</span>
              <h2>
                <b>945$</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://i.pinimg.com/originals/f5/42/57/f54257789ea546f251b279bdfc318679.jpg" alt="Dublin" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://s1.1zoom.ru/big7/474/Mountains_Grasslands_354282.jpg" alt="Reno" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://abc-decor.com/img/gallery/8/thumbs/thumb_l_0407.jpg" alt="Austin" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
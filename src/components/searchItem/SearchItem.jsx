import "./searchitem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://www.multitour.ru/files/imgs/4e5a09d6ec2d47b60414b944dcb71a63c1e80582.jpeg" alt="hotels" className="searchItemImg" />
      <div className="searchItemDesk">
        <h1 className="searchItemTitle">Tower Street Apartments</h1>
        <span className="searchItemDistance">500m from center</span>
        <span className="searchItemTaxi">Free airport taxi</span>
        <span className="searchItemSubtitle">Studio Apartment with Air conditioning</span>
        <span className="searchItemFeatures">Entire studio • 1 bathroom • 21m² 1 full bed </span>
        <span className="searchItemCancel">Free cancellation</span>
        <span className="searchItemCancelSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>

      <div className="searchItemDetalis">
        <div className="searchItemDetalisRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItemDetalisText">
          <span className="searchItemDetalisPrice">$123</span>
          <span className="searchItemDetalisTaxi">Include taxis and fees</span>
          <button className="searchItemDetalisBtn">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
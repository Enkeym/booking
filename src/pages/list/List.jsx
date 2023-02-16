import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange onChange={item => setDate([item.selection])} minDate={new Date} ranges={date} />}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listSearchOptions">
                <div className="listSearchOptionsItem">
                  <span className="listSearchOptionsText">Min price <small>per night</small></span>
                  <input type="number" className="listSearchOptionsInput" />
                </div>
                <div className="listSearchOptionsItem">
                  <span className="listSearchOptionsText">Max price <small>per night</small></span>
                  <input type="number" className="listSearchOptionsInput" />
                </div>
                <div className="listSearchOptionsItem">
                  <span className="listSearchOptionsText">Adult</span>
                  <input placeholder={options.adult} min={1} type="number" className="listSearchOptionsInput" />
                </div>
                <div className="listSearchOptionsItem">
                  <span className="listSearchOptionsText">Children</span>
                  <input placeholder={options.children} min={0} type="number" className="listSearchOptionsInput" />
                </div>
                <div className="listSearchOptionsItem">
                  <span className="listSearchOptionsText">Room</span>
                  <input placeholder={options.room} min={1} type="number" className="listSearchOptionsInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
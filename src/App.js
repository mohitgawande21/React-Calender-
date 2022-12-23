import Header from './Header/Header'
import { useEffect, useRef, useState } from 'react';
import CalenerPage from './Header/CalenderPage'

function App() {
  const InputDate = useRef('')
  const [date, setDate] = useState((new Date()));
  const localStorageHolidays = JSON.parse(localStorage.getItem('Holidays'))
  let length = localStorageHolidays ? Object.keys(localStorageHolidays).length : 0

  // Holiday state is to manage Array for Holidays added
  const [Holidays, setHolidays] = useState(length > 0 ? localStorageHolidays : { [date.toDateString()]: ['Today is Default Holiday'] });

  //clickedHoliday state for show the add holiday popup
  const [clickedHoliday, setClickedHoliday] = useState(false)


  const onClickAddHoliday = () => {
    setClickedHoliday(true)
  }


  // AddHoliday function is to update the Holiday Array
  const AddHoliday = (e) => {
    setHolidays(
      { ...Holidays, [date.toDateString()]: Holidays[date.toDateString()] ? [...Holidays[date.toDateString()], InputDate.current.value] : [InputDate.current.value] }
    )
    localStorage.setItem('Holidays', JSON.stringify({ ...Holidays, [date.toDateString()]: Holidays[date.toDateString()] ? [...Holidays[date.toDateString()], InputDate.current.value] : [InputDate.current.value] }
    ))
    setClickedHoliday(false)
  }

  const Overlay = {
    position: "fixed",
    width: "100%",
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '1',
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <>
      <div className="App">
        <Header onClickAddHoliday={onClickAddHoliday} />
        <CalenerPage onClickAddHoliday={onClickAddHoliday} setDate={setDate} dateS={date} Holidays={Holidays} setHolidays={setHolidays} />
      </div>
      {  clickedHoliday ? <div style={Overlay} className=' d-inline-flex justify-content-center align-item-center '>
        <div className='bg-white p-4 mx-3 '>
          <div className='d-flex justify-content-center flex-column align-item-center'>
            <h5 className=''>Add Event Details</h5>
            <label>Event Name</label>
            <input ref={InputDate} type="text" className='' name="date" placeholder='Name' />
          </div>
          <div className='d-flex  justify-content-center mx-3 p-2' >
            <button onClick={() => setClickedHoliday(false)} type="submit" className=" mx-3 btn btn-primary mx-2 bg-success rounded-0"  >Cancle</button>
            <button onClick={AddHoliday} className=" mx-3 btn btn-primary mx-2 bg-success rounded-0"  >Add</button>
          </div>
        </div >
      </div> : ''}
    </>
  );
}

export default App;

import Header from './Header/Header'
import { useRef, useState } from 'react';
import CalenerPage from './Header/CalenderPage'

function App() {

  const InputDate = useRef('')
  const [date, setDate] = useState(new Date());

  const [Holidays, setHolidays] = useState({ [date]: [] });

  const [clickedHoliday, setClickedHoliday] = useState(false)

  const onClickAddHoliday = () => {
    setClickedHoliday(true)

  }



  const onSelectHolidayDate = (date) => {
    setHolidays({ ...Holidays, [date]: [] })
  }

  const AddHoliday = (e) => {
    e.preventDefault()
    let arr = Object.keys(Holidays).length
    for (let i = 1; i <= arr; i++) {
      setHolidays({ ...Holidays, [date]: [...Holidays[date], i] })
    }
    setClickedHoliday(false)
    console.log(InputDate.current.value)
    console.log(Object.keys(Holidays).length)
    console.log(Holidays)
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
        <CalenerPage onClickAddHoliday={onClickAddHoliday} onSelectHolidayDate={onSelectHolidayDate} setDate={setDate} date={date} Holidays={Holidays} setHolidays={setHolidays} />
      </div>
      {  clickedHoliday ? <div style={Overlay} className=' d-inline-flex justify-content-center align-item-center '>
        <div className='bg-white p-4 mx-3 '>
          <div className='d-flex justify-content-center flex-column align-item-center'>
            <h5 className=''>Add Employee Details</h5>
            <label>Name</label>
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

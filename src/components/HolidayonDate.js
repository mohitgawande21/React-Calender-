import React from 'react'

export default function HolidayonDate({ onClickAddHoliday, Holidays, dateS, setShowHoliday }) {

    const setClickedHoliday = () => {
        setShowHoliday(false)
    }
    const onClickedHolidayAdd = () => {
        setShowHoliday(false)
        onClickAddHoliday()
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
        <div style={Overlay} >
            <p className='my-3 bg-white p-4 mx-3'>
                <h3 className='bold'>Holidays for Selected Date</h3>
                {Holidays[dateS.toDateString()] ? Holidays[dateS.toDateString()].map((item) => {
                    return <li><span>{item}</span></li>
                }) : <h4 className='text-center text-warning'>No Holiday Added For This Date</h4>}
                <button onClick={setClickedHoliday} type="submit" className=" my-1 btn btn-primary  bg-success rounded-0"  >Cancle</button>
                <button onClick={onClickedHolidayAdd} className=" mx-3 btn btn-primary mx-2 bg-success rounded-0"  >Add Holiday</button>
            </p>
        </div>
    )
}


import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holiday from './Holiday'
import HolidayonDate from './HolidayonDate';
export default function CalenerPage({  onClickAddHoliday, Holidays, setHolidays, dateS, setDate }) {

    const [showHoliday, setShowHoliday] = useState(false)
    const onClickDate = () => {
        setShowHoliday(true)
    }
    return (
        <div className='app d-flex  justify-content-center align-items-center'>
            <div className='calendar-container my-3'>
                <p>Please Select Any Date to add Holiday then click on Add Holiday Button</p>
                <Calendar onClickDay={onClickDate} className='w-100' onChange={setDate} value={dateS} tileContent={
                    ({ date, view }) => {
                        return Object.keys(Holidays).includes(date.toDateString()) && (
                            Holidays[date.toDateString()].map((item, index) => {
                                return <Holiday />
                            })
                        )
                    }

                }>
                </Calendar>

                {showHoliday ? <HolidayonDate onClickAddHoliday={onClickAddHoliday} Holidays={Holidays} dateS={dateS} setShowHoliday={setShowHoliday} /> : ''}

                <h3>Total Holiday List</h3>
                {
                    Object.entries(Holidays).map((item) => {
                        return item.map((value, index) => {
                            return item.length > index + 1 ? <p>Day :{item[0]} <li>{'' + item[index + 1]}</li></p> : ''
                        })
                    })
                }
            </div>

        </div>
    );
}


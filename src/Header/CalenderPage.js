
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holiday from './Holiday'
export default function CalenerPage({ onClickAddHoliday, Holidays, setHolidays, dateS, setDate }) {

    return (
        <div className='app d-flex  justify-content-center align-items-center'>
            <div className='calendar-container my-3'>
                {/* <Calendar onChange={setDate} value={date} tileContent={Holidays[date.toDateString()] ? Holidays[date.toDateString()].map(() => date.toDateString() !== <Holiday />) : ''}>
                </Calendar> */}

                {/* <Calendar onChange={setDate} value={date} tileContent={({ date1, view }) => {
                console.log(date1, view)
                return Holidays[date.toDateString()] ? Holidays[date.toDateString()].filter((item) => {
                    return date1.toDateString() != item && <Holiday />
                }) : ''
            }}>
            </Calendar> */}

                <Calendar onChange={setDate} value={dateS} tileContent={
                    ({ date, view }) => {
                        console.log(date.toDateString() == dateS.toDateString())

                        return date.toDateString() == dateS.toDateString() && <Holiday />
                    }

                }>
                </Calendar>

                <p className=''>
                    <h3 className='bold'>Holidays for Selected Date</h3>
                    {Holidays[dateS.toDateString()] ? Holidays[dateS.toDateString()].map((item) => {
                        return <li><span>{item}</span></li>
                    }) : <h4 className='text-center'>No Holiday added</h4>}
                </p>
            </div>
        </div>
    );
}


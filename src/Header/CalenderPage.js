
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holiday from './Holiday'
export default function CalenerPage({ onClickAddHoliday, Holidays, setHolidays, dateS, setDate }) {
    return (
        <div className='app d-flex  justify-content-center align-items-center'>
            <div className='calendar-container my-3'>
                <p>Please Select Any Date to add Holiday then click on Add Holiday Button</p>
                <Calendar className='w-100' onChange={setDate} value={dateS} tileContent={
                    ({ date, view }) => {
                        return (
                            Holidays[dateS.toDateString()] && Holidays[dateS.toDateString()].map((item) => {
                                return date.toDateString() == dateS.toDateString() && <Holiday />
                            })
                        )
                    }

                }>
                </Calendar>

                <p className='my-3'>
                    <h3 className='bold'>Holidays for Selected Date</h3>
                    {Holidays[dateS.toDateString()] ? Holidays[dateS.toDateString()].map((item) => {
                        return <li><span>{item}</span></li>
                    }) : <h4 className='text-center text-warning'>No Holiday Added For This Date</h4>}
                </p>

                <h3>Total Holiday List</h3>
                {
                    Object.entries(Holidays).map((item) => {
                        return item.map((value, index) => {
                            return item.length > index + 1 ? <p>Day :{item[0]} <li>{'' + item[index + 1]  }</li></p> : ''
                        })
                    })
                }
            </div>

        </div>
    );
}


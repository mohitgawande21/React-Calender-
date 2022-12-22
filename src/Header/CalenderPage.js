
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holiday from './Holiday'
export default function CalenerPage({ onClickAddHoliday, Holidays, setHolidays, date, setDate }) {

    return (
        <div className='app d-flex  justify-content-center align-items-center'>
            <div className='calendar-container my-3'>
                <Calendar  onChange={setDate} value={date} tileContent={Holidays[date.toDateString()] ? Holidays[date.toDateString()].map(() => <Holiday />) : ''}>
                </Calendar>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </div>

    );
}


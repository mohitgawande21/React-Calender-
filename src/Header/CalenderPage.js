
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holiday from './Holiday'
export default function CalenerPage({ onClickAddHoliday, onSelectHolidayDate, Holidays, setHolidays, date, setDate }) {

    // const Holidays={date:[]}
    const onClickDayEvent = (date) => {
        onSelectHolidayDate(date)
    }
    return (
        <div className='app d-flex  justify-content-center align-items-center'>
            <div className='calendar-container my-3'>
                <Calendar onClickDay={onClickDayEvent} onChange={setDate} value={date} tileContent={Holidays[date].map(() => <Holiday />)}>
                    <p>Name gawande</p>
                </Calendar>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </div>

    );
}


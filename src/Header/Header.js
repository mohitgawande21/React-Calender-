import React from 'react'

export default function Header({ onClickAddHoliday }) {


    return (
        <div>
            <div className=' bg-secondary d-flex flex-wrap justify-content-end align-items-center p-1 w-100'>
                <h6 className='my-1 ml-3 text-white flex-grow-1 '>Welcome Mohit</h6>
                <h3 className='my-1 ml-3 text-white flex-grow-1 '>Calender</h3>
                <div className=''>
                    <button onClick={onClickAddHoliday} type="submit" className="btn btn-success my-1 mx-2 rounded-0">+ Add Holiday</button>
                </div>
            </div>
        </div>
    )
}

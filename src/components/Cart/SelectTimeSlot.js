import React, { useState } from 'react';
import DatePIcker from './DatePicker';
import TimeSlot from './TimeSlot';

const SelectTimeSlot = ({ selectDate, setSelectDate, timeSlot, setTimeSlot }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="w-[394px] rounded-md bg-white shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)] p-5 absolute top-20 z-50">
            <div className='mb-5 flex justify-between'>
                <button className={`py-3 px-5 rounded-md flex gap-2 items-center ${activeTab === 1 ? 'active border-[3px] border-b3' : 'border border-[#E2E3E5] text-[#6C727F] '}`} onClick={() => handleTabClick(1)}>
                    <img src="/svgs/calendar_month_black.webp" alt="" />
                    Delivery Date
                </button>
                <button className={`py-3 px-5 rounded-md flex gap-2 items-center ${activeTab === 2 ? 'active border-[3px] border-b3' : 'border border-[#E2E3E5] text-[#6C727F] '}`} onClick={() => handleTabClick(2)}>
                    <img src="/svgs/nest_clock_farsight_analog.webp" alt="" />
                    Time-slot
                </button>
            </div>
            {activeTab === 1 &&
                <DatePIcker selectDate={selectDate} setSelectDate={setSelectDate} />
            }
            {activeTab === 2 &&
                <TimeSlot time={timeSlot} setTime={setTimeSlot} />
            }
        </div>
    )
}

export default SelectTimeSlot
import React, { useEffect, useState } from 'react';
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../svgs/RadioSvg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TimeSlot = ({time,setTime}) => {
    const [activeTab, setActiveTab] = useState(1);
    const [currentMonth,setCurrentMonth] = useState('');
    const [currentDate,setCurrentDate] = useState('');

    useEffect(()=>{
     const currentDateMonth = new Date();
     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const currentMonthName = monthNames[currentDateMonth.getMonth()]
     // Create a new Date object
     const currentDate = new Date();
     // Get the current date
     const currentDay = currentDate.getDate();
     setCurrentDate(currentDay)
     setCurrentMonth(currentMonthName)
     setTime(`${currentMonthName} ${currentDate} - 8am - 12am`)
     console.log(time)
    },[])

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <div className='flex flex-col gap-5'>
            <label htmlFor="date1" className={`p-1 border rounded w-full block cursor-pointer ${activeTab === 1 ? 'active border-b3' : 'border-[#D9D9D9]'}`} onClick={() => handleTabClick(1)}>
                <Radio id="date1" value={`${currentMonth} ${currentDate} - 8am - 12am`} onChange={(e)=> setTime(e.target.defaultValue)} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name="timeslot" label={
                    <Typography className={`font-bold text-base flex gap-4 ${activeTab === 1 ? 'text-b3' : 'text-b16'}`}>
                        <span>
                            {currentMonth} {currentDate} - 8am - 12am
                        </span>
                    </Typography>
                } defaultChecked />
            </label>
            <label htmlFor="date2" className={`p-1 border rounded w-full block cursor-pointer ${activeTab === 2 ? 'active border-b3' : 'border-[#D9D9D9]'}`} onClick={() => handleTabClick(2)}>
                <Radio id="date2" value={`${currentMonth} ${currentDate} - 8am - 12am`} onChange={(e)=> setTime(e.target.defaultValue)} icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name="timeslot" label={
                    <Typography className={`font-bold text-base flex gap-4 ${activeTab === 2 ? 'text-b3' : 'text-b16'}`}>
                        <span>
                        {currentMonth} {currentDate} - 11am - 12pm
                        </span>
                    </Typography>
                } />
            </label>

            <div className='grid grid-cols-2'>
                <button className='text-xs text-red-500 py-3 px-4 rounded-full'>Remove</button>
                <button className='text-xs flex gap-2 items-center justify-center bg-b7 text-white px-4 py-3 rounded-full'>Done <AiOutlineArrowRight /></button>
            </div>
        </div>
    )
}

export default TimeSlot
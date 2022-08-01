import React from 'react';
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
const CalendarModal = () => {
  // const [date, setDate] = useState(new Date());
  return (
    <div className="w-60 h-80 primary-color h6-thin rounded-md shadow-sm shadow-black hover:bg-gray-800 cursor-pointer mb-6">
      <div className="calendar-container">
        {/* <Calendar onChange={setDate} value={date} selectRange={true} /> */}
      </div>
    </div>
  );
};

export default CalendarModal;

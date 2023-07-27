import React, { useState } from 'react';

const BookingForm = () => {
  // State variables for the form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('Birthday'); // Default value

  // Sample available times (you can replace this with your actual data from an API later)
  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '6:00 PM', '7:15 PM', '8:00 PM'];

  // Available occasions based on available times
  const availableOccasions = ['Anniversary', 'Birthday', 'Engagement', 'Wedding'];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted successfully!');
    // You can make an API call or perform further processing here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          min="0"
          max="10"
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          {availableOccasions.map((occasionOption, index) => (
            <option key={index} value={occasionOption}>
              {occasionOption}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Submit reservation</button>
      </div>
    </form>
  );
};

export default BookingForm;

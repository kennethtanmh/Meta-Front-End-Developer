import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '10:00 AM',
    guests: '2',
    occasion: 'Birthday',
  });

  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '6:00 PM', '7:15 PM', '8:00 PM'];

  const availableOccasions = ['Anniversary', 'Birthday', 'Engagement', 'Wedding'];

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = e => {
    e.preventDefault();

    if ((formData.name && formData.email && formData.date && formData.time && formData.guests !== '')) {
      navigate('/confirmed');

      console.log(`
      Name : ${formData.name}
      Email: ${formData.email}
      Date: ${formData.date},
      Time: ${formData.time},
      Number of Guests: ${formData.guests},
      Occasion: ${formData.occasion}`);

      setFormData({
        name: '',
        email: '',
        date: '',
        time: '17:00',
        guests: '',
        occasion: 'Birthday',
      });
    } else {
      console.log('THERE IS AN ERROR SUBMITTING YOUR FORM');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          required
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          required
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        >
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
          value={formData.guests}
          required
          min="0"
          max="10"
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          required
          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
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

import { useEffect, useState } from 'react';

const BookingConfirmation = () => {
  const [bookingDetails, setBookingDetails] = useState ('');

  useEffect(() => {
    const data = localStorage.getItem('formData')
    if (data !== null) setBookingDetails(JSON.parse(data));
  }, []);


  return (
    <section>
      <div>{bookingDetails.name}</div>
      <div>{bookingDetails.email}</div>
      <div>{bookingDetails.date}</div>
      <div>{bookingDetails.time}</div>
      <div>{bookingDetails.guest}</div>
    </section>

  )
}

export default BookingConfirmation
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import BookingPage from '../../pages/BookingPage';

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bookings' element={<BookingPage />} />
      </Routes>
    </>
  );
};

export default Main;
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout/Layout';
import HomePage from 'view/HomePage';
import AddContactPage from 'view/AddContactPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddContactPage />} />
      </Route>
    </Routes>
  );
};

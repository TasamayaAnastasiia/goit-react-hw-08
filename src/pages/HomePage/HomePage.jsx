import React from 'react';
import css from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Welcome to our Awesome Contact Manager!</h1>
      <p className={css.description}>This is the place where you can easily manage your contacts.</p>
      <p className={css.note}>Register or log in to get started!</p>
    </div>
  );
}


import React, { Fragment } from 'react';
import data from './data';
import { Header } from './component/Header';
import { Card } from './component/Card';

export function App() {
  const cards = data.map(item => {
    return (
      <Card
        item={item}
      />
    )
  })

  return (
    <Fragment>
      <div className='hero'>
        <Header />
        {cards}
      </div>

    </Fragment>
  );
}

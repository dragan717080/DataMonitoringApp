import React, { FC } from 'react';
import '../../styles/quotes.css';

const Quotes: FC = () => {
  return (
    <div className='row mx-auto'>
      <div className="overflow-hidden">
        <div className="card rounded-xl">
          <i className="fa1 fa fa-quote-right" aria-hidden="true">96%</i>
          <div className="text">
            less errors using our error monitoring tool
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes;

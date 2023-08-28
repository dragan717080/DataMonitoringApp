import React, { FC } from 'react';
import '../../styles/quotes.css';

const Quotes: FC = () => {
  return (
    <div className='row mx-auto 2xl:space-x-7'>
      <div className="overflow-hidden">
        <div className="card row rounded-xl">
          <i className="card-title" aria-hidden="true">96%</i>
          <div className="text px-4 semibold text-center">
            less errors using our error monitoring tool
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="card row rounded-xl">
          <i className="card-title" aria-hidden="true">2</i>
          <div className="text px-4 semibold text-center">
            minutes to respond to incidents
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="card row rounded-xl">
          <i className="card-title" aria-hidden="true">40</i>
          <div className="text px-4 semibold text-center">
            seconds to set up account
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes;

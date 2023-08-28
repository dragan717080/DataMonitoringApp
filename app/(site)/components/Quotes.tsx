import React, { FC } from 'react';
import '../../styles/quotes.css';

const Quotes: FC = () => {
  return (
    <div className='grid grid-flow-row 2xl:grid-flow-col 2xl:grid-cols-3 mx-auto gap-y-10 2xl:gap-x-7 2xl:w-[62%]'>
      <div className="overflow-hidden mx-auto">
        <div className="card row rounded-xl">
          <i className="card-title" aria-hidden="true">96%</i>
          <div className="text px-4 semibold text-center">
            less errors using our error monitoring tool
          </div>
        </div>
      </div>
      <div className="overflow-hidden mx-auto">
        <div className="card row rounded-xl">
          <i className="card-title" aria-hidden="true">2</i>
          <div className="text px-4 semibold text-center">
            minutes to respond to incidents
          </div>
        </div>
      </div>
      <div className="overflow-hidden mx-auto">
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

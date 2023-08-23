import { FC } from 'react';
import Quote from './Quote';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedIndex } from '@/store/slices/expandableSlice';
import { RootState } from '@/store';

const Incidents = () => {

  return (
    <div className=''>
      Incidents
      <Quote />
    </div>
  )
}

export default Incidents;

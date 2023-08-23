import { FC } from 'react';
import QuoteProps from '@/app/interfaces/props/QuoteProps';
import quotes from '@/config/quotes';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedIndex } from '@/store/slices/expandableSlice';
import { RootState } from '@/store';

const Quote = () => {
  const expandedIndex = useSelector((state: RootState) => state.expandable.expandedIndex);

  const { content, author } = quotes[expandedIndex];

  return (
    <div className='m-auto'>
      <blockquote className='quote max-w-fit'>
        { content }
      </blockquote>
      <cite className='ml-2'>{ author }</cite>
    </div>
  )
}

export default Quote;

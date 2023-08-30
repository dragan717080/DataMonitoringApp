import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedIndex } from '@/store/slices/expandableSlice';
import { RootState } from '@/store';
import ExpandableProps from '@/app/interfaces/props/ExpandableProps';
import ArrowIcon from './svgs/ArrowIcon';

const ExpandableDiv: FC<ExpandableProps> = ({ title, content, index }) => {
  const dispatch = useDispatch();
  const expandedIndex = useSelector((state: RootState) => state.expandable.expandedIndex);

  const isExpanded = expandedIndex === index;

  const toggleExpanded = (e: MouseEvent<HTMLDivElement>) => {
    // In this case if expandable with index 0 is the only one remaining, it shouldn't be closed
    if (!expandedIndex && !index)
      return;

    const parentElement = (e.target as HTMLElement).parentNode as HTMLElement | null;
    const isClosing: boolean = parentElement?.classList.value.includes('expanded') ?? false;
    const newIndex: number|null = isExpanded ? (isClosing ? 0 : null) : index;

    if (newIndex !== null) dispatch(setExpandedIndex(newIndex));
  };

  return (
    <div className={`expandable ${isExpanded ? 'expanded' : ''}`} onClick={(e) => toggleExpanded(e)}>
      <div className="flex justify-between">
        <div className="bold">{title}</div>
        <div className={`w-4 h-4 transform transition-transform duration-300 mt-1 ${isExpanded ? 'rotate-180' : ''}`}>
          <ArrowIcon />
        </div>
      </div>
      {isExpanded &&
        <div className="content pt-0.5 pr-3">{content}</div>
      }
    </div>
  );
};

export default ExpandableDiv;

import { FC, JSXElementConstructor, ReactElement } from 'react';
import ExpandableDiv from './Expandable';
import expandableContents from '@/config/expandableContents';
import { Expandable } from '@/app/interfaces/props/ExpandableProps';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedIndex } from '@/store/slices/expandableSlice';
import { Logs as LogsComponent, Errors, Incidents, Tests } from './expandable-images';
import { RootState } from '@/store';

const Logs: FC = () => {

  const expandedIndex = useSelector((state: RootState) => state.expandable.expandedIndex);

  const infoComponents: ReactElement[] = 
    [<LogsComponent key="logs" />, <Errors key="errors" />, <Incidents key="incidents" />, <Tests key="tests" />];

  return (
    <section className='col-v'>
      <div className="lg:w-[40%]">
        <div className="text-5xl">
          Logging, Analytics, Testing, Traces and Host Monitoring
        </div>
        <div className='py-7 text-xl'>
          At AlertBird, we believe that data is the key to success in today&apos;s fast-paced digital landscape.
          Our observability platform offers a comprehensive suite of logging-related services that provide deep insights into your system&apos;s performance, ensuring you stay one step ahead of the competition.
        </div>
      </div>
      {/* bg-gradient-to-r from-[#f13ea2] to-[#3926b3] */}
      <div className='flex justify-center flex-col md:flex-row space-x-6'>
        <div className="md:w-[40%]">
          {expandableContents.map((expandable: Expandable, index: number) => (
            <ExpandableDiv
              title={expandable.title}
              content={expandable.content}
              index={index}
              key={index}
            />
          ))}
        </div>
        <div className='md:w-[60%]'>
          {/* {(infoComponents[expandedIndex])()} */}
          {(infoComponents[expandedIndex])}
        </div>
      </div>
    </section>
  )
}

export default Logs;

import Image from 'next/image';
import React, { useRef } from 'react';
import { minus_circle, plus_circle } from '../../assets/icons';

const Accodion = ({ faq, active, onToggle, length, index }) => {
  const { question, answer } = faq;
  const contentEl = useRef();
  return (
    <div>
      <div
        className={`${active ? 'space-y-4' : ''} ${
          index === length ? 'border-b' : ''
        } w-full p-6 border-t border-[#A9A29D]`}
      >
        <div className="flex" onClick={onToggle}>
          <h5 className={`md:text-3xl text-lg ${active ? ' font-semibold text-accent-orange' : 'text-[#A9A29D] font-medium'}`}>{question}</h5>
          <span className="ml-auto">
            <Image
              src={active ? minus_circle : plus_circle}
              alt="Image icon"
              className="transition-all ease-in-out duration-300"
            />
          </span>
        </div>
        <div
          ref={contentEl}
          style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
          className="h-0 overflow-hidden transition-all ease-in-out duration-200"
        >
          <p className="text-accent-gray md:text-3xl text-base md:max-w-6xl">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accodion;

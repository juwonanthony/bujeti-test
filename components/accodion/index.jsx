import Image from 'next/image';
import React, { useRef } from 'react';
import { minus_circle, plus_circle } from '../../assets/icons';

const Accodion = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;
  const contentEl = useRef();
  return (
    <div>
      <div className={`${active ? 'space-y-4' : ''} w-full p-6 rounded-lg shadow-lg shadow-slate-300/60 bg-white`}>
        <div className="flex" onClick={onToggle}>
          <h5 className={`md:text-xl text-lg ${active ? ' font-bold' : ''}`}>{question}</h5>
          <span className="ml-auto">
            <Image
              src={`${active ? minus_circle : plus_circle}`}
              className="text-blue-700 transition-all ease-in-out duration-300"
            />
          </span>
        </div>
        <div
          ref={contentEl}
          style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
          className="h-0 overflow-hidden transition-all ease-in-out duration-200"
        >
          <p className="text-gray-600 md:text-base text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accodion;

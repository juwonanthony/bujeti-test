import Image from 'next/image'
import React, { useRef } from 'react'
import { minus_circle, plus_circle } from 'assets/icons'

const Accodion = ({ faq, active, onToggle, length, index }) => {
  const { question, answer } = faq
  const contentEl = useRef()
  return (
    <div>
      <div
        className={`${active ? 'space-y-4' : ''} ${
          index === length ? 'border-b' : ''
        } w-full border-t border-[#A9A29D] p-6`}
      >
        <div className="flex" onClick={onToggle}>
          <h5
            className={`text-lg md:text-3xl ${
              active ? ' font-semibold text-accent-orange' : 'font-medium text-[#A9A29D]'
            }`}
          >
            {question}
          </h5>
          <span className="ml-auto">
            <Image
              src={active ? minus_circle : plus_circle}
              alt="Image icon"
              className="transition-all duration-300 ease-in-out"
            />
          </span>
        </div>
        <div
          ref={contentEl}
          style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
          className="h-0 overflow-hidden transition-all duration-200 ease-in-out"
        >
          <p className="text-base text-accent-gray md:max-w-6xl md:text-3xl">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Accodion

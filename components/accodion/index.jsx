import Image from 'next/image'
import React, { useRef } from 'react'
import { minus_circle, plus_circle } from 'assets/icons'

const Accodion = ({ faq, active, onToggle, length, index }) => {
  const { description, title } = faq
  const contentEl = useRef()
  return (
    <div>
      <div
        className={`${active ? 'space-y-4 px-0 py-6 md:px-6 lg:px-6' : 'px-0 py-4 md:p-6 lg:p-6'} ${
          index === length ? 'border-b' : ''
        } w-full border-t border-[#A9A29D] `}
      >
        <div className="flex" onClick={onToggle}>
          <h5
            className={`w-80 text-base md:w-full md:text-3xl lg:w-full ${
              active ? ' font-semibold text-accent-orange' : 'font-medium text-[#A9A29D]'
            }`}
          >
            {title}
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
          <p className="text-base text-accent-gray md:max-w-6xl md:text-3xl lg:text-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accodion

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import MoreArrow from '../../assets/icons/more-arrow.svg'

const opacity = {
  0: 'opacity-0	',
  5: 'opacity-5',
  10: 'opacity-10',
  20: 'opacity-20',
  25: 'opacity-25',
  30: 'opacity-30',
  40: 'opacity-40',
  50: 'opacity-50',
  60: 'opacity-60',
  70: 'opacity-70',
  75: 'opacity-75',
  80: 'opacity-80',
  90: 'opacity-90',
  95: 'opacity-95',
  100: 'opacity-100',
}
const SolutionAccodion = ({ solution, active, onToggle, length, percent }) => {
  const { title, description } = solution
  const contentEl = useRef()
  const [scrollHeight, setScrollHeight] = useState()

  useEffect(() => {
    setScrollHeight(contentEl.current?.scrollHeight)
  }, [active])

  return (
    <div>
      <div className={`${active ? 'space-y-4' : ''} `}>
        <div className="flex" onClick={onToggle}>
          <h1
            className={`my-4 flex cursor-pointer items-center ${
              active
                ? ' mb-0 text-3xl font-semibold text-accent-brown xl:text-5xl'
                : `group text-2xl font-medium text-gray-700 transition-all duration-300 ease-in-out hover:font-semibold hover:text-accent-brown md:text-2xl hover:md:text-3xl xl:text-3xl hover:xl:text-5xl ${opacity[percent]} hover:opacity-100 `
            }`}
            // style={{ opacity: percent }}
          >
            {title}

            <Image
              src={MoreArrow}
              alt={MoreArrow}
              className={`ml-3 h-7 w-7 ${active ? 'block' : 'hidden group-hover:block'}`}
            />

            {/* <MoreArrow className="ml-3 h-7 w-7" /> */}
          </h1>
        </div>
        <div
          ref={contentEl}
          style={active ? { height: scrollHeight } : { height: '0px' }}
          className="h-0 overflow-hidden transition-all duration-200 ease-in-out "
        >
          <p className="mb-4 w-full leading-relaxed text-gray-500 md:mb-6 md:w-10/12 lg:mb-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SolutionAccodion

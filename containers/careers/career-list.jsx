import { useState, useEffect } from 'react'
import Link from 'next/link'
const CareerLists = ({ jobs }) => {
  const [allJobs, setAllJobs] = useState({})
  const [activeJobs, setActiveJobs] = useState('engineering')
  const [currentJob, setCurrentJob] = useState()

  useEffect(() => {
    if ((jobs, activeJobs)) {
      setAllJobs(jobs)
      setCurrentJob(jobs[activeJobs])
    }
  }, [jobs, activeJobs])
  const departments = Object.keys(allJobs)

  const onHandleToggleActive = (active) => {
    setActiveJobs(active)
    handleChangeCurrentJob(active)
  }

  const onHandleShowAll = () => {
    setActiveJobs('all')
    handleChangeCurrentJob('all')
  }

  const handleChangeCurrentJob = (job) => {
    if (job === 'all') {
      console.log(Object.keys(allJobs).values)
    } else {
      setCurrentJob(allJobs[job])
    }
  }

  return (
    <section className="bg-grey-warm py-20 md:py-37 lg:py-37">
      <div className="container mx-auto">
        {console.log({ currentJob })}
        <Header departments={departments} active={activeJobs} toggleActive={onHandleToggleActive} />
        <JobList current={currentJob} onShowAll={onHandleShowAll} />
      </div>
    </section>
  )
}

export default CareerLists

const Header = ({ departments, active, toggleActive }) => {
  return (
    <div className="px-4 md:px-0 lg:px-0">
      <header className="flex flex-col justify-between md:flex-row md:items-center lg:flex-row lg:items-center">
        <h1 className="mb-4 text-xl font-semibold md:mb-0 md:text-5xl lg:mb-0 lg:text-5xl">
          Current Openings
        </h1>
        <div className="flex w-full items-center justify-between rounded-lg border-[1px] bg-white md:w-80 lg:w-80 ">
          <input
            type="text"
            placeholder="Quick search"
            className="w-full rounded-lg bg-white py-2 px-3 text-base text-grey-deep outline-none"
          />
          <span className="pr-[14px]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 13L10.1 10.1M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z"
                stroke="#586068"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </header>
      <div className="mt-10 flex w-full gap-4 overflow-scroll md:mt-30 md:gap-25 md:overflow-hidden lg:mt-30 lg:gap-25 lg:overflow-hidden">
        {departments?.map((department) => {
          return (
            <span
              key={department.id}
              onClick={() => toggleActive(department)}
              className={`cursor-pointer text-base capitalize md:text-xl lg:text-xl ${
                department === active ? 'text-accent-orange' : 'text-grey-warm-400'
              }`}
            >
              {department}
            </span>
          )
        })}
      </div>
    </div>
  )
}

const JobList = ({ current, onShowAll }) => {
  return (
    <div className="px-4 pt-20 md:px-0 md:pt-[100px] lg:px-0 lg:pt-[100px]">
      <div className="">
        {current?.map((current) => {
          return (
            <div
              className="border-color-[#D6D6D6] flex flex-row items-center justify-between border-b-[1px] py-4 md:py-10 lg:py-10"
              key={current.id}
            >
              <span className="text-base font-semibold text-textBaseColor md:text-2xl lg:text-2xl">
                {current.name}
              </span>
              <Link href="/careers" className="flex items-center gap-4">
                <span className="text-base text-grey-deep md:text-2xl lg:text-2xl">Apply</span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 14.25L14.25 1.75M14.25 1.75H1.75M14.25 1.75V14.25"
                      stroke="#586068"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          )
        })}
      </div>
      <span
        onClick={() => onShowAll()}
        className="border-color-[#D6D6D6] mt-[100px] flex cursor-pointer items-center gap-4 border-t-[1px] pt-10 text-base text-textBaseColor md:gap-6 md:pt-[50px] md:text-2xl lg:gap-6 lg:pt-[50px] lg:text-2xl"
      >
        See all positions{' '}
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 14.25L14.25 1.75M14.25 1.75H1.75M14.25 1.75V14.25"
              stroke="#242628"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </span>
    </div>
  )
}

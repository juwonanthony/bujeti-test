const data = [
  {
    type: 'Mission',
    title: 'To accelerate business growth with a unified, fully automated expensing solution',
    body: 'Supporting African business growth by streamlining their process and leveraging financial capacity and activities. We developed Bujeti to automate processes and allow companies and employees to focus on their core business.',
  },
  {
    type: 'Vision',
    title: 'To accelerate business growth with a unified, fully automated expensing solution',
    body: 'Supporting African business growth by streamlining their process and leveraging financial capacity and activities. We developed Bujeti to automate processes and allow companies and employees to focus on their core business.',
  },
]

const MisionVision = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-[170px]">
          {data?.map((datum, i) => {
            return (
              <div className="" key={i}>
                <span className="flex items-center gap-1 text-accent-brown">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.587V-2H3V5.587C3 5.902 3.162 6.199 3.441 6.361L7.203 8.62L6.312 10.726L3.243 10.987L5.574 13.003L4.863 16L7.5 14.407L10.137 16L9.435 13.003L11.766 10.987L8.697 10.726L7.806 8.62L11.568 6.361C11.838 6.199 12 5.911 12 5.587ZM8.4 7.207L7.5 7.747L6.6 7.207V-1.1H8.4V7.207Z"
                      fill="#AF7421"
                    />
                  </svg>
                  {datum.type}
                </span>
                <h1 className="pt-[10px] pb-[20px] text-4xl font-semibold leading-[44px]">
                  {datum.title}
                </h1>
                <p className="text-xl leading-[30px] text-grey-deep">{datum.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MisionVision

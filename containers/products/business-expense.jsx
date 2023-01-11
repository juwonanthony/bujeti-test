import React from 'react'

const BusinessExpense = () => {
  return (
    <section className="bg-grey-warm py-40">
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-normal">
        <b>Centralize your business</b> <br />
        expense and spending activities.
      </h1>
      <div className="grid grid-cols-3 gap-8 pt-15">
        <div className="flex flex-col">
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.5 12H19.6429V10.2857C19.6429 7.92 17.7229 6 15.3571 6C12.9914 6 11.0714 7.92 11.0714 10.2857V12H10.2143C9.27143 12 8.5 12.7714 8.5 13.7143V22.2857C8.5 23.2286 9.27143 24 10.2143 24H20.5C21.4429 24 22.2143 23.2286 22.2143 22.2857V13.7143C22.2143 12.7714 21.4429 12 20.5 12ZM15.3571 19.7143C14.4143 19.7143 13.6429 18.9429 13.6429 18C13.6429 17.0571 14.4143 16.2857 15.3571 16.2857C16.3 16.2857 17.0714 17.0571 17.0714 18C17.0714 18.9429 16.3 19.7143 15.3571 19.7143ZM18.0143 12H12.7V10.2857C12.7 8.82 13.8914 7.62857 15.3571 7.62857C16.8229 7.62857 18.0143 8.82 18.0143 10.2857V12Z"
              fill="#D28B28"
            />
          </svg>

          <h1 className="text-xl text-accent-orange py-1">Simple, smart & secure.</h1>
          <p className="text-blue-light text-base">
            No more chasing receipt papers. Pay with your card and easily get reimbursement.
          </p>
        </div>
        <div className="flex flex-col">
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.8636 6L8.5 9.27273V14.1818C8.5 18.7227 11.6418 22.9691 15.8636 24C20.0855 22.9691 23.2273 18.7227 23.2273 14.1818V9.27273L15.8636 6ZM17.9091 15.4827L18.6455 18.6573L15.8636 16.98L13.0818 18.6573L13.8182 15.4909L11.3636 13.3718L14.6036 13.0936L15.8636 10.1073L17.1236 13.0855L20.3636 13.3636L17.9091 15.4827Z"
              fill="#D28B28"
            />
          </svg>

          <h1 className="text-xl text-accent-orange py-1">Bye to errors & fraud.</h1>
          <p className="text-blue-light text-base">
            Define and enforce spending limits. Nothing falls through the cracks.
          </p>
        </div>
        <div className="flex flex-col">
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5 14V8H23.5C24.6 8 25.5 8.9 25.5 10V14H19.5ZM23.5 22C24.6 22 25.5 21.1 25.5 20V16H19.5V22H23.5ZM17.5 8V22H7.5C6.4 22 5.5 21.1 5.5 20V10C5.5 8.9 6.4 8 7.5 8H17.5ZM13 15C13 14.17 12.33 13.5 11.5 13.5C10.67 13.5 10 14.17 10 15C10 15.83 10.67 16.5 11.5 16.5C12.33 16.5 13 15.83 13 15Z"
              fill="#D28B28"
            />
          </svg>

          <h1 className="text-xl text-accent-orange py-1">Forget risky cash management.</h1>
          <p className="text-blue-light text-base">
            Define and enforce spending limits. Nothing falls through the cracks.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BusinessExpense
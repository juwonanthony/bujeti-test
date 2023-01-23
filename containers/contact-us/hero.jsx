import parse from 'html-react-parser'

const Hero = ({ slug, title, body, bg }) => {
  const color = bg !== 'grey-warm' ? 'text-black bg-white' : `text-black bg-${bg}`
  return (
    <section className={`pt-[100px] pb-25 ${color}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 pb-[100px] pt-20">
          <span className="font-semibold uppercase text-accent-orange">{slug}</span>
          <h1 className="text-6xl ">{parse(title)}</h1>
          <p className="pr-20 pb-10 pt-[30px] text-xl">{parse(body)}</p>
        </div>
        <div className="flex-1">
          <form className="rounded-[10px] border-[1px] border-grey-semi bg-white p-[30px] shadow-card">
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Input label="First Name *" placeholder="Enter first name" />
              </div>
              <div className="flex-1">
                <Input label="Last Name *" placeholder="Enter last name" />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Input label="Email address *" placeholder="Enter email address" />
              </div>
              <div className="flex-1">
                <Input label="Phone number *" placeholder="Enter phone number" />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Input label="Company name *" placeholder="Enter email address" />
              </div>
              <div className="flex-1">
                <Select label="Company size *" placeholder="Enter phone number" />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Textarea label="Message" placeholder="Enter email address" />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <button className="h-12 w-full rounded-lg bg-black py-3 text-base font-semibold text-accent-green">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const Input = ({ type, label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <input
        type={type}
        label={label}
        placeholder={placeholder}
        required
        className="rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card"
      />
    </div>
  )
}

const Select = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <select className="rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card">
        <option>1-10</option>
        <option>10-20</option>
        <option>20-50</option>
        <option>50-100</option>
      </select>
    </div>
  )
}

const Textarea = ({ type, label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <textarea
        type={type}
        label={label}
        placeholder={placeholder}
        className="h-[122px] rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card"
      ></textarea>
    </div>
  )
}

export default Hero

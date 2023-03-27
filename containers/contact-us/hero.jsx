import parse from 'html-react-parser'
import { useState } from 'react'

const Hero = ({ slug, title, body, bg }) => {
  const color = bg !== 'grey-warm' ? 'text-black bg-white' : `text-black bg-${bg}`

  const [data, setData] = useState({})
  const [reason, setReason] = useState('')

  const onHandleChange = (event) => {
    setData({
      [event.target.name]: event.target.value,
    })
  }

  const handleSelect = (event) => {
    const { name, value } = event.target
    if (name === 'reason') {
      setReason(value)
    } else {
      setData({
        ...data,
        [name]: value,
      })
    }
  }

  return (
    <section className={`pt-50 pb-25 md:pt-[100px] lg:pt-[100px] ${color}`}>
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row lg:flex-row">
        <div className="flex-1 pb-[100px] pt-20">
          <span className="font-semibold uppercase text-accent-orange">{slug}</span>
          <h1 className="text-2xl md:text-6xl lg:text-6xl">{parse(title)}</h1>
          <p className="pr-20 pb-10 pt-[30px] text-xl">{parse(body)}</p>
        </div>
        <div className="flex-1">
          <form className="rounded-[10px] border-[1px] border-grey-semi bg-white p-[30px] shadow-card">
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="flex-1">
                <Input
                  label="First Name *"
                  placeholder="Enter first name"
                  name="firstName"
                  onChange={onHandleChange}
                />
              </div>
              <div className="flex-1">
                <Input label="Last Name *" placeholder="Enter last name" />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Input
                  label="Email address *"
                  placeholder="Enter email address"
                  name="email"
                  onChange={onHandleChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Phone number *"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Input
                  label="Company name *"
                  placeholder="Enter email address"
                  name="companyName"
                  onChange={onHandleChange}
                />
              </div>
              <div className="flex-1">
                <Select
                  label="Company size *"
                  placeholder="Select company size"
                  options={['1-10', '10-20', '0-50', '50-100']}
                  name="companySize"
                  onSelect={handleSelect}
                />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Input label="Company Website" placeholder="Company website" />
              </div>
              <div className="flex-1">
                <Select
                  label="Why are you contacting us?"
                  placeholder="Enter phone number"
                  options={['Demo', 'Pricing', 'Others']}
                  name="reason"
                  onSelect={handleSelect}
                />
              </div>
            </div>
            <div className="mb-[25px] flex items-center justify-between gap-5">
              <div className="flex-1">
                <Textarea label="Message" placeholder="Enter your message" name="message" />
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
        className="w-full rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card"
      />
    </div>
  )
}

const Select = ({ label, options, onSelect, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <select
        placeholder="Select an option"
        className="rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card"
        onChange={onSelect}
        name={name}
      >
        <option selected>Select an option</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>
        })}
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

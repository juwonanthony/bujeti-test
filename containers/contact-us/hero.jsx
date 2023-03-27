import parse from 'html-react-parser'
import { useState } from 'react'
import { API } from 'utils/api.config'
import axios from 'axios'
import { getSimplifiedError } from '../../utils/error'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Hero = ({ slug, title, body, bg }) => {
  const color = bg !== 'grey-warm' ? 'text-black bg-white' : `text-black bg-${bg}`

  const [data, setData] = useState({})
  const [reason, setReason] = useState('')
  const [loading, setLoading] = useState(false)

  const onHandleChange = (event) => {
    event.preventDefault()
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSelect = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setReason(value)
    setData({
      ...data,
      [name]: value,
    })
  }

  const onSave = (event) => {
    event.preventDefault()
    const payload = {
      ...data,
    }

    if (reason === 'Demo') {
      delete payload.message
      delete payload.reason
      delete payload.phoneNumber
      setLoading(true)
      axios
        .post(API.apiUrl, payload, {
          headers: {
            authorization: `Bearer ${API.token}`,
          },
        })
        .then((responseJson) => {
          setLoading(false)
          toast.success('Request sent successfully. Now you can book a slot!')
          setData({})
        })
        .catch((error) => {
          setLoading(false)
          toast.error(getSimplifiedError(error))
        })
    } else {
      setLoading(true)
      axios
        .post(API.apiUrl, payload, {
          headers: {
            authorization: `Bearer ${API.token}`,
          },
        })
        .then(() => {
          setLoading(false)
          toast.success('Request sent successfully. Now you can book a slot!')
          setData({})
        })
        .catch((error) => {
          setLoading(false)
          toast.error(getSimplifiedError(error))
        })
    }
  }

  return (
    <section className={`pt-20 pb-25 md:pt-[100px] lg:pt-[100px] ${color}`}>
      <ToastContainer />
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row lg:flex-row">
        <div className="flex-1 pb-[100px] pt-10">
          <span className="font-semibold uppercase text-accent-orange">{slug}</span>
          <h1 className="text-2xl md:text-6xl lg:text-6xl">{parse(title)}</h1>
          <p className="pr-20 pb-10 pt-[30px] text-xl">{parse(body)}</p>
        </div>
        <div className="w-full md:flex-1 lg:flex-1">
          <form
            className="rounded-[10px] border-[1px] border-grey-semi bg-white p-[10px] shadow-card md:p-[30px] lg:p-[30px]"
            onSubmit={onSave}
          >
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1 lg:flex-1">
                <Input
                  label="First Name *"
                  placeholder="Enter first name"
                  name="firstName"
                  onChange={onHandleChange}
                />
              </div>
              <div className="w-full md:flex-1 lg:flex-1">
                <Input
                  label="Last Name *"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1 lg:flex-1">
                <Input
                  label="Email address *"
                  placeholder="Enter email address"
                  name="email"
                  onChange={onHandleChange}
                />
              </div>
              <div className="w-full md:flex-1 lg:flex-1">
                <Input
                  label="Phone number *"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1 lg:flex-1">
                <Input
                  label="Company name *"
                  placeholder="Enter your company name"
                  name="company"
                  onChange={onHandleChange}
                />
              </div>
              <div className="w-full md:flex-1 lg:flex-1">
                <Select
                  label="Company size *"
                  placeholder="Select company size"
                  options={['1-10', '11-50', '51-200', '200+']}
                  name="companySize"
                  onSelect={handleSelect}
                />
              </div>
            </div>
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1 lg:flex-1">
                <Input
                  label="Company Website"
                  placeholder="Company website"
                  onChange={onHandleChange}
                  name="website"
                />
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
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="flex-1">
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  name="message"
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="flex-1">
                <button
                  className="h-12 w-full rounded-lg bg-black py-3 text-base font-semibold text-accent-green"
                  onClick={onSave}
                  disabled={loading}
                >
                  {loading ? 'Sending message, please wait...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const Input = ({ type, label, placeholder, onChange, name }) => {
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
        name={name}
        onChange={onChange}
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

const Textarea = ({ type, label, placeholder, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <textarea
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        name="message"
        className="h-[122px] rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card"
      ></textarea>
    </div>
  )
}

export default Hero

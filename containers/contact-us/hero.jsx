import parse from 'html-react-parser'
import { useState, useEffect } from 'react'
import { API } from 'utils/api.config'
import axios from 'axios'
import { getSimplifiedError } from '../../utils/error'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import CustomPhoneNumberInput from 'components/CustomPhoneNumberInput'
import { isValidPhoneNumber } from 'react-phone-number-input'

const Hero = ({ slug, title, body, bg }) => {
  const color = bg !== 'grey-warm' ? 'text-black bg-white' : `text-black bg-${bg}`

  const [data, setData] = useState({
    internationalFormat: '',
    firstName: null,
    lastName: null,
    reason: null,
    website: null,
    companySize: null,
    phoneNumber: '',
    company: null,
    email: null,
    message: null,
  })
  const [reason, setReason] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setError] = useState({})

  const emailReg = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig')

  // const handleClose = () => {
  //   setError({})
  //   setData({ internationalFormat: '' })
  // }
  const onHandleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    setError({
      ...errors,
      [name]: '',
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
    setError({
      ...errors,
      [name]: '',
    })
  }

  const validateForm = () => {
    let errors = {}
    let formIsValid = true
    if (!data.firstName) {
      formIsValid = false
      errors['firstName'] = 'First Name is required'
    }
    if (!data.lastName) {
      formIsValid = false
      errors['lastName'] = 'Last Name is required'
    }
    if (!data.email) {
      formIsValid = false
      errors['email'] = 'Email is required'
    }
    if (!emailReg.test(data.email)) {
      formIsValid = false
      errors['email'] = 'Invalid Email'
    }
    if (!data.company) {
      formIsValid = false
      errors['company'] = 'Please enter your company name'
    }
    if (!data.companySize) {
      formIsValid = false
      errors['companySize'] = 'Please enter your company size'
    }
    if (!data.website) {
      formIsValid = false
      errors['website'] = 'Please enter your website URL'
    }
    if (!data.reason) {
      formIsValid = false
      errors['reason'] = 'Please select a reason'
    }
    if (!data.phoneNumber.localFormat) {
      formIsValid = false
      errors['phoneNumber'] = 'Please enter your phone number'
    }
    if (!isValidPhoneNumber(data?.internationalFormat)) {
      formIsValid = false
      errors['phoneNumber'] = 'Invalid phone number'
    }
    setError(errors)
    return formIsValid
  }

  const handlePhoneNumberChange = (localFormat, internationalFormat, countryCode) => {
    setData({
      ...data,
      internationalFormat,
      phoneNumber: {
        countryCode,
        localFormat,
      },
    })
    setError({
      ...errors,
      internationalFormat: '',
      phoneNumber: '',
    })
  }

  const contactUs = (payload) => {
    axios
      .post(API.apiUrl, payload, {
        headers: {
          authorization: `Bearer ${API.token}`,
        },
      })
      .then(() => {
        setLoading(false)
        toast.success('Request sent successfully. Now you can book a slot!')
        setData({
          internationalFormat: null,
          firstName: null,
          lastName: null,
          reason: null,
          website: null,
          companySize: null,
          phoneNumber: null,
          company: null,
          email: null,
          message: null,
        })
      })
      .catch((error) => {
        setLoading(false)
        toast.error(getSimplifiedError(error))
      })
  }

  const onSave = (event) => {
    event.preventDefault()
    const payload = {
      ...data,
      reason: data?.reason?.toLowerCase(),
    }
    delete payload.internationalFormat
    if (!reason || reason === 'Select an option') {
      return toast.error('You must select a reason for contacting us')
    }
    if (!validateForm()) return toast.error('Some information are required')
    if (reason === 'Demo') {
      delete payload.message
      delete payload.reason
      setLoading(true)
      contactUs(payload)
    } else {
      setLoading(true)
      contactUs(payload)
    }
  }

  return (
    <section className={`pt-0 pb-25 md:pt-[50px] lg:pt-[100px] ${color}`}>
      <ToastContainer />
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-col md:px-0 lg:flex-row">
        <div className="flex-1 pb-[50px] pt-10 lg:pb-[100px]">
          <span className="font-semibold uppercase text-accent-orange">{slug}</span>
          <h1 className="text-2xl md:text-6xl lg:text-6xl">{parse(title)}</h1>
          <p className="pr-20 pb-10 pt-[30px] text-xl">{parse(body)}</p>
        </div>
        <div className="w-full md:flex-1 lg:flex-1">
          <form className="rounded-[10px] border-[1px] border-grey-semi bg-white p-[10px] shadow-card md:p-[30px] lg:p-[30px]">
            <div className="mb-[25px] flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1">
                <Input
                  label="First Name *"
                  placeholder="Enter first name"
                  name="firstName"
                  onChange={onHandleChange}
                  value={data?.firstName}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['firstName']}
                </span>
              </div>
              <div className="w-full md:flex-1">
                <Input
                  label="Last Name *"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={onHandleChange}
                  value={data?.lastName}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['lastName']}
                </span>
              </div>
            </div>
            <div className="mb-[25px] flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1">
                <Input
                  label="Email address *"
                  placeholder="Enter email address"
                  name="email"
                  onChange={onHandleChange}
                  value={data?.email}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['email']}
                </span>
              </div>
              <div className="w-full md:flex-1">
                {console.log(data)}
                <CustomPhoneNumberInput
                  label="Phone number *"
                  placeholder="Enter your phone number"
                  onChange={(localFormat, international, countryCode) =>
                    handlePhoneNumberChange(localFormat, international, countryCode)
                  }
                  value={
                    data?.internationalFormat === null
                      ? ''
                      : data?.internationalFormat || data?.phoneNumber?.internationalFormat
                  }
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['phoneNumber']}
                </span>
              </div>
            </div>
            <div className="mb-[25px] flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1">
                <Input
                  label="Company name *"
                  placeholder="Enter your company name"
                  name="company"
                  onChange={onHandleChange}
                  value={data?.company}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['company']}
                </span>
              </div>

              <div className="w-full md:flex-1">
                <Select
                  label="Company size *"
                  placeholder="Select company size"
                  options={['1-10', '11-50', '51-200', '200+']}
                  name="companySize"
                  onSelect={handleSelect}
                  data={data}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['companySize']}
                </span>
              </div>
            </div>
            <div className="mb-[25px] flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1">
                <Input
                  label="Company Website *"
                  placeholder="Company website"
                  onChange={onHandleChange}
                  name="website"
                  value={data?.website}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['website']}
                </span>
              </div>
              <div className="w-full md:flex-1">
                <Select
                  label="Why are you contacting us? *"
                  placeholder="Why are you contacting us?"
                  options={['Demo', 'Pricing', 'Others']}
                  name="reason"
                  onSelect={handleSelect}
                  data={data}
                />
                <span
                  style={{
                    color: 'red',

                    top: '2px',
                    fontSize: '10px',
                  }}
                >
                  {errors['reason']}
                </span>
              </div>
            </div>
            <div className="mb-[25px] flex w-full flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1">
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  name="message"
                  onChange={onHandleChange}
                  value={data?.message}
                />
              </div>
            </div>
            <div className="mb-[25px] flex flex-col items-center justify-between gap-5 md:flex-row lg:flex-row">
              <div className="w-full md:flex-1 lg:flex-1">
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

const Input = ({ type, label, placeholder, onChange, name, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <input
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value === null ? '' : value}
        className="relative inline-flex w-full rounded-lg border border-gray-300 bg-transparent p-4 text-base leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30"
      />
    </div>
  )
}

const Select = ({ label, options, onSelect, name, data }) => {
  console.log({ [name]: data[name] })
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-sm font-bold text-grey-deep">
        {label}
      </label>
      <select
        placeholder="Select an option"
        className="relative inline-flex w-full rounded-lg border border-gray-300 bg-transparent p-4 text-base leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30"
        onChange={onSelect}
        name={name}
        selected={data[name]}
      >
        <option selected={data[name] === null ? true : false}>Select an option</option>
        {options.map((option, index) => {
          return (
            <option key={index} selected={data[name] === option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

const Textarea = ({ type, label, placeholder, onChange, value }) => {
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
        value={value === null ? '' : value}
        rows={5}
        className="relative inline-flex w-full resize-none appearance-none overflow-auto rounded-lg border border-gray-300 bg-transparent p-3 text-base leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30"
      ></textarea>
    </div>
  )
}

export default Hero

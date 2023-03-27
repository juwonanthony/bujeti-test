import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'

import PhoneInput, {
  formatPhoneNumber,
  getCountryCallingCode,
  getCountries,
  parsePhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input'
import cs from 'classnames'

const CustomPhoneNumberInput = ({
  label,
  placeholder,
  onChange = () => null,
  col = 'col-md-12',
  disabled = false,
  value,
  ...rest
}) => {
  const [phoneCountryIso, setPhoneCountryIso] = useState('NG')
  const international = parsePhoneNumber(formatPhoneNumberIntl(value))
  const countryCode =
    value && isValidPhoneNumber(value) ? getCountryCallingCode(phoneCountryIso) : undefined

  const [onChangeValue, setOnChangeValue] = useState()

  useEffect(() => {
    if (international) {
      setPhoneCountryIso(international.country)
    }
  }, [value])

  useEffect(() => {
    if (countryCode && !onChangeValue) return
    return onChange(formatPhoneNumber(onChangeValue), onChangeValue, countryCode)
  }, [onChangeValue, countryCode])

  return (
    <div className="flex flex-col">
      <label className="textareaLabel">{label}</label>
      <div className={cs('PhoneInputDiv', { ['disabled']: disabled })}>
        <PhoneInput
          international={false}
          className={cs(
            'relative inline-flex w-full rounded-lg border border-gray-300 bg-transparent p-4 text-base leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
            { ['disabled']: disabled }
          )}
          onCountryChange={(value) => setPhoneCountryIso(value)}
          placeholder={placeholder}
          defaultCountry="NG"
          value={value}
          onChange={setOnChangeValue}
          limitMaxLength={true}
          {...rest}
        />
      </div>
    </div>
  )
}
export default CustomPhoneNumberInput

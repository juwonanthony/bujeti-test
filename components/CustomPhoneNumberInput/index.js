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
            'w-full rounded-lg border-[1px] border-grey-semi py-2 px-3 text-base text-grey-deep shadow-card',
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

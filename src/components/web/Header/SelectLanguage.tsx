import { FC } from 'react'

import { Select } from 'antd'

import { useLanguage } from '@/hooks/useLanguage'
import { languages } from '@/i18n'
import { LanguageCodeTypes } from '@/types/i18n'

const SelectLanguage: FC = () => {
  const { currLanguageCode, changeLanguage } = useLanguage()
  return (
    <>
      <Select
        style={{ width: 100 }}
        defaultValue={currLanguageCode}
        onChange={(value) => changeLanguage(value as LanguageCodeTypes)}
        options={languages.map(({ code, name }) => ({ label: name, value: code }))}
      />
    </>
  )
}
export default SelectLanguage

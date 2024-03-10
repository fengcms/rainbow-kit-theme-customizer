import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import ALink from '@@/core/ALink'
import SelectLanguage from '@@/web/Header/SelectLanguage'

const PageHeader: FC = () => {
  const { t } = useTranslation()
  return (
    <header className="c-header">
      <h1 className="c-header-logo">A Theme Customizer for RainbowKit</h1>
      <nav className="c-header-nav">
        <ul>
          <li>
            <ALink to="/">{t('Header.Nav.Home')}</ALink>
          </li>
          <li>
            <ALink to="/about">{t('Header.Nav.About')}</ALink>
          </li>
          <li>
            <ALink to="/balance">{t('Header.Nav.Balance', 'Balance')}</ALink>
          </li>
        </ul>
      </nav>
      <SelectLanguage />
    </header>
  )
}

export default PageHeader

import Arrow from '@/shared/assets/icons/arrow'
import { useTranslation } from 'react-i18next'

const SignInPage = () => {
  const { t, i18n } = useTranslation('sign-in')
  return (
    <div>
      go back <Arrow />
      <div>{t('sign_in')}</div>
      <button
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }}
      >
        перевод
      </button>
    </div>
  )
}

export default SignInPage

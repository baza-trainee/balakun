'use client';
import { useState } from 'react';
import MyButton from '@/components/ui/my-button';
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
  const { t } = useTranslation('footer');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = event => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };
  const validateEmail = email => {
    const emailPattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi;
    return emailPattern.test(email);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (isValid) {
      console.log('Submit');
      setEmail('');
    }
  };

  return (
    <form className="relative w-[400px]">
      <label htmlFor="email" className="mb-2 font-semibold">
      {t('footer.sign-up-text')}
      </label>

      <input
        type="text"
        id="email"
        className="h-12 mt-2 rounded-[1000px]  flex-1 appearance-none border border-black-100 w-full pl-6 pr-32  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-black-400"
        name="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={handleInputChange}
      />
      {!isValid && email.length > 0 && <p className="absolute text-sm text-red-900">{t('footer.email-error')}</p>}

      <div className="absolute right-0 bottom-0 w-auto">
        <MyButton styleType="primary" styleWidth="small" onClick={onSubmit} disabled={!isValid || email.length === 0}>
        {t('footer.sign-up')}
        </MyButton>
      </div>
    </form>
  );
};
export default Subscribe;

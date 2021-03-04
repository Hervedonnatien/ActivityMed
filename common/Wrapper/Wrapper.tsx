import React, { useState } from 'react';
import messages from '../../../locale/messages';
import moment from 'moment';
import { addLocaleData, IntlProvider } from 'react-intl';

import mg from 'react-intl/locale-data/mg';
import fr from 'react-intl/locale-data/fr';
moment.locale('fr');

const supportedLanguages = ['fr-FR', 'mg-MG'];

let local: string =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  'fr-FR';

if (!supportedLanguages.find((l) => l === local)) {
  local = 'fr-FR';
}

if (localStorage.getItem('language')) {
  local = localStorage.getItem('language') || '';
}
addLocaleData([...mg, ...fr]);
let lang = {};

if (local === 'fr-FR') {
  lang = messages['fr-FR'];
} else {
  lang = messages['mg-MG'];
}

interface IContextProps {
  locale: string;
  selectLanguage(e: any): void;
}
export const Context = React.createContext({} as IContextProps);

const Wrapper = (props: any) => {
  const [locale, setLocale] = useState(local);
  const [message, setMessages] = useState(lang);

  function selectLanguage(e: any) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    console.log('new', newLocale);

    if (newLocale === 'fr-FR') {
      setMessages(messages['fr-FR']);
    } else {
      setMessages(messages['mg-MG']);
    }
  }
  console.log('context', message);

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={message} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;

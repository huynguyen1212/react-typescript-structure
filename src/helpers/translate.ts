
import { createIntl, createIntlCache } from 'react-intl';
import { translatesJson } from 'containers/App/LanguageProvider';
import store from '../redux/store';

// This is optional but highly recommended since it prevents memory leak
const cache = createIntlCache();

const intl = () => {
  const { App } = store.getState();

  return createIntl(
    {
      locale: App?.lang || 'vi',
      messages: translatesJson['vi'],
    },
    cache,
  );
};

export default intl;

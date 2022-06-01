/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { useIntl } from 'react-intl';
import message from './message';

import reducersHome from './store/reducers';
import useInjectReducer from 'redux/useInjectReducer';

interface Props {}

type LoginFormData = {
  phone: string;
  password: string;
};
// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);

  const { register, handleSubmit } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  const intl = useIntl();

  return (
    <ErrorBound>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>{intl.formatMessage({ ...message.phone })}</p>
          <input type="text" name="phone" ref={register({ required: true })} />
        </div>
        <div>
          <p>{intl.formatMessage({ ...message.password })}</p>
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
        </div>

        <Button type="submit">Login test</Button>
      </form>
    </ErrorBound>
  );
}

export default memo(Home);

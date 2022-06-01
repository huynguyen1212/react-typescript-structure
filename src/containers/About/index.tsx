/*
*
* About
* make by huynq
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAbout from './store/reducers';
import WrapAbout from './style';

interface Props {}

// eslint-disable-next-line
function About({}: Props) {
useInjectReducer('About', reducersAbout);
return (
<ErrorBound>
  <WrapAbout> About </WrapAbout>
</ErrorBound>
);
}
export default memo(About);
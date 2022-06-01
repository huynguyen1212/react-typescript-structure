/**
 *
 * Loading
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconLoading } from './icon-loading.svg';

interface Props {
  active: boolean;
}

function Loading({ active }: Props) {
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [active]);

  if (active)
    return (
      <StylesLoading>
        <IconLoading />
      </StylesLoading>
    );
  return null;
}
const StylesLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 45%);
  align-items: center;
  display: flex;
`;

export default memo(Loading);

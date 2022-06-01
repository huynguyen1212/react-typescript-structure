/**
*
* Header
*
*/
import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {}

// eslint-disable-next-line
function Header({}: Props) {
return (
<StylesHeader>
  Header
</StylesHeader>
);
};
const StylesHeader = styled.div``;

export default memo(Header);
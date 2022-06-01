/**
*
* Footer
*
*/
import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {}

// eslint-disable-next-line
function Footer({}: Props) {
return (
<StylesFooter>
  Footer
</StylesFooter>
);
};
const StylesFooter = styled.div``;

export default memo(Footer);
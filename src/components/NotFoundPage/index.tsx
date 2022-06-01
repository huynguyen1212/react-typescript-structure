/**
 *
 * NotFoundPage
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

interface Props {}

// eslint-disable-next-line
function NotFoundPage({}: Props) {
  return <StylesNotFoundPage>NotFoundPage</StylesNotFoundPage>;
}
const StylesNotFoundPage = styled.div``;

export default memo(NotFoundPage);

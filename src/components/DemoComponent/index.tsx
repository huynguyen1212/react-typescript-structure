/**
 *
 * DemoComponent
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  name: string;
}

function DemoComponent({ name }: Props) {
  return <StylesDemoComponent>this is {name}</StylesDemoComponent>;
}
const StylesDemoComponent = styled.div``;

export default memo(DemoComponent);

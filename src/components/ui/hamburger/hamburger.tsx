"use client"

import { MouseEvent } from 'react';
import styled from 'styled-components'

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const HamburgerWrapper = styled.button`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;

  &:hover {

  }
`

const Hamburger = ({ onClick }: Props) => {
  return (
    // All props added here would be forwarded to the styled element.
    <HamburgerWrapper onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 27V24.75H31.5V27H4.5ZM4.5 19.125V16.875H31.5V19.125H4.5ZM4.5 11.25V9H31.5V11.25H4.5Z"
          fill="#F7F7F7"
        />
      </svg>
    </HamburgerWrapper>
  );
};


export default Hamburger;

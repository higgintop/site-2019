import styled from 'styled-components'

export const HeaderWrap = styled.div`
  background-image: ${props => `url("${props.imageurl}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%, 50%;
  height: 100vh;
`

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.8);
  z-index: 2;
`
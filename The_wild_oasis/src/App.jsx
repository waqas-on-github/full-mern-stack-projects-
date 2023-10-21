/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components'
import './App.css'

function App() {
 const H1 = styled.h1`
  
  ${props => props.type==="borderd"?  css`border: 1px solid red` : null };
  &:hover {
    background-color : red;
    padding:2rem ;
  }
 `;

  return (
    <>
    <H1 type='borderd' >hello</H1>
    <H1 as="button" > click me  </H1>
    </>
  )
}

export default App



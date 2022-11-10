import styled,{css} from "styled-components";
const ButtonStyle=css`
display:block;
padding:1rem 1.2rem;
border-radius:12px;
font-weight:bold;
font-size:1.2em;
text-transform:uppercase;
cursor:pointer;
&:active{
  opacity:0.7;
}
`
//BOTONES QUE PARTEN DE UNA MISMA BASE DE ESTILOS
export const PrimaryButton=styled.button`
${ButtonStyle}
background-color:#00bcd4;
color:#ffff;
`
export const SecondaryButton = styled.button`
  ${ButtonStyle}
  background-color:transparent;
  color:inherit;
  border:solid 1px black;
`;
export const Link = styled.a`
  ${ButtonStyle}
  text-decoration:underline;
  background-color: transparent;
  color: inherit;
`;
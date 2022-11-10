import styled from "styled-components";
export  const StyledText = styled.span`
  font-weight: bold;
  position: relative;
  color: #0047ff;
  line-height: 1.3em;
  display:inline-block;
  // underline como pseudoelemento con &::after
  &::after{
   position:absolute;
   content:'';
   width:100%;
   height:5px;
   background-color:currentColor;//var que iguala al color del texto
   left:0;
   top:1.2em;
   border-radius:4px


  }
`;
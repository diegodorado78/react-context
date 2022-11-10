import styled from 'styled-components'
export const CircleImage =styled.img`
max-width:350px;
border-radius:50%;
aspect-ratio:1/1;//propiedad para que conserve la proporcion si la imagen no es cuadrada
object-fit:cover;//prop par aque guarde relacion si hay una imagen que no es cuadrada
`
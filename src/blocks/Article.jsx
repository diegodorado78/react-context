import styled from "styled-components";

const Article = ({ articleInfo ,className}) => {
  return (
    <article className={className}>
      <h3>{articleInfo.title}</h3>
      <img src={articleInfo.social_image} alt="image" />
      <a href={articleInfo.url} target="_blank">
        Leer mas
      </a>
    </article>
  );
};

export default styled(Article)`
  border-radius: 12px;
  background-color: white;
  color: black;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  width: min(300px, 100%);
  img{
   max-width:100%;
  }
  div{
   padding:2em;
  }
`;

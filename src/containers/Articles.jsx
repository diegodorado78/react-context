import { useContext } from 'react';
import Article from '../blocks/Article.jsx';
import ToggleButton from '../blocks/ToggleButton.jsx';
import { ArticlesContext } from '../contexts/ArticlesContext.jsx';
import { Row } from '../elements/Row.jsx';
import { StyledText } from '../elements/StyledText.jsx';
import { Subtitle } from '../elements/Titles.jsx';
const Articles=({})=>{
  const {articles,userName}= useContext(ArticlesContext)

 return (
   <div>
     <Subtitle>
       Mis post en <StyledText>dev.to</StyledText>
     </Subtitle>
     <ToggleButton />
     <p>
       Ahora estas viendo los de <StyledText>{userName}</StyledText>{" "}
     </p>
     <Row>
       {articles.map((article) => {
         return <Article articleInfo={article} key={article.id}></Article>;
       })}
     </Row>
   </div>
 );
}
export default Articles;
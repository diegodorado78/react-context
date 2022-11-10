import { useContext } from "react"
import { ArticlesContext } from "../contexts/ArticlesContext"
import { Link } from "../elements/Buttons";

const ArticlesLink=()=>{
let{articles}=useContext(ArticlesContext);
return(
 <Link href="#articulos"> O lee mis {articles.length} articulos</Link>
)
}
export default ArticlesLink;
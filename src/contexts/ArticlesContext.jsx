import { createContext,useEffect,useState} from "react";

export const ArticlesContext = createContext({});
export const ArticlesProvider = ({children}) => {
  const BASEURL = " https://dev.to/api/articles?username=";
  const [user, setUser] = useState("uriel_hedz");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BASEURL}${user}`);
      return await response.json();
    }
    fetchData().then(res=> setArticles(res));
  }, []);

  return (
    <ArticlesContext.Provider value={{ userName: user, articles: articles,setUser:setUser }}>
      {children}
    </ArticlesContext.Provider>
  );
};

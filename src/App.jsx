import './App.css'
import Layout from './containers/Layout.jsx';
import Header from './containers/Header.jsx';
import Articles from './containers/Articles.jsx'
import {  ArticlesProvider } from './contexts/ArticlesContext.jsx';

function App() {

  return (
    <div className="App">
      <ArticlesProvider>
        <Layout>
          <Header />
          <Articles />
        </Layout>
      </ArticlesProvider>
    </div>
  );
}

export default App

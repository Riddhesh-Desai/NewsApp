import React, {useEffect ,useState} from 'react';
import Newscard from './Newscard';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsCom(props) {
    const [article, setArticle] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const pagesize=24;
    const category=props.category;
    const [page, setPage] = useState(1);
    const updateNews = async () =>{
        setLoading(true)
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pagesize}&page=${page}&apiKey=${props.API}`
        const response=await fetch(url);
        const parsedata=await response.json()
        setLoading(false)
        setArticle(parsedata.articles)
        setTotalResults(parsedata.totalResults)
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    const fetchMoreData = async() => {
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pagesize}&page=${page+1}&apiKey=${props.API}`
        setPage(page+1)
        const response=await fetch(url);
        const parsedata=await response.json()
        setArticle(article.concat(parsedata.articles))
        // setTotalResults(article.totalResults)
        console.log(article.length);
        console.log(totalResults);
    };
    
    useEffect(() => {
        updateNews();
    }, []);
    
    return (<>
            <div className="container news-wrapper">
            <h2 className="headline-tittle text-center my-4">
                Top Headline From {capitalizeFirstLetter(props.category)}
            </h2>
            </div>

            <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            // hasMore={false}
            hasMore={article.length !== totalResults}
            loader={<Loader/>}
            >
            
            {loading ?<Loader/>: <div className="container">
            <div className="row">
                {article.map((Element)=>{
                    return <div className="col-lg-3 col-md-4" key={Element.url} >
                                <Newscard author={Element.author} title={Element.title} 
                                description={!Element.description?"":Element.description} url={Element.url} urlToImage={Element.urlToImage} publishedAt={Element.publishedAt}/>
                            </div>
                })}
            </div>
            </div>}
            </InfiniteScroll>
        </>
    )
}

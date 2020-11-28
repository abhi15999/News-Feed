import {_api_key,country_code,url} from './config';

export const getNews = async () =>{
    try{
        let news = await fetch(`${url}?country=${country_code}&category=science`,{
            headers:{
                'X-API-KEY':_api_key
              }
        });

        let result = await news.json();

        return result.articles;    
    }
    catch(error){
        throw error;
    }
}
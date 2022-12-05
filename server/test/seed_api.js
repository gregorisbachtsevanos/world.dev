import './index.js'
import fetch from 'node-fetch';
import User from '../models/user_model.js'
import Articles from '../models/article_model.js'

const getArticlesApi = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.NEW_API_KEY}`)
    const data = await res.json()
    const user = await User.find()
    const resArticles = data.articles
    for (let i = 0; i < 20; i++) {
        try {
            await Articles.insertMany({
                title: resArticles[i].title,
                body: resArticles[i].content,
                author: user[Math.floor(Math.random() * 2)].id
            })
        } catch (error) {
            console.log(error.message)
        }

    }

}
getArticlesApi()
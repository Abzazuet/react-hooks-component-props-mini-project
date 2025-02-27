import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleElements = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes = {post.minutes}></Article>
    });
    return (
        <main id="articles">
            {articleElements}
        </main>
    );
}
export default ArticleList;
import React from "react";
import { SERVER_URL} from "../index";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import "./ArticleDetails.css"


const ArticleDetails = () => {
    // let { id } = useParams();
    const location = useLocation();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();
    const {articleId} = location.state || {};
    

    useEffect (() => {
        const getArticle = async() => {
            try {
                const response = await fetch(`${SERVER_URL}/article/${articleId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error("Error in fetching article", error);
            }
        }
        getArticle();
    }, [articleId])

    if (!article) {
        return <div>Loading...</div>;
    };

    return (
        <div>
            <h1>READ THE ARTICLE IN DETAIL</h1>
            <div className="articleDetail">
                <h1>{article.title}</h1>
                <p>{article.content}</p>
            </div>
        </div>
    );
};

export default ArticleDetails;
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Article = () => {
  const { articleId } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then((result) => {
        setArticleInfo(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [articleId]);

  const handleDelete = () => {
    navigate(-1); // 뒤로 가기 수행
    axios
      .delete(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then(() => {
        navigate(-1); // 뒤로 가기 수행
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>{articleInfo.title}</h1>
      <p>{articleInfo.body}</p>
      <p>작성일: {articleInfo.createdAt}</p>
      <button onClick={() => navigate(`/articles/${articleId}/edit`)}>수정하기</button>
      <button onClick={handleDelete}>삭제하기</button>
    </>
  );
};

export default Article;

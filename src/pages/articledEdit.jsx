import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticledEdit = () => {
    const { name, articleId } = useParams();
    const [articleInfo, setArticleInfo] = useState({});
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleEdit = () => {
      const data = {
        title: title,
        body: body
      };
      axios
        .put(`https://guestbook.jmoomin.com/articles/${articleId}`, data)
        .then((result) => {
          setArticleInfo(result.data);
          navigate(-2); // 수정 완료 후 뒤로 가기 (-1)를 하게 될 경우 "수정하기 버튼을 눌렀던 페이지"로 이동하기에 한 번 더 뒤로 가야지 방명록 전체를 볼 수 있다!
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    return (
      <>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <textarea
          placeholder="본문"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br/>
        <button onClick={handleEdit}>방명록 남기기!</button>
      </>
    );
};

export default ArticledEdit;

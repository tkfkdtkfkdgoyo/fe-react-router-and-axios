import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const OwnerCreate = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [ownerInfo, setOwnerInfo] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreate = () => {
    const data = {
      title: title,
      body: body
    };

    axios
      .post(`https://guestbook.jmoomin.com/${name}/articles`, data)
      .then((result) => {
        setOwnerInfo(result.data);
        navigate(-1); // 뒤로 가기 수행
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
  return (
    <>
      <h1>{name}님의 방명록</h1>
      <br/>
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
      <button onClick={handleCreate}>방명록 남기기!</button>
    </>
  );
};

export default OwnerCreate;

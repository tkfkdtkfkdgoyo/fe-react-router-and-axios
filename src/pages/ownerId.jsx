import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OwnerId = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [ownerInfo, setOwnerInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/${name}/articles`)
      .then((result) => {
        setOwnerInfo(result.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  const handleClick = (articleId) => {
    navigate(`/${name}/articles/${articleId}`);
  };

  return (
    <>
      <h1>{name}님의 방명록</h1>
      {ownerInfo.length === 0 ? (
        <p>방명록이 없습니다.</p>
      ) : (
        <ul>
          {ownerInfo.map((info) => (
            <li key={info.id}>
              <Link to={`/${name}/articles/${info.id}`} onClick={() => handleClick(info.id)}>{info.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <br />
      <button onClick={() => navigate(`/${name}/create`)}>방명록 남기기</button>
    </>
  );
};

export default OwnerId;

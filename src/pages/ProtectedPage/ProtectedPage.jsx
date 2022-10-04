import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../../config/configApi";

const ProtectedPage = () => {
  const [data, setData] = useState([]);
  const [ url, setUrl] = useState('');
  
  const navigate = useNavigate();

  //  useeffect requisiçao pra api

  const getPosts = async () => {
    await api
      .get("/uploadImg")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setUrl(res.config.baseURL);
        console.log(data);
        console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  // useState que salva a requisiçao
  return (
    <div>
      <h1>colocar um texto aqui</h1>

      <div>
        {
        data.map(post => (
          <div key={post.imgId}>
            <img src={`${url}/files/${post.src}`} alt={post.imgId} />
            <span>{post.src}</span> <br />
            <span>{post.text}</span> <br />
            <hr />
          </div>
        ))}
      </div>
      

      <button
        onClick={() => {
          navigate("/");
          localStorage.removeItem("user");
        }}
      >
        Sair
      </button>
    </div>
  );
};

export default ProtectedPage;

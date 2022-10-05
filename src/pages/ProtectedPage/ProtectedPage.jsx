import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/configApi";
import S from "./ProtectedPage.module.css";

const ProtectedPage = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

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
    <div className={S.bg}>
      <h1 className={S.title}>💘</h1>
      <button className={S.sairBtn}
        onClick={() => {
          navigate("/");
          localStorage.removeItem("user");
        }}
      >
      ❌SAIR 
      </button>

      <div className={S.postCtn}>
        {data.map((post) => (
          <div className={S.mapCtn} key={post.imgId}>
            <img
              className={S.postImg}
              src={`${url}/files/${post.src}`}
              alt={post.imgId}
            />
            <span>{post.text}</span>
            <br />
            
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ProtectedPage;

import React from "react";
import { useNavigate } from "react-router-dom";


const ProtectedPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      ProtectedPage
      <button onClick={()=> { navigate("/"); localStorage.removeItem('user') }}>Sair</button>
      
    </div>
  );
};

export default ProtectedPage;

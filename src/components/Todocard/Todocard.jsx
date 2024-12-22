/* eslint-disable react/prop-types */

import style from "./style.module.css";

function Todocard(props) {
  const { children, deleteData, index } = props;

  function alertUser(){
    alert("Does Nothing")
  }

  return (
    <div className={style.card}>
      {children}
      <div className={style.actionContainer}>
        <button onClick={()=>{
          alertUser
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            deleteData(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todocard;

import style from "./style.module.css";
import PropTypes from "prop-types";

var style1 = {
  display: "flex",
  justifyContent: "space-between",
};

function Todoinput(props) {
  
  const { addData,todoVal,setTodoVal } = props;

  return (
    <>
      <div className="card" style={style1}>
        <input
          type="text"
          placeholder="Enter task ..."
          value={todoVal}
          onChange={(e) => {
            setTodoVal(e.target.value);
          }}
          className={style.inputStyling}
        />
        <button
          className="primary-btn"
          onClick={() => {
            addData(todoVal);
            setTodoVal("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

Todoinput.propTypes = {
  addData: PropTypes.func,
  setTodoVal:PropTypes.func,
  todoVal:PropTypes.string
};

export default Todoinput;

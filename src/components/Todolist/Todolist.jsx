import style from "./style.module.css";
import Todocard from "../Todocard/Todocard";
import PropTypes from "prop-types";

function Todolist(props) {
  // let tododata = ["Go to Shop", "Buy Vegetables", "Study Aptitude"];
  const { todoData } = props;

  return (
    <>
      <section className={style.todolistContainer}>
        {todoData.map((elemeent, index) => {
          return (
            <Todocard {...props} index={index} key={index}>
              <p>{elemeent}</p>
            </Todocard>
          );
        })}
      </section>
    </>
  );
}

Todolist.propTypes = {
  todoData: PropTypes.array,
};

export default Todolist;

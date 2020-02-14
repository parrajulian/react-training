import React from "react";
import { connect } from "react-redux";
import { updateName } from "../redux/actions/userActions";
import { addFruit } from "../redux/actions/fruitsActions";

const Fruits = ({fruits, addFruit}) => {

  const handlerSubmit = (e) => {
    e.preventDefault();
      const fruit = e.target[0].value;
      e.target[0].value = '';
      addFruit(fruit);
  }
    return ( <div>
      <h1>Fruits</h1>
      <form onSubmit={handlerSubmit}> 
        <input type="text" placeholder='Agrega tu fruta'/>
        <button>Agregar</button>
      </form>
      <ul>

        {fruits.map((fruit,index) => (
          <li key={fruit + index}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>  );
}

const mapDispatchToProps = dispatch => {
    return {
      addFruit: (fruit) => dispatch(addFruit(fruit))
    };
};
const mapStateToProps = state => {
  console.log(state);
    
return {
    fruits: state.fruits
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps)(Fruits);
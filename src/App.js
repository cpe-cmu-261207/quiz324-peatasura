import ItemTable from "./ItemTable";
import { createContext, useState, useEffect, useReducer } from "react";
export const ItemContext = createContext({});
function App() {
  //add useState for all state variables
  const [myName, setMyname] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_CARD":
        return {
          ...state,
          currentState: [...state.currentState, action.payload]
        };
      case "SET_CARD":
        return {
          ...state,
          currentState: action.payload
        };
      case "DELETE_CARD":
        return {
          ...state,
          currentState: state.currentState.filter(
            (card) => card.id !== action.payload
          )
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, { currentState: [] });
  function fetchCards() {
    const localState = localStorage.getItem("currentState");
    if (localState) {
      dispatch({
        type: "SET_CARD",
        payload: JSON.parse(localState)
      });
    }
  }

  useEffect(fetchCards, []);
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state.currentState));
  }, [state.currentState]);

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  return (
    <ItemTable.Provider value={{ state, dispatch }}>
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Pet</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q Coco"

              //update related state based on event
            ></input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input className="input" type="number" placeholder="e.q 5"></input>
          </div>

          <button className="button is-danger is-fullwidth">Submit</button>

          <div className="mb-4"></div>
          <ItemTable
            name={state.currentState}
            gender={state.currentState}
            age={state.currentState}
          />
          {/* display tables for all persons */}

          <p className="is-4 title has-text-centered">Pet List</p>
          {/* sample table */}

          <ItemTable name={"Coco"} gender={"Male"} age={"5"} />
          <p>Your name and code here</p>
        </div>
      </div>
    </ItemTable.Provider>
  );
}

export default App;

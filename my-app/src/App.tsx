import { useState } from "react";
import InputField from "./components/input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleCreate = () => {
    setEditMode(true);
    setInputValue("");
  }
    const handleEdit = () => {
      setEditMode(true);
    };
    const handleDisable = () => {
      setEditMode(false);
    };
    const inputStyle = {
      border: '2px solid black',
      borderRadius: '4px',
      padding: '8px',
      width: "100%",
      backgroundColor: 'white',
      marginBottom: '10px',
      color: 'black'
    }
  
  return (
    <div>
      {editMode ? (
        <InputField
          label="Edit Input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          disabled={false}
          inputStyle={inputStyle}
        />
      ) : (
        <InputField
          label="View Input"
          type="text"
          value={inputValue}
          disabled={true}
          inputStyle={inputStyle}

        />
      )}
     <div className="buttonWrapper">
     <button onClick={handleCreate} className="buttonContainer">Create</button>
      <button onClick={handleEdit} className="buttonContainer">Edit</button>
      <button onClick={handleDisable} className="buttonContainer">Disable</button>
     </div>
    </div>
  );
}

export default App;

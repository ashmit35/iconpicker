import React, { useState } from 'react';
import IconPicker from './IconPicker';

const App = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleDivClick = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="App" style={{ display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent: "center" }}>

      <div
        onClick={handleDivClick}
        style={{
          width: '100px',
          height: '100px',
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: selectedIcon ? "#00FF00" : "gray"
        }}
      >
        {selectedIcon}
      </div>

      {isPickerVisible && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={5}
          iconHeight="50px"
          iconWidth="50px"
          pickerHeight="500px"
          pickerWidth="500px"
          onIconSelect={handleIconSelect}
          setIsPickerVisible={setIsPickerVisible}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
      )}

    </div>
  );
};

export default App;

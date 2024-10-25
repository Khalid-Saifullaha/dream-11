import { useState } from "react";
import Banner from "./assets/components/Header/Banner/Banner";
import Header from "./assets/components/Header/Header";
import Players from "./assets/components/Players";
import Selected from "./assets/components/Selected/Selected";



const App = () => {
  const [selected, setSelected] = useState([])
  const [isActive, setActive] = useState({
    cart: true,
    status:"cart"
  })
  
  const handleIsActiveState=(status)=>{
    if(status == "cart"){
      setActive({
        cart: true,
    status:"cart"
      })
    }
    else{
      setActive({
        cart: false,
    status:"about"
      })
    }
  }

console.log(isActive);

  const addChoosePlayer = player => {
    const isExist = selected.find(previousPlayer=> previousPlayer.playerId === player.playerId)
    if(!isExist){
      setSelected([...selected, player])
    }else{alert('This player already exists ')}

  }

  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* selected */}
      <Selected selected={selected}></Selected>
      {/* Players */}
  <Players isActive={isActive} addChoosePlayer={addChoosePlayer} handleIsActiveState={handleIsActiveState}></Players>
      {/* Footer */}
    </div>
  );
};

export default App;
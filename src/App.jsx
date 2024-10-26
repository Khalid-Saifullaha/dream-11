import { useState } from "react";
import Banner from "./assets/components/Header/Banner/Banner";
import Header from "./assets/components/Header/Header";
import Players from "./assets/components/Players";
import Selected from "./assets/components/Selected/Selected";
// import Newsletter from "./assets/components/Newsletter/Newsletter";
import Footer from "./assets/components/Footer/Footer";
import {  toast } from 'react-toastify';



const App = () => {
  const [selected, setSelected] = useState([])
  const [isActive, setActive] = useState({
    cart: true,
    status:"cart"
  });
  const [ setFreeCoin] = useState(0)

  const notify = () => toast.success("Congrates!! He is add your squad"); 
  
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



// clime free coin
const handelAddCoin = () => {
  setFreeCoin(prevCount => prevCount + 500000);

}



  const addChoosePlayer = player => {
    const isExist = selected.find(previousPlayer=> previousPlayer.playerId === player.playerId)
    if(!isExist){
      notify()
      setSelected([...selected, player])
    }else{toast.error('This player already exists ')}

  }

  

  return (
    <div>
      {/* Header */}
      <Header handelAddCoin ={handelAddCoin}></Header>
      {/* Banner */}
      <Banner></Banner>
   <div className="">
      {/* Players */}
      <Selected selected={selected} isActive={isActive} handleIsActiveState={handleIsActiveState}></Selected>
  <Players addChoosePlayer={addChoosePlayer} ></Players>
      {/* selected */}
   </div>
   {/* <Newsletter></Newsletter> */}
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
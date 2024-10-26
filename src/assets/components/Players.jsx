import { useEffect } from "react";
import { useState } from "react";
import './Players.css'
import Selected from "./Selected/Selected";


const Players = ({addChoosePlayer}) => {
    const [players, setPlayers] = useState([])

    useEffect( () => {
        fetch('dream11.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])


    return (
        <div className="w-10/12 mx-auto">
 

           <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
           {
                players.map(player=>(
                    <div key={player.playerId} className="card bg-base-100 border-2 ">
                    <figure>
                      <img
                      className=" md:h-80 w-full object-cover rounded-xl"
                        src={player.image}
                        alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title"><i className="fa-solid fa-user"></i>{player.name}</h2>
                      <div className="flex justify-between items-center">
                      <p className="font-bold text-gray-500"><i className="fa-solid fa-flag mr-4"></i>{player.country}</p>
                      <button className="btn font-bold text-gray-500">{player.role}</button>
                      </div>
                      <hr />
                      <p className="font-bold">Rating</p>
                      <div className="flex justify-between font-bold text-gray-500">
                        <p>{player.battingType}</p>
                        <p>{player.bowlingType}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-gray-500">{player.biddingPrice}</p>
                        <button onClick={()=> addChoosePlayer(player, )} className="btn">Choose player</button>
                      </div>
                    </div>
                  </div>))
            }
           </div>
        </div>
    );
};

export default Players;
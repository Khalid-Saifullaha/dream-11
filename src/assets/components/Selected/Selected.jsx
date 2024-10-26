

const Selected = ({selected, handleIsActiveState, isActive}) => {
    return (
        <div className="w-10/12 mx-auto text-3xl">
            <h1>Selected Player: {selected.length} </h1>
            <div className="flex justify-between m-6">
            <h2 className="text-3xl font-semibold mb-5">
                Available Players
            </h2>
            <div className="flex gap-3 font-semibold">
                <button onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart? "bt actives": "bt"}`}>Available</button>
                <button onClick={()=>handleIsActiveState("about")} className={`${isActive.cart? "bt ": "bt actives"}`}>Selected </button>
            </div>
            {/* {isActive.cart? <Players></Players> : "hello"} */}
            </div>
        </div>
    );
};

export default Selected;
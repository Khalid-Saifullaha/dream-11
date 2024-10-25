
const Selected = ({selected}) => {
    return (
        <div className="w-10/12 mx-auto text-3xl">
            <h1>Selected Player: {selected.length} </h1>
            <div className="">
                <img src={selected.image} alt="" />
            </div>
        </div>
    );
};

export default Selected;
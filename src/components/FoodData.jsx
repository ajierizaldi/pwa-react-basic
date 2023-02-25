import food from '../data/food';

const FoodData = () => {
    return (
        <div className='container d-flex flex-wrap align-content-center'>
            {food.map((item, index) => (
                <div className="p-2">
                    <div className="card" key={index}>
                        <div className="card-body">
                            <img src={item.image} alt={item.name} />
                            <h5 className="card-title text-center">{item.name}</h5>
                            <p className="card-text text-center">Rp. {item.price}</p>
                            <div className="text-center mx-auto">
                                <button type='button' className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FoodData;
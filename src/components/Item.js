export const Item = (product,pic,details) =>{
    return (
        <>
            <div className="Item">
                {product}
                <img src={pic} alt={product} />
                {details}
            </div>
        </>
    );
}


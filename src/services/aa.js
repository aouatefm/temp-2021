<div className="row">
    <div className="col-md-8">
        <img className="img-fluid" src={product.images} alt=""/>
    </div>
    <div className="col-md-4">
        <h1 className="my-3">{product.name}</h1>
        <span>Reference : </span><span> {product.reference}</span><br/>
        <ShippingIcon width={"30px"}/> <span> {product.shipping}</span>
        <h1> {formatNumber(product.price)}</h1>
        <form className="form-inline">
            <input type="number" className="form-control mr-1 w-25" defaultValue={1} min={1} w-25/>
            <button className="btn btn-dark">Add</button>
        </form>
        <h3 className="my-3">Project Details</h3>
        <table className="table table-hover ">
            <tr>
                <th scope="row">Height</th>
                <td>{product.height} cm / {product.height / 100} m</td>
            </tr>
            <tr>
                <th scope="row">Length</th>
                <td>{product.length} cm / {product.length / 100} m</td>
            </tr>
            <tr>
                <th scope="row">Width</th>
                <td>{product.width} cm / {product.width / 100} m</td>
            </tr>
            <tr>
                <th scope="row">Weight</th>
                <td>{product.weight} g / {product.weight / 1000} kg</td>
            </tr>
            <tr>
                <th scope="row">Material</th>
                <td>{product.material}</td>
            </tr>
        </table>
    </div>
</div>
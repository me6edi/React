function Product({ product }) {

  const forAlert = () => {
    alert('Alerting')
  }

  return (
    <div>
      <h1>Product Name: {product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={forAlert}>Click For Alert</button>
    </div>
  )
}

export default Product

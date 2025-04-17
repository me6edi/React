import './App.css'
import Product from './components/Products/Products'

function App() {
  const products = [
    { name: 'Nokia', price: 1200 },
    { name: 'Sumsung', price: 1300 },
    { name: 'Robin', price: 1500 },
  ]

  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  )
}

export default App

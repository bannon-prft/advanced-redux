import ProductItem from './ProductItem'
import classes from './Products.module.css'

const Products = (props) => {
  const items = [
    {
      title: 'FirstProduct',
      price: 27,
      description: 'This is teh first product - amazing!',
    },
    {
      title: 'CharlieProduct',
      price: 5.13,
      description: 'This is a charlie product - amazing!',
    },
    {
      title: 'Product 1203948234',
      price: 99,
      description: 'This is a product with a space in the title - amazing!',
    },
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map(item => (
          <ProductItem
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products

import React from 'react'
import Grid from '@material-ui/core';


const products = [
    {id:1, name:'Shoes', description:'Running Shoes', price:'200$'},
    {id:2, name:'Laptops', description:'Macbook', price:'6000$'},
    {id:3, name:'Screens', description:'Samsung TVs', price:'8999$'},
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )       
}

export default Products;
  
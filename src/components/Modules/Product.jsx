import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Products = () => {
    const [Items, setItems] = useState([
        {
            id: 1,
            product_name: "Product 1",
            price: 999,
            Image: "/logo192.png",
        },
        {
            id: 2,
            product_name: "Product 2",
            price: 299,
            Image: "/logo192.png",
        },
        {
            id: 3,
            product_name: "Product 3",
            price: 399,
            Image: "/logo192.png",
        },
        {
            id: 4,
            product_name: "Product 4",
            price: 1999,
            Image: "/logo192.png",
        },
        {
            id: 5,
            product_name: "Product 5",
            price: 599,
            Image: "/logo192.png",
        },
        {
            id: 6,
            product_name: "Product 6",
            price: 899,
            Image: "/logo192.png",
        },
        {
            id: 7,
            product_name: "Product 7",
            price: 1999,
            Image: "/logo192.png",
        },
        {
            id: 8,
            product_name: "Product 8",
            price: 599,
            Image: "/logo192.png",
        }
    ])
  return (
    <Container className="row">
        {Items.map((elem) => {
            return (
                <Card key={elem.id} className="col-md-3">
                    <Card.Img  variant='top' style={{ height: "200p", width: "300px" }} src={process.env.PUBLIC_URL + elem.Image} />
                    <Card.Body>
                        <Card.Title>{elem.product_name}</Card.Title>
                        <Card.Text>INR{elem.price}</Card.Text>
                        <Button>Buy Now</Button>
                    </Card.Body>
                </Card>
            )
        })}
    </Container>
  )
}

export default Products
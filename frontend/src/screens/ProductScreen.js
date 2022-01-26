import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  const params = useParams()
  const product = products.find((p) => p._id === params.id)

  return (
    <>
      <Link className=' btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          {/* use fluid property in bootstrap element to put aside content whenis not fit and is included (cover) a bit of first container begining from the left side  */}
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          {/* flush property is using  to take away spacing and border  */}
          <ListGroup variany='flash'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup varianr='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    amount avialable on Stock:
                  </Col>
                  <Col>
                    {product.countInStock}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button classname='btn-block' type='button ' disabled={product.countInStock === 0} >
                  Add to Cart
                </Button>
              </ListGroup.Item>



            </ListGroup>
          </Card>
        </Col>
      </Row>


      <div>
        {product.name}
      </div>
    </>
  )

};

export default ProductScreen;

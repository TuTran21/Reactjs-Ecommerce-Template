import React from 'react'
import Button from '../Button'
import '../productDetailsComp/productDetails.css'
import Tabs from '../Tabs/Tabs'
import CommentSection from '../Comments/commentsection'

class ProductDetailsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.productDetails.name === undefined) {
      return (
        <h2>Your session has expired</h2>
      )
    } else {
      return (
        <React.Fragment>
          <div className="container dark-grey-text mt-5">
            <div className="row wow fadeIn animated">
              <div className="col-lg-5 mb-4 d-flex justify-content-center">
                <img src={this.props.productDetails.img} id="productImg" className="img-fluid" alt={'Image of ' + this.props.productDetails.name}></img>
              </div>
              <div className="col-lg-7 mb-4 rightSide">
                <Tabs>
                  <div label="Product Details">
                    <div className="p-4">
                      <p className="lead font-weight-bold">{this.props.productDetails.name}</p>
                      <p className="lead">
                        <span>{this.props.productDetails.price} VND</span>
                      </p>
                      <p className="lead font-weight-bold">Description</p>
                      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero iusto, quia numquam corrupti molestiae voluptatum facere deleniti repellendus quod mollitia, labore totam magni quasi.</p>
                    </div>
                  </div>
                  <div label="Comments">
                    <CommentSection></CommentSection>
                  </div>
                </Tabs>

                <Button className="addToCart btn btn-primary btn-md my-0 p waves-effect waves-light" onClick={() => { this.props.addProduct(this.props.productDetails) }} text="Add to cart"
                />

              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

}


export default ProductDetailsComp
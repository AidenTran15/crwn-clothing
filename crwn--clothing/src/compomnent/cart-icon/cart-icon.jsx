import React from "react";
import { connect } from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {  selectCartItemsCount } from '../../redux/cart/cart.selectors.js';
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// item count on shopping cart
const mapStateToProps = ( state ) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

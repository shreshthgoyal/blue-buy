import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIconComponent } from '../../assets/cart.svg'

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIconComponent className="shopping-icon" />             
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchtoProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon);
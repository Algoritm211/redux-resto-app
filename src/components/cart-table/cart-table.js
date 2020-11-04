import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions';
import './cart-table.scss';

const CartTable = ({items, onDelete}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">

              {items.map(item => {
                const {title, price, url, id, quantity} = item
                return (
                  <div className="cart__item" key={id}>
                      <img src={url} className="cart__item-img" alt={title}></img>
                      <div className="cart__item-title">{title}</div>
                      <div className="cart__item-price">{price}$</div>
                      <div className="cart__item-price">{quantity}</div>
                      <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
                  </div>
                )
              })}

              <button onClick={() => {}} className="menu__btn">Отослать заказ</button>
            </div>
        </>
    );
};

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => dispatch(deleteFromCard(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
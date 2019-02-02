import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available'
    // makes sure that fish are present before rendering, fixes showing all fish as unavailable before rebase pulls
    // the App compDidMount loads local order (without rebase fishes) faster, so you need to return null so the order doesnt first render with no fish available
    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 }
    }

    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available.
          </li>
        </CSSTransition>
      )
    }

    return (
      <CSSTransition {...transitionOptions} >
        <li key={key}>
          <span>
            <TransitionGroup component='span' className='count'>
              <CSSTransition {...transitionOptions}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)} >Remove From Order</button>
          </span>
        </li>
      </CSSTransition>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <TransitionGroup component='ul' className='order'>
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className='total'>
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;
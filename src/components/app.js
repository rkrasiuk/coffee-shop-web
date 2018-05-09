import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadOrders} from '../actions/index';
import {init as firebaseInit} from '../firebase/index';

class App extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
  }

  componentWillMount() {
    this.props.loadOrders();
  }

  render() {
    let orders;
    if(this.props.orders.payload)
      orders = this.props.orders.payload.orders;
    else orders = {};
    return (
      <div className="App">
        {console.log(this.props.orders)}
        <h1>Orders</h1>
        <div className='table-responsive'>
        <table className={'table'}>
          <thead>
          <tr>
            <th>Email</th>
            <th>Order</th>
          </tr>
          </thead>
          <tbody>
          {(Object.keys(orders)).map((val , key) => {
              return (
                <tr key={key}>
                  <td>{orders[val].email}</td>
                  <td>
                    {orders[val].order.map((orderIt, keyIt) => {
                      return (
                        <div key={keyIt}>
                          <p>{orderIt.title} {orderIt.price}</p>
                        </div>
                      );}
                    )}
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
};

export default connect(mapStateToProps, {loadOrders})(App);
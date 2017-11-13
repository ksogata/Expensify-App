import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 4500,
  createdAt: 0
}));

store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 5000,
  createdAt: 1000
}));

store.dispatch(addExpense({
  description: 'rent',
  amount: 109500,
  createdAt: 0
}));

store.dispatch(setTextFilter({ text: '' }));
// store.dispatch(setTextFilter({ text: 'water' }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

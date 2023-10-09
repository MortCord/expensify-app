import React from "react";
import { shallow } from "enzyme";
import { EditExspensePage } from "../../components/EditExspensePage";
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() =>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExspensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]} />);
});

test('test render EditExpensePage', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('test handle editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('test handle removeExpense', ()=>{
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});
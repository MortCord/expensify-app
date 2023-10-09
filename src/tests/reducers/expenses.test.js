import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('test default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('test remove expense by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('test not remove expense if id not found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'smth'
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('test add expense', ()=>{
    const expense = {
        id: '3',
        description: 'dsc',
        note: '',
        amount: 0,
        createdAt: 0
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test('test edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{note:'hello'}
    }
    const state = expensesReducer(expenses,action);

    expect(state[0].note).toEqual('hello');
});

test('test edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'smth',
        updates:{amount: 1}
    }
    const state = expensesReducer(expenses,action);

    expect(state).toEqual(expenses);
});
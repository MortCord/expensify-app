import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('test remove expense', () => {
    const action = removeExpense({ id: '123' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('test edit expense', () => {
   const action = editExpense('123',{note: "New note value"});
   
   expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {note: 'New note value'}
   });
});

test('test add expense with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1,
        createdAt: 1000,
        note: 'note'
    }
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('test add expense with default values', () => {
    const action = addExpense({});

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});
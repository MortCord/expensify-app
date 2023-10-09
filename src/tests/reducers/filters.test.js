import moment from "moment";
import filtersReducer from "../../reducers/filters";

test('test default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('test sortBy amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('test sortBy date', () =>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('test text filter', () =>{
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'text'});

    expect(state.text).toBe('text');
});

test('test startDate filter', () =>{
    const date = moment();

    const state = filtersReducer(undefined, {type: 'SET_START_DATE',date: date});

    expect(state.startDate).toEqual(date);
});

test('test endDate filter', () =>{
    const date = moment();

    const state = filtersReducer(undefined, {type: 'SET_END_DATE',date: date});

    expect(state.endDate).toEqual(date);
});
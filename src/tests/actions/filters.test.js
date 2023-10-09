import moment from "moment";
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";

test('test generate set start date obj', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('test generate set end date obj', () =>{
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

test('test sort by amount obj', () =>{
    const action = sortByAmount();

    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test('test sort by date obj', () =>{
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('test set text filter obj with provided value', () =>{
    const action = setTextFilter('text');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    });
});

test('test set text filter obj with default value', () =>{
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() =>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate} />);
});

test('test render ExpenseListFilters', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('test render ExpenseListFilters with alt data', () =>{
    wrapper.setProps({
        filters: altFilters
    });

    expect(wrapper).toMatchSnapshot();
});

test('test handle text change', () => {
    const value = 'abc';
    wrapper.find('input').simulate('change',{
        target:{
            value
        }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('test sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    });

    expect(sortByDate).toHaveBeenCalled();
});

test('test sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('test handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days');

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('test handle date focus changes', () =>{
    const calendarFocused = 'endDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')({ calendarFocused });

    expect(wrapper.state('calendarFocused')).toEqual({calendarFocused});
});
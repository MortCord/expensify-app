import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test('test render ExpenseDashboardPage', () =>{
    const wrapper = shallow(<ExpenseDashboardPage />);

    expect(wrapper).toMatchSnapshot();
});
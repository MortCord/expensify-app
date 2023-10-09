import moment from "moment";

export default [{
    id: '1',
    description: 'dsc',
    note: '',
    amount: 1,
    createdAt: 0
}, {
    id: '2',
    description: 'desc2',
    note: '',
    amount: 2,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'desc3',
    note: '',
    amount: 3,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
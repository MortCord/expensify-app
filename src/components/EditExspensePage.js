import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

export class EditExspensePage extends React.Component{
    onSubmit = (expense) =>{
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = (expense) =>{
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h1>Edit expense</h1>
                <ExpenseForm isAddOrEdit={"Edit"} onSubmit={this.onSubmit} expense={this.props.expense} />
                <button onClick={this.onRemove}>Remove</button>
        </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});


const mapDispatchToProps = (dispatch, props) =>({
    editExpense: (id,expense) => dispatch(editExpense(id,expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExspensePage);
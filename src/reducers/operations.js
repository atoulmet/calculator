import * as _ from 'lodash';
import mexp from 'math-expression-evaluator';

const initialState = {
    operations: [],
    lastInput: '',
    result: ''
}

const cleanLastDot = (operations, length) => {
    let string = operations[length - 1];
    string = string.slice(0, -1);
    if (string.includes('.') === false) {
        if (string === '') {
            string = '0';
        }
        operations[length - 1] = string;
    }
    return operations;
}

const operations = (state = initialState, action) => {
    switch (action.type)
    {
    
    case 'ADD_NUMBER':
    {
        const input = action.input;
        let operations = _.cloneDeep(state.operations);
        if (!isNaN(state.lastInput) || state.lastInput === '' || state.lastInput === '.') {
            let previousNumber = operations[operations.length - 1];
            if (previousNumber === undefined) {
                previousNumber = '';
            }
            if ((input === '.' && state.lastInput) === '.' || (input === '.' && previousNumber.includes('.'))) {
                return { ...state, lastInput: '.', operations };
            }
            let length = operations.length - 1;
            if (operations.length === 0) {
                length = 0;
            }
            if (previousNumber.length > 16) {
                return { ...state };
            }
            operations[length] = previousNumber.concat(input);
        }
        else {
            operations[operations.length] = input;
        }

        return { ...state, lastInput: input, operations, result: '' };
    }

    case 'ADD_OPERATOR':
    {
        let operations = state.operations;
        const input = action.input;
        const lastInput = state.lastInput;
        let length = operations.length;
        
        if (operations.length === 0) {
            operations.push('0');
        }
        if (lastInput === '.') {
            operations = cleanLastDot(operations, length);
        }
        if (lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/') {
            operations[length - 1] = input;          
        }
        else {
            operations.push(input);
        }
        return { ...state, lastInput: input, operations, result: '' };
    }

    case 'GET_RESULT':
    {
        let operations = _.cloneDeep(state.operations);
        if (isNaN(state.lastInput) === true && state.lastInput !== '.') {
            operations.push('0');
        }
        if (state.lastInput === '.') {
            operations = cleanLastDot(operations, operations.length);
        }
        const opToString = operations.toString();
        const epurString = opToString.replace(/,/g, '');
        const result = mexp.eval(epurString);
        if (isNaN(result) === true || result === 'Infinity' || result === -Infinity ) {
            return { ...state, result: 'error'};
        }
        return { ...state, result };
    }

    case 'CLEAR_STORE':
    {
        return {
            operations: [], lastInput: '', result: ''
        }
    }

    default:
        return state;
    }
}

export default operations;
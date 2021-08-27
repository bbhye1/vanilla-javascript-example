import { setState, getState } from './services';

describe('sevices', () => {
    it('changeInput', () => {
        expect(getState('inputValue')).toBe('');
        
        const inputValue = '할일 1';
        
        setState('changeInput', inputValue );
        
        expect(getState('inputValue')).toBe(inputValue);
    });
    
    it('focusIn', () => {
        expect(getState('inputFocus')).toBeFalsy();
        
        setState('focusIn');
        
        expect(getState('inputFocus')).toBeTruthy();
    });
    
    it('addTodo', () => {
        setState('addTodo', '할일 1');
        
        expect(getState('todos')).toContain('할일 1');
    });
    
    it('deleteTodo', () => {
        setState('deleteTodo', 0);
        
        expect(getState('todos').length).toBe(0);
    });
});

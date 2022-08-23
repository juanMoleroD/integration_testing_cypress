import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let operatorAdd;
  let operatorSubtract;
  let operatorMultiply;
  let operatorDivide;
  let operatorEquals;
  let runningTotal;
  
  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    operatorEquals = container.getByTestId("operator-equals");    
    operatorAdd = container.getByTestId("operator-add");    
    operatorSubtract = container.getByTestId("operator-subtract");    
    operatorMultiply = container.getByTestId("operator-multiply");    
    operatorDivide = container.getByTestId("operator-divide");    
    runningTotal = container.getByTestId("running-total")

  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it("should be able to add two numbers", () => {
    fireEvent.click(button4);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should be able to substract", () => {
    fireEvent.click(button7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual("3");
  });
  
  it("should be able to multiply", () => {
    fireEvent.click(button5);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button3);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual("15")
  });

  it("should be able to divide", () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatorDivide);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual("3")
  });

  it("should concatenate several numbers one after the other", () => {
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual("123");
  });

  it("should chain multiple operations together", () => {
    fireEvent.click(button2);
    fireEvent.click(operatorAdd);
    fireEvent.click(button8);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button2);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button5);
    fireEvent.click(operatorDivide);
    fireEvent.click(button3);
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual("5")
  });

  it("should clear the running total without affecting the calculation", () => {
    const clear = container.getByTestId("clear")
    fireEvent.click(button1);
    fireEvent.click(operatorAdd);
    fireEvent.click(button2);
    fireEvent.click(operatorEquals);
    fireEvent.click(clear);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1)
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual("4")
  });

})


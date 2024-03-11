import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './index.jsx';

describe('Input component', () => {
  test('Renders with provided props', () => {
    const props = {
      name: 'ایمیل',
      id: 'email',
      typeInput: 'text',
      state: { value: '' },
      setState: jest.fn(),
      isVisible: true
    };

    const { getByLabelText } = render(<Input {...props} />);
    const inputElement = getByLabelText(props.name);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', props.id);
    expect(inputElement).toHaveAttribute('type', props.typeInput);
    expect(inputElement).toHaveValue(props.state.value);
  });

  test('Updates input value on change', () => {
    const props = {
      name: 'پسورد',
      id: 'password',
      typeInput: 'password',
      state: { value: '' },
      setState: jest.fn(),
      isVisible: true
    };

    const { getByLabelText } = render(<Input {...props} />);
    const inputElement = getByLabelText(props.name);

    fireEvent.change(inputElement, { target: { value: 'Mobina1324' } });

    expect(props.setState).toHaveBeenCalledWith({ value: 'Mobina1324' });
  });

  test('Toggles input visibility on eye icon click', () => {
    const props = {
      name: 'Password',
      id: 'password',
      typeInput: 'password',
      state: { value: 'Mobina1324' },
      setState: jest.fn(),
      isVisible: true
    };

    const { getByLabelText, getByTestId } = render(<Input {...props} />);
    const inputElement = getByLabelText(props.name);
    const eyeIcon = getByTestId('eyeIcon');

    fireEvent.click(eyeIcon);

    expect(inputElement).toHaveAttribute('type', 'text');

    fireEvent.click(eyeIcon);

    expect(inputElement).toHaveAttribute('type', 'password');
  });
});

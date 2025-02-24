import React, { useEffect, useRef } from 'react';

export type InputStates = 'DISMESSAGE' | 'DISABLED' | 'ENABLED' | 'ERROR' | 'HELP';
export type InputTypes = 'TEXT' | 'AMOUNT' | 'DECIMALAMOUNT' | 'SECUREKEY' | 'PHONE' | 'SUM';
export interface InputProps {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  type?: InputTypes;
  status?: InputStates;
  required?: string;
  message?: string;
  onChange?: any;
}
export const Input: React.FC<InputProps> = ({
  name = '',
  label = '',
  value = '',
  placeholder = '',
  type = 'TEXT',
  status = 'ENABLED',
  required = 'false',
  message = '',
  onChange = () => null
}) => {
  const inputSearch = useRef<HTMLBdbAtInputElement>();
  useEffect(() => {
    inputSearch.current?.addEventListener('atInputChanged', onChange);
    return () => {
      inputSearch.current?.removeEventListener('atInputChanged', onChange);
    };
  }, [status, value]);
  return (
    <bdb-at-input
      data-testid="input-component"
      name={name}
      ref={inputSearch}
      label={label}
      value={value}
      placeholder={placeholder}
      type={type}
      status={status}
      required={required}
      message={message}
    ></bdb-at-input>
  );
};

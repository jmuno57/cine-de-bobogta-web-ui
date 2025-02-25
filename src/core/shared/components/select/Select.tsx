import React, { useEffect, useRef } from 'react'

interface ISelectProps {
    name?: string
    label?: string
    message?: string
    value?: any
    placeholder?: string
    status?: 'ENABLED' | 'DISABLED' | 'ERROR'
    palaceholder?: string
    options?: { text: string; value: string }[]
    onChange?: any
}
export const Select: React.FC<ISelectProps> = ({
    name = '',
    label = '',
    message = '',
    status = 'ENABLED',
    value,
    placeholder = '',
    options = [],
    onChange = () => null
}) => {
    const dropdownProduct = useRef<any>()
    useEffect(() => {
        dropdownProduct?.current?.addEventListener('elementSelectedAtom', onChange)
        return () => {
            dropdownProduct?.current?.removeEventListener('elementSelectedAtom', onChange)
        }
    }, [status, value])

    useEffect(() => {
        if (value) {
            dropdownProduct.current?.setValue(value)
        }
    }, [value])
    return (
        <bdb-at-dropdown
            ref={dropdownProduct}
            data-testid="select-component"
            name={name}
            label={label}
            message={message}
            status={status}
            placeholder={placeholder}
            options={JSON.stringify(options)}
        ></bdb-at-dropdown>
    )
}

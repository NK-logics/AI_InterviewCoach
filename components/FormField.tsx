import React from 'react'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

// 1. Define generic prop interface
interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'file'
}

// 2. Use generic properly in the component definition
const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = '',
  type = 'text'
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input 
                className="input" 
                type={type} 
                placeholder={placeholder} 
                {...field} 
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormField

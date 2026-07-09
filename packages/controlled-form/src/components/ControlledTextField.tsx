import { TextField, TextFieldProps } from "@mui/material"
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form"

type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  label?: string
} & Omit<TextFieldProps, "name" | "value" | "onChange">

// RHF Controller + MUI TextField 래퍼 (도메인 중립)
const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  label,
  ...textFieldProps
}: ControlledTextFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...textFieldProps}
          label={label}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          fullWidth
        />
      )}
    />
  )
}

export default ControlledTextField

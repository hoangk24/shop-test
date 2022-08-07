// import { FormHelperText, Input } from "@mui/material";
// import React from "react";
// import { Controller, ControllerProps } from "react-hook-form";

// interface Props extends Omit<ControllerProps, "render"> {}

// export default function InputForm({ control, name }: Props) {
//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({
//         field: { name, onBlur, onChange, ref, value },
//         fieldState: { isDirty, isTouched, error },
//         formState,
//       }) => (
//         <div>
//           <Input
//             onChange={onChange}
//             inputRef={ref}
//             onBlur={onBlur}
//             value={value}
//           />
//           <FormHelperText>Error</FormHelperText>
//         </div>
//       )}
//     />
//   );
// }

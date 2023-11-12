import React from "react";
import { Form } from "react-bootstrap";
import { DeepRequired, FieldError, FieldErrors, FieldErrorsImpl, LiteralUnion, Merge, UseFormRegister } from "react-hook-form";

interface IdObj {
  [key: string]: string;
}

interface IFloatingGroup<TFieldValues> extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  register?: UseFormRegister<TFieldValues> | undefined;
  errors?: FieldError;
  label: string;
  errorMsg?: string | undefined;
  field?: string;
  groupClasses?: string;
  fieldTextArea?: boolean;
  inputClass?:string;
  hideLabels?:boolean;
}

const FloatingFormGroup: React.FC<IFloatingGroup<IdObj>> = (props) => {
  const { register, groupClasses, label, field, errors, fieldTextArea, inputClass, hideLabels, ...rest } = props;
  const changeInput = React.useCallback((el: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = el.target as HTMLInputElement | HTMLTextAreaElement;
    if (target.value !== "") {
      target?.parentElement?.classList.add("up");
    }
    else {
      target?.parentElement?.classList.remove("up");
    }
  }, []);

  return (
    <Form.Group className={`form-group ${errors ? 'is-invalid' : ''}`}>
      {!hideLabels ? <label htmlFor={rest.id}>{label}</label> : <></>}
      {!fieldTextArea ?
        <input
          className="form-control"
          {...field && register ? register(field) : {}}
          {...rest}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInput(e)}
        /> :
        <textarea
          className={`form-control ${inputClass ? inputClass : ''}`}
          {...field && register ? register(field) : {}}
          {...rest}
          rows={4}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeInput(e)}
        />}
      {
        errors ? <div className="invalid-feedback fs-12">{errors?.message}</div> : <></>
      }
    </Form.Group>
  )
}

FloatingFormGroup.displayName = "Floating Form Group"
export default FloatingFormGroup;
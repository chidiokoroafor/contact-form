import { useField } from "formik"

const MyCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({...props, type:'checkbox'})
  return (
      <div>
          <label className="flex items-center gap-3">
              <input className={`cursor-pointer size-5 accent-Green-600 ${field.checked ? 'text-Green-600':'bg-none'}`} type="checkbox" {...field} {...props} />
              {children}
          </label>
          {meta.touched && meta.error ? (<div className="text-Red">{ meta.error }</div>):null}
    </div>
  )
}

export default MyCheckBox
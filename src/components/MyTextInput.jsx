import { useField } from "formik"

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
  return (
      <div className="w-full">
          <label className="block mb-2" htmlFor={props.id || props.name}>{label} *</label>
          <input className={` w-full border-2 border-Grey-500 ${meta.touched && meta.error ? 'border-Red':'border-Grey-50000'} outline-none rounded-md py-2 px-3 focus:border-Green-600`} {...field} {...props} />
          {meta.touched && meta.error ? (<div className="text-Red">{ meta.error }</div>):null}
    </div>
  )
}

export default MyTextInput
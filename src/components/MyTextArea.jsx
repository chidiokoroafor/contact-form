import { useField } from "formik"

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField({...props, type:"textarea"})
  return (
      <div className="w-full">
           <label className="block mb-2" htmlFor={props.id || props.name}>{label}</label>
          <textarea className={`border-2 p-2 outline-none focus:border-Green-600 border-Grey-500 w-full rounded-md ${meta.touched && meta.error ? 'border-Red':'border-Grey-500'}`} {...field} {...props} ></textarea>
          {meta.touched && meta.error ? (<div className="text-Red">{ meta.error }</div>):null}
    </div>
  )
}

export default MyTextArea
import { useField } from "formik"

const MyRadioButton = ({ children, ...props }) => {
     const [field, meta] = useField({...props, type:'radio'})
  return (
      <div className=" w-full ">
          <label className={`border-2 border-Grey-500 rounded-md py-2 px-3 flex items-center gap-3 ${field.checked?'bg-Green-200 border-Green-600 border-2':'bg-none'}`}>
              <input className={` rounded-full accent-Green-600  size-4 hover:accent-Green-600  focus:accent-Green-600  border `} type="radio" {...field} {...props} />
              {children}
          </label>
          {meta.touched && meta.error ? (<div className="text-Red">{ meta.error }</div>):null}
    </div>
  )
}

export default MyRadioButton
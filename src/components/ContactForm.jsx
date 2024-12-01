import { Form, Formik } from "formik"
import * as Yup from "yup"
import MyTextInput from "./MyTextInput"
import MyRadioButton from "./MyRadioButton"
import MyTextArea from "./MyTextArea"
import MyCheckBox from "./MyCheckBox"
import { toast } from "sonner"

const ContactForm = () => {
  return (
      <Formik
          initialValues={{ firstName: "", lastName: "", email: "", queryType: "", acceptToBeContacted: false, message:"" }}
          validationSchema={Yup.object({
              firstName: Yup.string().min(3,"Must be 3 characters or more").required("Required"),
              lastName: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
              email: Yup.string().email("Invalid email address").required("Required"),
              acceptToBeContacted: Yup.boolean().required("Required").oneOf([true], "You must consent to be contacted by the team"),
              queryType: Yup.string().oneOf(['general entity', 'support request'], "Must choose a query type").required("Required"),
              message: Yup.string().required("Required")
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                    resetForm()
                  toast.success("Message sent successfully!")
                  setSubmitting(false)
              },400)
          }}
      >
          <Form  className="space-y-6">
              <div className="flex flex-col sm:flex-row  gap-2">
                   <MyTextInput label="First Name" name="firstName" type="text"  />
                   <MyTextInput label="Last Name" name="lastName" type="text"  />
              </div>
              <MyTextInput label="Email Address" name="email" type="email" />
              
              <div>
                  <div className="mb-2">Query Type *</div>
                  <div className="flex flex-col sm:flex-row gap-2">
                      <MyRadioButton name="queryType" value="general entity">
                      General Enquiry
                    </MyRadioButton>
                    <MyRadioButton name="queryType" value="support request">
                        Support Request
                    </MyRadioButton>
                  </div>
                  
              </div>

              <MyTextArea name="message" label="Message " rows="5" />
              <MyCheckBox name="acceptToBeContacted" >
                  I consent to being contacted by the team *
              </MyCheckBox>

              <button className="bg-Green-600 mt-6 block text-White text-sm w-full py-3 rounded-lg hover:bg-Grey-900" type="submit">Submit</button>
             
          </Form>
          
    </Formik>
  )
}

export default ContactForm
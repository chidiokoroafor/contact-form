import { Toaster } from "sonner"
import ContactForm from "./components/ContactForm"

function App() {

  return (
    <main className="w-full min-h-screen font-Karla bg-Green-200  text-Grey-900 flex justify-center items-center">
      <Toaster richColors position="top-center" />
      <section className="w-[90%] max-w-[670px] bg-White rounded-xl p-6">
        <h2 className="font-bold text-2xl mb-4">Contact Us</h2>
        <ContactForm />
    </section>
    </main>
  )
}

export default App

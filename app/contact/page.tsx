import ContactClient from "./client-side";

export const metadata = {
  title: "Contact",
  description: "Vous avez un projet ? Laissez un message"
}

const ContactPage = () => {
  return (
    <ContactClient />
  )
}

export default ContactPage;
import ContactComponent from "@/components/general/contact-component";
import { getContact } from "@/contentful/contact";

export default async function Contact() {
  const contactPageProps = await getContact();

  if (!contactPageProps) return null;

  return <ContactComponent contactPageProps={contactPageProps} />;
}

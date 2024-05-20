"use client";
import { useState } from "react";
import InformationPanel from "@/components/general/information-panel";
import GrayPanel from "@/components/general/gray-panel";
import MessageSentComponent from "./message-sent";
import InputField from "./input-field";
import LinkComponent from "./link-component";

type Props = {
  contactPageProps: {
    firstNameTitle: string;
    lastNameTitle: string;
    companyTitle: string;
    messageTitle: string;
    buttonSendTitle: string;
    headerTitle: string;
    messageSentSuccessTitle: string;
    messageSentSuccessText: string;
  };
};

export default function ContactComponent({ contactPageProps }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const {
    firstNameTitle,
    lastNameTitle,
    companyTitle,
    messageTitle,
    buttonSendTitle,
    headerTitle,
    messageSentSuccessTitle,
    messageSentSuccessText
  } = contactPageProps;

  if (isSubmitted) {
    return (
      <MessageSentComponent headerTitle={headerTitle} messageSentText={messageSentSuccessText} messageSentTitle={messageSentSuccessTitle}/>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center content-center">
      <InformationPanel headerTitle={headerTitle ?? ""}>
        <GrayPanel>
          <form action="/" name="contact" className="flex flex-col space-y-6 w-[90%] md:w-[80%] lg:w-[70%] mx-auto pb-[15px]" data-netlify="true">
            <InputField
              label={firstNameTitle}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              label={lastNameTitle}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputField
              label={companyTitle}
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <InputField
              label={messageTitle}
              name="message"
              value={formData.message}
              onChange={handleChange}
              type="textarea"
            />
            <button
              type="submit"
              className="font-dePixelHalbfett text-black !text-[15px] !text-blue-500 underline"
            >
              {buttonSendTitle}
            </button>
          </form>
        </GrayPanel>
      </InformationPanel>
    </main>
  );
}

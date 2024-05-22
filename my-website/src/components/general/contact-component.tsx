"use client";
import { useState } from "react";
import InformationPanel from "@/components/general/information-panel";
import GrayPanel from "@/components/general/gray-panel";
import MessageSentComponent from "./message-sent";
import InputField from "./input-field";
import Text from "./text-component";

type Props = {
  contactPageProps: {
    fullNameTitle: string;
    emailTitle: string;
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
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const myForm = event.target as HTMLFormElement;
      const formData = new FormData(myForm);
      const formBody = new URLSearchParams(formData as any).toString();

      console.log("Form data being sent:", formBody);

      const res = await fetch("/thankyou.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      console.log("Response status:", res.status);

      if (res.status === 200) {
        setIsSubmitted(true);
      } else {
        setErrors(["Submission failed. Please try again."]);
        setIsSubmitted(false);
      }
    } catch (e) {
      setErrors(["Submission failed. Please try again."]);
      setIsSubmitted(false);
    }
  };

  const validateForm = (data: typeof formData) => {
    const newErrors = [];
    if (!data.fullName) newErrors.push("Full Name is required.");
    if (!data.email) newErrors.push("Email is required.");
    if (!data.company) newErrors.push("Company is required.");
    if (!data.message) newErrors.push("Message is required.");
    return newErrors;
  };

  const {
    fullNameTitle,
    emailTitle,
    companyTitle,
    messageTitle,
    buttonSendTitle,
    headerTitle,
    messageSentSuccessTitle,
    messageSentSuccessText,
  } = contactPageProps;

  if (isSubmitted) {
    return (
      <MessageSentComponent
        headerTitle={headerTitle}
        messageSentText={messageSentSuccessText}
        messageSentTitle={messageSentSuccessTitle}
      />
    );
  }

  return (
    <main className="flex flex-col items-center justify-center content-center">
      <InformationPanel headerTitle={headerTitle ?? ""}>
        <GrayPanel>
          <form
            name="contact"
            data-netlify="true"
            className="flex flex-col space-y-6 w-[90%] md:w-[80%] lg:w-[70%] mx-auto pb-[15px]"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <InputField
              type="text"
              label={fullNameTitle}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              type="email"
              label={emailTitle}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="text"
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
            {errors.length > 0 &&
              errors.map((error, index) => (
                <Text className="text-red-500" key={index}>
                  {error}
                </Text>
              ))}
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

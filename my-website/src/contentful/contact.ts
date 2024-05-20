import {
  TypeContactPageSkeleton,
  TypeExperiencePageSkeleton
} from "@/contentful/types";
import { client } from "./contentful-client";

export const getContact = async () => {
  const result = await client.withoutUnresolvableLinks.getEntries<
    TypeContactPageSkeleton
  >({
    content_type: "contactPage",
    limit: 100,
    include: 10,
  });

  if (!result) return null;

  const { firstNameTitle, lastNameTitle, companyTitle, messageTitle, buttonSendTitle, headerTitle, messageSentSuccessText, messageSentSuccessTitle} = result?.items[0].fields;

  return { firstNameTitle, lastNameTitle, companyTitle, messageTitle, buttonSendTitle, headerTitle, messageSentSuccessText, messageSentSuccessTitle};
};

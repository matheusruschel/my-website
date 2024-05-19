import {
  TypeExperiencePageSkeleton
} from "@/contentful/types";
import { client } from "./contentful-client";

export const getExperience = async () => {
  const result = await client.withoutUnresolvableLinks.getEntries<
    TypeExperiencePageSkeleton
  >({
    content_type: "experiencePage",
    limit: 100,
    include: 10,
  });

  if (!result) return {};

  const { headerTitle, portfolio, experience } = result?.items[0].fields;

  return { headerTitle, portfolio, experience };
};

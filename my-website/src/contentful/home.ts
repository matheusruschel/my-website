import { TypeHomepageSkeleton } from "@/contentful/types";
import { client } from "./contentful-client";

export const getHome = async () => {
  const result =
    await client.withoutUnresolvableLinks.getEntries<TypeHomepageSkeleton>({
      content_type: "homepage",
      limit: 100,
      include: 10,
    });

  if (!result) return {};

  return result?.items[0].fields;
};

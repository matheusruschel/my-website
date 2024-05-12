import { TypeHomepageSkeleton } from "@/contentful/types";
import { client } from "./contentful-client";

export const getHome = async () => {
  const result =
    await client.withoutUnresolvableLinks.getEntries<TypeHomepageSkeleton>({
      content_type: "homepage",
      include: 10,
    });

  if (!result) return {};

  const fields = result?.items[0]?.fields;

  return { fields };
};

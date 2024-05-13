import { TypeHeaderSkeleton } from "@/contentful/types";
import { client } from "./contentful-client";

export const getHeader = async () => {
  const result =
    await client.withoutUnresolvableLinks.getEntries<TypeHeaderSkeleton>({
      content_type: "header",
      include: 10,
    });

  if (!result) return {};

  const fields = result?.items[0]?.fields;

  return { fields };
};
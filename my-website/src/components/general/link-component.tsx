import Link from "next/link";
import Text from "./text-component";

type Props = {
  title: string;
  url: string;
};

export default function LinkComponent({ title, url }: Props) {
  return (
    <Link href={url} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Text className="!text-[13px] !text-blue-500 underline" variant="title">
          {title}
        </Text>
      </a>
    </Link>
  );
}

import { ClassNameValue } from "tailwind-merge";

type Props = {
  className?: ClassNameValue;
};

export default function ButtonStack(props: Props) {
  const { className } = props;
  return (
    <main
      className={`h-[200px] w-full ${className}`}
    >
      <Image
      width={50}
      height={50}
      src={"iconString"}
      alt="Logo"
      className={`${className}`}
    />
    </main>
  );
}

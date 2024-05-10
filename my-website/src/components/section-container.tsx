import { ClassNameValue } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: ClassNameValue;
};

export default function SectionContainer(props: Props) {
  const { children, className } = props;
  return (
    <section
      className={`flex w-full px-[20px] md:px-[17px] lg:px-[20px] max-w-[1440px] self-center ${className}`}
    >
      {children}
    </section>
  );
}

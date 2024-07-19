import { Helmet } from "react-helmet-async";

interface TitleProps {
  title?: string;
}
export default function Title(props: TitleProps) {
  const { title } = props;
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

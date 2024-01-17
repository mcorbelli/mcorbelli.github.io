import Link from "next/link";

interface LogoProps {
  redirectPath?: string;
}

function Logo(props: LogoProps) {
  return (
    <Link className="whitespace-nowrap" href={props.redirectPath ?? "/"}>
      Corbelli Mattia
    </Link>
  );
}

export default Logo;

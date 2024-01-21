interface CopyrightProps {
  year: number;
  name: string;
}

function Copyright(props: CopyrightProps) {
  return (
    <span className="block text-sm text-gray-600 sm:text-center">
      © {props.year} <b>{props.name}</b>. Tutti i diritti riservati.
    </span>
  );
}

export default Copyright;

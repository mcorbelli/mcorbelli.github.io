import { ReactNode } from "react";

import Animation from "@/components/animation";

interface RootTemplateProps {
  children: ReactNode;
}

function RootTemplate(props: RootTemplateProps) {
  return <Animation>{props.children}</Animation>;
}

export default RootTemplate;

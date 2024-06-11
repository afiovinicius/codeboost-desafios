import { RenderComponentStyle } from "@/functions";

import { SectionRender } from "./styles";

export default function RootPage() {
  return (
    <RenderComponentStyle asElement={"section"} asStyle={SectionRender}>
      <h2>Codeboost Spider</h2>
    </RenderComponentStyle>
  );
}

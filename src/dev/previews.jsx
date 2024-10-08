import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Cards from "../components/propsComponents/Cards.jsx";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path = "/Cards" >
      <Cards />
    </ComponentPreview >
  </Previews>;
};

export default ComponentPreviews;

import './App.css';

import CheckboxesTags from "./components/Checkboxes";
import ComboBox from "./components/Combobox";
import CountrySelect from "./components/Countryselect";
import FixedTags from "./components/Fixedoptions";
import FreeSolo from "./components/Freesolo";
import Grouped from "./components/Grouped";
import Playground from "./components/Playground";
import BasicButtons from "./components/Basicbutton";
import ColorButtons from "./components/Color";
import TextButtons from "./components/Textbutton";
import ContainedButtons from "./components/Containedbutton";
import IconLabelButtons from "./components/Iconslabel";
import OutlinedButtons from "./components/outlinedbutton";
import ButtonSizes from "./components/Sizes";
import IconButtons from "./components/Iconbutton";
import IconButtonSizes from "./components/IconSizes";
import IconButtonColors from "./components/Colorsbutton";
import LoadingIconButton from "./components/Loading";
import InputFileUpload from "./components/fileupload";
import ButtonBaseDemo from "./components/Complexbutton";
import BasicButtonGroup from "./components/Basicbuttongroup";
import VariantButtonGroup from "./components/Buttonvariants";
import GroupOrientation from "./components/Buttongroupsizesandcolors";


function App() {
  return (
    <div className="App">
      <ComboBox />
      <Playground />
      <CountrySelect />
      <FreeSolo />
      <Grouped />
      <FixedTags />
      <CheckboxesTags />
      <BasicButtons />
      <TextButtons />
      <ContainedButtons />
      <OutlinedButtons />
      <ColorButtons />
      <ButtonSizes />
      <IconLabelButtons />
      <IconButtons />
      <IconButtonSizes />
      <IconButtonColors />
      <LoadingIconButton />
      <InputFileUpload />
      <ButtonBaseDemo />
      <BasicButtonGroup />
      <VariantButtonGroup />
      <GroupOrientation />
    </div>
  );
}

export default App;

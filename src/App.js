import './App.css';
import SimpleAlert from "./Components/Alert";
import AutoComplete from "./Components/Autocomplete";
import ImageAvatars from "./Components/Avatar";
import SimpleBackdrop from "./Components/Backdrop";
import ColorBadge from "./Components/Badge";
import BasicButtons from "./Components/button";
import GroupSizesColors from "./Components/buttongroup";
import Checkboxes from "./Components/Checkbox";
import ClickableAndDeletableChips from "./Components/Chip";
import SimpleDialogDemo from "./Components/Dialog";
import IntroDivider from "./Components/Divider";
import FloatingActionButtons from "./Components/Fab";
import FloatingActionButtonExtendedSize from "./Components/Fab1";
import SvgMaterialIcons from "./Components/Icons";
import FolderList from "./Components/List";
import CircularColor from "./Components/Progress";
import RadioButtonsGroup from "./Components/Radio";
import BasicRating from "./Components/Rating";
import SelectOtherProps from "./Components/Select";
import Variants from "./Components/Skeleton";
import DiscreteSliderMarks from "./Components/Slider";
import SimpleSnackbar from "./Components/Snackbar";
import ColorSwitches from "./Components/Switch";
import BasicTable from "./Components/Table";
import InputAdornments from "./Components/TextField";
import ToggleButtons from "./Components/ToggleButton";
import PositionedTooltips from "./Components/Tooltip";
import TransferList from "./Components/TransferList";
import Types from "./Components/Typography";


function App() {
  return (
    <div className="App1">
      <AutoComplete />
      <BasicButtons />
      <GroupSizesColors />
      <Checkboxes />
      <FloatingActionButtons />
      <FloatingActionButtonExtendedSize />
      <RadioButtonsGroup />
      <BasicRating />
      <SelectOtherProps />
      <DiscreteSliderMarks />
      <ColorSwitches />
      <InputAdornments />
      <TransferList />
      <ToggleButtons />
      <ImageAvatars />
      <ColorBadge />
      <ClickableAndDeletableChips />
      <IntroDivider />
      <SvgMaterialIcons />
      <FolderList />
      <BasicTable />
      <PositionedTooltips />
      <Types />
      <SimpleAlert />
      <SimpleBackdrop />
      <SimpleDialogDemo />
      <CircularColor />
      <Variants />
      <SimpleSnackbar />
    </div>
  );
}

export default App;

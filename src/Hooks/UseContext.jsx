import { useState, createContext, useContext as useReactContext, useEffect } from "react";
import PropTypes from "prop-types";
import OpenInFullSharpIcon from '@mui/icons-material/OpenInFullSharp';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

// Create the context
const ContextProvider = createContext();

// Provider component
export const ProviderContext = ({ children }) => {

  const OptionsData = [
    {
      id: 1,
      name: 'Dimensions',
      icon: <OpenInFullSharpIcon />,
      content: 'Mention your width and height in Inches...',
    },
    {
      id: 2,
      name: 'Frame',
      icon: <SpaceDashboardOutlinedIcon />,
      content: 'Select Your Frame Type...',
    },
    {
      id: 3,
      name: 'Finish',
      icon: <WaterDropOutlinedIcon />,
      content: 'Try with different Finish Type...',
    },
    {
      id: 4,
      name: 'Gods',
      icon: <PeopleAltOutlinedIcon />,
      content: 'Select the God Photo...',
    },
    {
      id: 5,
      name: 'Accessories',
      icon: <LayersOutlinedIcon />,
      content: 'Add some Accessories...',
    }
  ]

  const [pageNumber, setPageNumber] = useState(0);
  const [frameNumber, setFrameNumber] = useState(0);
  const [finishNumber, setFinishNumber] = useState(0);
  const [accessoryNumber, setAccessoryNumber] = useState(null)

  const [editwidthandHeight, setEditwidthandHeight] = useState(true)

  const [WidHieData, setWidHieData] = useState({
    width: 25,
    height: 10
  })

  const [width, setWidth] = useState(25);
  const [height, setHeight] = useState(25);

  const [ ShowingHeight , setShowingHeight ] = useState()
  const [ ShowingWidth , setShowingWidth ] = useState()

  const [ FinallySelectedImage  , setFinallySelectedImage  ] = useState([]);

  const [TotalGodsCount , setTotalGodCount ] = useState(3)

  useEffect(() => {

    const givenValuesInInches = width * 96 * 0.4 ;

    const givenValues2InInches = height *  96 * 0.46 ;

    const  displayHeight = 700 / 2325  * givenValuesInInches;

    const displayWidth = 300 / 480 * givenValues2InInches
    
    setShowingHeight(displayHeight);

    setShowingWidth(displayWidth)

  }, [width,height])

  const values = {
    OptionsData,
    pageNumber, setPageNumber,
    frameNumber, setFrameNumber,
    finishNumber, setFinishNumber,
    accessoryNumber, setAccessoryNumber,
    editwidthandHeight, setEditwidthandHeight,
    WidHieData, setWidHieData,
    width, setWidth,
    height, setHeight,
    ShowingHeight , setShowingHeight,
    ShowingWidth , setShowingWidth,
    FinallySelectedImage  , setFinallySelectedImage,
    TotalGodsCount , setTotalGodCount
  };

  return (
    <ContextProvider.Provider value={values}>
      {children}
    </ContextProvider.Provider>
  );
};

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for consuming the context
export const useContext = () => {
  return useReactContext(ContextProvider);
};

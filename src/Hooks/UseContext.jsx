import { useState, createContext, useContext as useReactContext } from "react";
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
            content : 'Mention your width and height in Inches...',
        },
        {
            id: 2,
            name: 'Frame',
            icon: <SpaceDashboardOutlinedIcon />,
            content:'Select Your Frame Type...',
        },
        {
            id: 3,
            name: 'Finish',
            icon: <WaterDropOutlinedIcon />,
            content:'Try with different Finish Type...',
        },
        {
            id: 4,
            name: 'Gods',
            icon: <PeopleAltOutlinedIcon />,
            content:'Select the God Photo...',
        },
        {
            id: 5,
            name: 'Accessories',
            icon: <LayersOutlinedIcon />,
            content:'Add some Accessories...',
        }
    ]

  const [demoData, setDemoData] = useState({ name: 'Sathis', age: 20 });
  const [ pageNumber , setPageNumber ] = useState(0);

  const values = {
    demoData,
    OptionsData,
    setDemoData,
    pageNumber , setPageNumber,
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

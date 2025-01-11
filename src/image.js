// Import all God images
import GodOne from './assets/Images/Gods/GODOne.png';
import GodTwo from './assets/Images/Gods/GODTwo.png';
import GodThree from './assets/Images/Gods/GODThree.png';
import GodFour from './assets/Images/Gods/GODFour.png';

// Import all Frame images
import FrameOne from './assets/Images/Frames/FrameOne.png';
import FrameTwo from './assets/Images/Frames/FrameTwo.png';
import FrameThree from './assets/Images/Frames/FrameThree.png';
import FrameFour from './assets/Images/Frames/FrameFour.png';
import FrameFive from './assets/Images/Frames/FrameFive.png';

// Import all Finish images
import FinishOne from './assets/Images/Finish/FinishOne.jpg';
import FinishTwo from './assets/Images/Finish/FinishTwo.jpg';
import FinishThree from './assets/Images/Finish/FinishThree.jpg';
import FinishFour from './assets/Images/Finish/FinishFour.jpg';

// Import all Accessories
import CornerOne from './assets/Images/Accessories/CornerOne.png';
import LampOne from './assets/Images/Accessories/LampOne.png';
import LampTwo from './assets/Images/Accessories/LampTwo.png';

// Function to map images into an array of objects
const mapImages = (images) => {
    return images.map(({ key, value }) => ({ key, src: value }));
  };
  
  // Map God images
  export const GodImages = mapImages([
    { key: 'GodOne', value: GodOne },
    { key: 'GodTwo', value: GodTwo },
    { key: 'GodThree', value: GodThree },
    { key: 'GodFour', value: GodFour },
  ]);
  
  // Map Frame images
  export const FrameImages = mapImages([
    { key: 'FrameOne', value: FrameOne },
    { key: 'FrameTwo', value: FrameTwo },
    { key: 'FrameThree', value: FrameThree },
    { key: 'FrameFour', value: FrameFour },
    { key: 'FrameFive', value: FrameFive },
  ]);
  
  // Map Finish images
  export const FinishImages = mapImages([
    { key: 'FinishOne', value: FinishOne },
    { key: 'FinishTwo', value: FinishTwo },
    { key: 'FinishThree', value: FinishThree },
    { key: 'FinishFour', value: FinishFour },
  ]);
  
  // Map Accessories
  export const Accessories = mapImages([
    { key: 'CornerOne', value: CornerOne },
    { key: 'LampOne', value: LampOne },
    { key: 'LampTwo', value: LampTwo },
  ]);
  
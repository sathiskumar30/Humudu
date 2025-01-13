// Import all God images
import GodOne from './assets/Images/Gods/GODOne.png';
import GodTwo from './assets/Images/Gods/GODTwo.png';
import GodThree from './assets/Images/Gods/GODThree.png';
import GodFour from './assets/Images/Gods/GODFour.png';

// Import all Frame images
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
import LampTwo from './assets/Images/Accessories/LampOne.png';
import LampOne from './assets/Images/Accessories/LampTwo.png';

// Function to map images into an array of objects
const mapImages = (images) => {
    return images.map(({ key, value , name }) => ({ key, src: value , name }));
  };
  
  // Map God images
  export const GodImages = mapImages([
    { key: 'GodOne', value: GodOne , name :'Kali' },
    { key: 'GodTwo', value: GodTwo ,name :'Brhma' },
    { key: 'GodThree', value: GodThree , name :'Vishnu' },
    { key: 'GodFour', value: GodFour , name : 'Vinayaga' },
  ]);
  
  // Map Frame images
  export const FrameImages = mapImages([
    { key: 'FrameTwo', value: FrameTwo , name : 'Formal' },
    { key: 'FrameThree', value: FrameThree , name : 'Plain' },
    { key: 'FrameFour', value: FrameFour ,  name : 'Wood' },
    { key: 'FrameFive', value: FrameFive , name : 'Classy' },
  ]);
  
  // Map Finish images
  export const FinishImages = mapImages([
    { key: 'FinishOne', value: FinishOne  , name : 'Glassy' },
    { key: 'FinishTwo', value: FinishTwo , name : 'Granite' },
    { key: 'FinishThree', value: FinishThree , name : 'Black' },
    { key: 'FinishFour', value: FinishFour , name : 'Marble'  },
  ]);
  
  // Map Accessories
  export const Accessories = mapImages([
    { key: 'LampOne', value: LampOne , name : 'Indian Lamp' },
    { key: 'LampTwo', value: LampTwo , name : 'Modern Lamp'},
  ]);
  
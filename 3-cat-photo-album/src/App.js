import $ from './components/elements.js';

import ImageViewer from './components/ImageViewer.js';
import Breadcrumb from './components/Breadcrumb.js';
import Nodes from './components/Nodes.js';

import { 
  goToDirectory, goToPath, historyBack, openFile, closeFile 
} from './services/services.js';

export default function App({ history, nodes, filePath, processing }) {
  const onClickDirectory = ({ id, name }) => {
    goToDirectory(id, name);
  };

  const onClickPrevButton = () => {
    historyBack();
  };
  
  const onClickPathName = ({ id }) => {
    if(processing) {
      return;
    }
    
    goToPath(id);
  };

  const onClickFile = ({ filePath }) => {
    openFile(filePath);
  };

  const onCloseModal = () => {
    closeFile();
  };

  return (
    $.div({ id: 'app', class: 'App' }, [
      filePath ? ImageViewer({ filePath, processing, onCloseModal }) : '',
      Breadcrumb({ history, onClickPathName }),
      Nodes({ 
        history,
        nodes, 
        processing,
        onClickDirectory,
        onClickFile,
        onClickPrevButton,
      }),
    ])
  );
}

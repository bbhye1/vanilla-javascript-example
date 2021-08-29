import $ from './elements.js';

export default function ImageViewer({ filePath, onCloseModal }) {
  const handleClickOutSideModal = (e) => {
    if(e.target.className === 'ImageViewer Modal') {
      onCloseModal();
    }
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      onCloseModal();
    }
  });

  return (
    $.div({ class: 'ImageViewer Modal', onclick: handleClickOutSideModal }, [
      $.div({ class: 'content'}, [
        $.img({
          src : 'https://fe-dev-matching-2021-03-'
          + 'serverlessdeploymentbuck-t3kpj3way537'
          +'.s3.ap-northeast-2.amazonaws.com/public'
          + filePath,
        })
      ]),
    ]));
}

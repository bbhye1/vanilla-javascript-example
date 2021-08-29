import $ from './elements.js';

export default function Breadcrumb({ history, onClickPathName }) {
  const handleClickPath = (id) => {
    onClickPathName({ id });
  };

  const breadcrumb = history
    .map(({id, pathName}) => $.div({
      onclick: () => handleClickPath(id)
    }, [pathName]));

  return (
    $.nav({ class: 'Breadcrumb' }, breadcrumb));
}

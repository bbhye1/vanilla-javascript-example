import $ from './elements.js';

export default function Nodes({ 
  history, nodes, processing,
  onClickDirectory, onClickFile, onClickPrevButton,
}) {
  const handler = {
    directory: onClickDirectory,
    file: onClickFile,
    prev: onClickPrevButton,
  };

  const handleClick = ({ id, type, name, filePath }) => {
     handler[type.toLowerCase()]({ id, name, filePath });
  };

  const PrevButton = $.div({ 
      class: 'Node', 
      onclick: () => handleClick({ type: 'prev' }) 
    }, [ $.img({ src: `./assets/prev.png` })]);

  const Loading = $.p({}, ['Loading...']);

  const Nodes = nodes.map(({
    id, name, type, filePath,
  }) => {
    return (
      $.div({ class: 'Node', onclick: () => handleClick({ id, type, name, filePath }) }, [
        $.img({ src: `./assets/${type.toLowerCase()}.png` }),
        $.div({}, [name]),
      ])
    );
  })


  return (
    $.div({ class: 'Nodes' }, 
    processing 
    ? [Loading]
    :[
      history.length > 1 ? PrevButton : '',
      ...Nodes,
    ]));
}

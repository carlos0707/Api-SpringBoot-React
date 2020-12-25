import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';


import BoardContext from '../Board/context';

import { Container } from './styles';

import { setTituloAtividade } from '../../services/back'


export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { grupoDeAtividades, move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
      

    }
  })

  dragRef(dropRef(ref));

  const handleDoubleClick = (data) => {
    //e.preventDefault();
    document.querySelectorAll("p").forEach(function(node){
      node.ondblclick=function(){
        var val=this.innerHTML;
        var input=document.createElement("input");
        input.value=val;
        input.onblur=function(){
          data.titulo=this.value;
          this.parentNode.innerHTML=data.titulo;
          setTituloAtividade(data.id, data.titulo).then(() => {
            alert("Título da atividade atualizado");
          });
        }
        this.innerHTML="";
        this.appendChild(input);
        input.focus();
      }
    });
  }

  return (
    <Container ref={ref} isDragging={isDragging}>
      <p onDoubleClick={() => handleDoubleClick(data)}>{data.titulo}</p>
      {console.log(data)}
    </Container>
  );
}

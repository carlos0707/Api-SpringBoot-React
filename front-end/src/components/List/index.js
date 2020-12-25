import React, { useState, useContext } from 'react';

import { MdRemove } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';

import { del, setTitulo, setItemAtividade } from '../../services/back'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import BoardContext from '../Board/context';

import Card from '../Card';

import { Container } from './styles';



export default function List({ data, index: listIndex }) {
  const [open, setOpen] = React.useState(false);

  const { grupoDeAtividades } = useContext(BoardContext);

  const [itemInput, setItemInput] = useState('');
  const [alerta, setAlert] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemAtividade(data.id, itemInput)
      .then(() => {
        setItemInput('');
        setAlert(true);
      })
  };


  const handleClick = (id) => {
    if (window.confirm("Você deseja realmente excluir esse grupo de atividades?")) {
      del(id).then(() => {
        alert("removido com sucesso");
        var result = grupoDeAtividades.filter(function (el) {
          return el.id == id;
        });
        for (var elemento of result) {
          var index = grupoDeAtividades.indexOf(elemento);

          grupoDeAtividades.splice(index, 1);
        }
      })
    }
  };

  const handleDoubleClick = (data) => {
    //id.preventDefault();
    document.querySelectorAll("h2").forEach(function(node){
      node.ondblclick=function(){
        var val=this.innerHTML;
        var input=document.createElement("input");
        input.value=val;
        input.onblur=function(){
          data.titulodogrupo=this.value;
          this.parentNode.innerHTML=data.titulodogrupo;
          setTitulo(data).then(() => {
            alert("Título do grupo atualizado");
          });
        }
        this.innerHTML="";
        this.appendChild(input);
        input.focus();
        
      }
    });
  }


  return (
    <Container>
      <header>
        <h2 onDoubleClick={() => handleDoubleClick(data)}>{data.titulodogrupo}</h2>
        
        <button onClick={() => handleClick(data.id)} type="button" id="button1">
          <MdRemove size={15} color="white" />
        </button>
      </header>

      <ul>
        {data.atividades.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
      </ul>


      <button onClick={handleClickOpen} type="button" id="button2">
        <MdAdd size={15} color="white" />
      </button>

      <div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          {alerta && <h3> Atividade adicionada </h3>}
          <DialogTitle id="form-dialog-title">Atividade</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Para adicionar uma atividade clique em salvar.
          </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="titulo"
                label="Descrição da atividade"
                type="text"
                fullWidth
                onChange={event => setItemInput(event.target.value)}
                value={itemInput}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
          </Button>
              <Button type="submit" color="primary">
                Salvar
          </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>


    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import produce from 'immer';
import { getList, setItem } from '../../services/back'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { MdAdd } from 'react-icons/md';

//import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';


//const data = loadLists();

export default function Board() {
  //const [lists, setLists] = useState(data);

  const [itemInput, setItemInput] = useState('');
  const [alert, setAlert] = useState(false);

  const [grupoDeAtividades, setGrupo] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let mounted = true;
    if(grupoDeAtividades.length && !alert){
      return;
    }
    getList()
      .then(items => {
        if (mounted) {
          setGrupo(items)
        }
      })
    return () => mounted = false;
  }, [alert, grupoDeAtividades])

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        setItemInput('');
        setAlert(true);
      })
  };

  function move(fromList, toList, from, to) {
    setGrupo(produce(grupoDeAtividades, draft => {
      const dragged = draft[fromList].atividades[from];

      draft[fromList].atividades.splice(from, 1);
      draft[toList].atividades.splice(to, 0, dragged);

    }))
  }


  return (
    <BoardContext.Provider value={{ grupoDeAtividades, move }}>
      <Container>

        {grupoDeAtividades.map((list, index) => <List key={list.id} titulodogrupo={list.titulodogrupo} index={index} data={list} />)}
        <button onClick={handleClickOpen} type="button" id="button3">
          <MdAdd size={15} color="white" />
        </button>

        <div>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            {alert && <h3> Grupo adicionado </h3>}
            <DialogTitle id="form-dialog-title">Grupo de atividade</DialogTitle>
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <DialogContentText>
                  Para adicionar um grupo de atividade clique em salvar.
              </DialogContentText>

                <TextField
                  autoFocus
                  margin="dense"
                  id="titulo"
                  label="Título do grupo"
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
    </BoardContext.Provider >
  );
}

// ---[ import ]----------------------------------------------------------------
import React, { useState, useContext } from 'react';

/* contexts */
import { InnerWordContexts } from '../contexts/InnerWordContext';

/* lib */
import { deleteInnerWord } from '../lib/Api';

/* type */
import { InnerWord } from '../type/InnerWord';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

/* material-ui icon */
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// ---[ styles ]----------------------------------------------------------------
const useStyles = makeStyles((theme) =>
  createStyles({
    // container
    container: {
      display:            'flex',
      flex:               1,
      flexDirection:      'column',
      padding:            16,
    },
    more_horiz_button: {
      '&:hover': {
        backgroundColor: '#fff !important',
        borderRadius:     25,
      }
    },
    more_horiz_icon: {
      color:             'black',
    },
    more_horiz_menu_item: {
      color:             '#a94442 !important'
    },
  })
);

// ---[ process ]---------------------------------------------------------------
export const InnerWordListMenu = (props: any) => {
  // state
  const {innerWords, setInnerWords} = useContext(InnerWordContexts);
  const [anchorEl, setAnchorEl]     = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);

  // set value
  const data  = props.data;
  const index = props.index;

  // set other value
  const menuOpen = Boolean(anchorEl);
  const classes  = useStyles();

  /* Api logic */
  // Delete InnerWord method
  const onDeleteInnerWord = async(data: InnerWord, index: number) => {
    // DB
    await deleteInnerWord(data.id);

    const newInnerWords = innerWords.filter((innerWord, childindex) => childindex !== index);
    setInnerWords(newInnerWords);
    setAnchorEl(null);
  }

  // menu open & close method
  const handleClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickDialog = (data: InnerWord, index: number) => {
    console.log(data)
    if(data.outside_word || data.really_word || data.so_word){
      setOpenDialog(true);
    } else {
      setAnchorEl(null);
      onDeleteInnerWord(data, index)
    }
  };

  const handleCloseDialog = () => {
    setAnchorEl(null);
    setOpenDialog(false);
  };

  return (
    <>
      <Button
        className={classes.more_horiz_button}
        id='basic-button'
        aria-controls={menuOpen ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClickMenu}
      >
        <MoreHorizIcon className={classes.more_horiz_icon} />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          className={classes.more_horiz_menu_item}
          onClick={() => (handleClickDialog(data, index))}
        >??????
        </MenuItem>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {'??????????????????????????????????????????????????????????????????????????????'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>???????????????</Button>
            <Button
              onClick={() => (onDeleteInnerWord(data, index))}
              autoFocus
            >????????????
            </Button>
          </DialogActions>
        </Dialog>
      </Menu></>
  )

}

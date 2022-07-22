// ---[ import ]----------------------------------------------------------------
import React, { useState, useContext } from 'react';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* type */
import { Thema } from '../type/Thema';

/* lib */
import { deleteTheme } from '../lib/Api';

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
export const ThemaListMenu = (props: any) => {
  // state
  const {themas, setThemas}         = useContext(ThemaContexts);
  const [anchorEl, setAnchorEl]     = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);

  // set value
  const data  = props.data;
  const index = props.index;

  // set other value
  const menuOpen = Boolean(anchorEl);
  const classes  = useStyles();

  // menu open & close method
  const handleClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Delete thema method
  const onDeleteThema = async(data: Thema, index: number) => {
    // DB
    await deleteTheme(data.id);

    // delete theme context {id} object
    const newThemas = themas.filter((thema, childindex) => childindex !== index);
    setThemas(newThemas);
    setAnchorEl(null);
  }

  const handleClickDialog = (data: Thema, index: number) => {
    if(data.inner_word_count > 0){
      setOpenDialog(true);
    } else {
      setAnchorEl(null);
      onDeleteThema(data, index)
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
        >削除
        </MenuItem>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`テーマ「${data.thema}」は、${data.inner_word_count}個の内なる言葉があります。削除しますか？`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>キャンセル</Button>
            <Button
              onClick={() => (onDeleteThema(data, index))}
              autoFocus
            >削除する
            </Button>
          </DialogActions>
        </Dialog>
      </Menu>
    </>
  )

}

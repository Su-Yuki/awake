// ---[ import ]----------------------------------------------------------------
import React, { useState, useContext } from 'react';

import axios from 'axios';

/* contexts */
import { ThemaContexts } from '../contexts/ThemaContext';

/* type */
import { Thema } from '../type/Thema';

/* material-ui */
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button } from '@mui/material';

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
  const {themas, setThemas}     = useContext(ThemaContexts);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // set value
  const data  = props.data;
  const index = props.index;

  // set other value
  const open     = Boolean(anchorEl);
  const classes  = useStyles();

  // menu open & close method
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Delete thema method
  const onDeleteThema = async(id: number, index: number) => {
    try {
      // DB
      await axios.delete(`//localhost/api/thema/delete/${id}`)
      // delete theme context {id} object
      const newThemas = themas.filter((thema, childindex) => childindex !== index);
      setThemas(newThemas);
    } catch (error) {
      console.error(error);
    }
    setAnchorEl(null);
  }

  return (
    <>
      <Button
        className={classes.more_horiz_button}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon className={classes.more_horiz_icon} />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          className={classes.more_horiz_menu_item}
          onClick={() => (onDeleteThema(data.id, index))}
        >削除
        </MenuItem>
      </Menu>
    </>
  )

}

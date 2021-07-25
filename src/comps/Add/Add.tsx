import React, { useState } from 'react';
import './Add.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import db from '../../utilities/db';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

interface IsetItem {
  title: string;
  desc: string;
}

const Add = () => {
  const classes = useStyles();
  const [addItem, setAddItem] = useState({ title: '', desc: '' });
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setAddItem({ ...addItem, [e.target.name]: e.target.value });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const result = db().create(addItem);
  };

  return (
    <div>
      <form className={classes.root + ' add-form mt-3'}>
        <h4 className="text-center">Add ToDo</h4>
        <div className="mb-3">
          <TextField
            id="standard-basic"
            label="Todo Title"
            name="title"
            onChange={(e) => handleChange(e)}
            className="input"
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-multiline-static"
            label="Description"
            name="desc"
            multiline
            rows={5}
            variant="outlined"
            onChange={(e) => handleChange(e)}
            className="input"
          />
        </div>
        <Button
          type="submit"
          className="bg-success text-white"
          onClick={(e) => handleClick(e)}
        >
          Add TODO
        </Button>
      </form>
    </div>
  );
};

export default Add;

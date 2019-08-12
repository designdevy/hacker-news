import React from 'react'

import { Grid, Paper, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';

import { IList } from '../App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      height: '100%'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);

const Table: React.FC<{ keyword: string, list: IList[] }> = ({ list, keyword }) => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} spacing={1} direction='row'>
      {list.map(item =>
        <Grid item xs={2} key={item.objectID}>
          <Paper className={classes.paper} >
            <Typography>Title: <a href={item.url}>{item.title}</a></Typography>
            <Typography>Authors: {item.author}</Typography>
            <Typography>Comments: {item.num_comments}</Typography>
            <Typography>Points: {item.points}</Typography>
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}


export default Table
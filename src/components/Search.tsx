import React from 'react'

import { Grid, makeStyles, createStyles, Theme, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      marginBottom: theme.spacing(3),
      paddingRight: theme.spacing(1),
    },
  })
);

const Search: React.FC<{ keyword: string, handleSearch: (event: any) => void }> = ({ keyword, handleSearch }) => {
  const classes = useStyles()

  return (
    <Grid item xs={2} className={classes.search}>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          id="name"
          label="Search"
          value={keyword}
          onChange={handleSearch}
        />
      </form>
    </Grid>
  )
}
export default Search
import React from 'react'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';

import Search from './Search'
import Table from './Table'

import { IList } from '../App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      width: '100vw'
    },
    subContainer: {
      padding: '2em'
    },
  })
);

const News: React.FC<{ keyword: string, list: IList[], handleSearch: (event: any) => void }> = ({ keyword, handleSearch, list }) => {
  const classes = useStyles()

  return (
    < Grid container className={classes.container} direction='column' >
      <Grid container item xs={12} className={classes.subContainer} justify='center' alignItems='center' >
        <Search keyword={keyword} handleSearch={handleSearch} />
        <Table list={list} keyword={keyword} />
      </Grid>
    </Grid >
  )
}

export default News
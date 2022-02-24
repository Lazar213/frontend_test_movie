import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchInput from 'components/SearchInput';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieCard from 'components/MovieCard';
import { getMovie, getSearchList } from 'store/actions/main';
import config from 'utils/config';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    height: '100%',
  },
  search: {
    margin: '0 auto',
    width: 600,
    paddingBottom: theme.spacing(5),
  },
  content: {
    paddingTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
}));

const INTERVAL = 500;

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { list, movies, isLoading } = useSelector((store) => store.main);

  const [search, setSearch] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchList = useCallback(_.debounce(
    (value) => {
      dispatch(getSearchList({
        q: value,
        d: 'devtest',
      }));
    },
    INTERVAL,
    { maxWait: INTERVAL },
  ), []);

  useEffect(() => {
    fetchList(search);
  }, [fetchList, search]);

  const handleSearchMovie = (option) => {
    if (option && option.id) {
      const params = {
        api_key: config.apiKey,
        language: config.language,
        external_source: config.externalSource,
      };

      dispatch(getMovie(option.id, params));
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.search}>
          <Typography color="textPrimary" variant="h2" align="center">Search Movie</Typography>
          <SearchInput
            onSelectItem={handleSearchMovie}
            onChangeText={setSearch}
            searchText={search}
            options={list}
          />
        </div>
        <Divider />

        <div className={classes.content} onChange={fetchList}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={3} justify="center">
              {movies.map((item) => (
                <Grid key={item.id} item md={3}>
                  <MovieCard item={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Search;

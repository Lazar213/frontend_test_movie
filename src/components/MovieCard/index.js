import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { formatImageLink } from 'utils/pipe';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    cursor: 'pointer',
    paddingBottom: theme.spacing(2),
  },
  header: {
    '& .MuiCardHeader-title': {
      fontSize: theme.spacing(2.5),
      fontWeight: 'bold',
    },
    '& .MuiCardHeader-subheader': {
      fontSize: theme.spacing(1.5),
    },
  },
  media: {
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
}));

const MovieCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.root}>
      <CardHeader
        className={classes.header}
        title={item.title}
        subheader={item.release_date}
      />
      {/* // TODO: Please update poster image url */}
      <div className={classes.media}>
        <img src={formatImageLink(item.poster_path)} alt="poster" />
      </div>
    </Card>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object,
};

MovieCard.defaultProps = {
  item: {},
};

export default MovieCard;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Rat from './Rat.png';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secodary,
      
    },
  }));
const Cell = (props) => {
    const classes = useStyles();

    
    // console.log(props.ans[0][1]);
    //console.log(props.props[0][0]);
    // console.log(props.props.length);    
    return(
      <div className={classes.root}>
         <Grid container spacing={1}>
           <Box p={8}>
             <Grid style={{backgroundColor:"orange"}}  container justify="center">
             <Paper className={classes.paper} style={{ backgroundColor:props.props[0][0]===1 ? "green" : (props.origin[0][0]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[0][1]===1 ? "green" : (props.origin[0][1]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[0][2]===1 ? "green" : (props.origin[0][2]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[0][3]===1 ? "green" : (props.origin[0][3]==0 ? "red" : "white")}} >path</Paper>
             </Grid>
             <Grid container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:props.props[1][0]===1 ? "green" : (props.origin[1][0]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[1][1]===1 ? "green" : (props.origin[1][1]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[1][2]===1 ? "green" : (props.origin[1][2]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[1][3]===1 ? "green" : (props.origin[1][3]==0 ? "red" : "white")}} >path</Paper>
             </Grid>
             <Grid container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:props.props[2][0]===1 ? "green" : (props.origin[2][0]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[2][1]===1 ? "green" : (props.origin[2][1]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[2][2]===1 ? "green" : (props.origin[2][2]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[2][3]===1 ? "green" : (props.origin[2][3]==0 ? "red" : "white")}} >path</Paper>
             </Grid>
             <Grid container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:props.props[3][0]==1 ? "green" : (props.origin[3][0]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[3][1]==1 ? "green" : (props.origin[3][1]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[3][2]==1 ? "green" : (props.origin[3][2]==0 ? "red" : "white")}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:props.props[3][3]==1 ? "green" : (props.origin[3][3]==0 ? "red" : "white")}} >path</Paper>
             </Grid>
             </Box>
             </Grid>
      </div>
    )
  
}

export default Cell;
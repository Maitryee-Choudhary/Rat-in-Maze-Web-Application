import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Rat from './Rat.png';
import Cheese from './Cheese.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
  }));
const Cell = (prop) => {
    const classes = useStyles();

   
    console.log(prop);
         
    return(
      <div className={classes.root}>
         <Grid container spacing={1} container justify="center">
           <Box p={8}>
             <Grid style={{backgroundColor:"orange"}}  container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[0][0]==1 ? "white" : "red"}} ><img src={Rat} width="30px" height="20px" /></Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[0][1]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[0][2]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[0][3]==1 ? "white" : "red"}} >path</Paper>
             </Grid>
             <Grid style={{}}  container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[1][0]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[1][1]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[1][2]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[1][3]==1 ? "white" : "red"}} >path</Paper>
             </Grid>
             <Grid style={{}}  container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[2][0]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[2][1]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[2][2]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[2][3]==1 ? "white" : "red"}} >path</Paper>
             </Grid>
             <Grid style={{}}  container justify="center">
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[3][0]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[3][1]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[3][2]==1 ? "white" : "red"}} >path</Paper>
             <Paper className={classes.paper} style={{backgroundColor:prop.prop[3][3]==1 ? "white" : "red"}} ><img src={Cheese} width="30px" height="16px" /></Paper>
             </Grid>
             </Box>
             </Grid>
        

      
       
        
      </div>
    )
  
}

export default Cell;
import React from 'react';
import Cell from './Cell';
import Table from './Table';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const Maze = () =>{

const maze=[[1,0,0,0],[1,1,0,1],[0,1,0,0],[1,1,1,1]];
const sol=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var result = new Array();
var index=0;
solve(maze,sol,0,0);


function print(sol){
    var newArr = new Array(4);
    for(var i=0;i<newArr.length;i++)  newArr[i]=new Array(4);

    var newArr1 = new Array(4);
    for(var i=0;i<newArr1.length;i++)  newArr1[i]=new Array(4);
  
   
  // console.log(sol.map((row) => row.join(' | ')).join('\n') + '\n');
        for(var i=0;i<4;i++)
        for (var j = 0; j < 4; j++) { 
           newArr[j]= sol.map((row) => row );
           
        
        newArr1[i][j]=newArr[j][i][j];
        //console.log(newArr1[i][j]);
        } 
        //console.log(newArr1);
        result[index++] = newArr1;
        //console.log(result);
    
    
}

function solve(maze,sol,x,y){
    if(x===3 && y===3){
        sol[x][y]=1;
        print(sol);
        return;
    }
    if(x>=0 && x<=3 && y>=0 && y<=3 && maze[x][y]===1){
        sol[x][y]=1;
        solve(maze,sol,x+1,y);
        solve(maze,sol,x,y+1);
        sol[x][y]=0;
    }
}


    return(
        <>
         <Container fixed>
           <Typography component="div" style={{ backgroundColor: '#FFC300', height: '100%'}} >
               <h1 style={{textAlign:'center' , color:'seagreen',margin:'10px'}}>Rat In Maze</h1>
               <h2 style={{textAlign:'center' , color:'seagreen',margin:'10px'}}>BackTracking</h2>
            <Grid container justify="center"><Table  prop={maze}/> </Grid> 
             <Grid container spacing={1}>
                {result.map(function(name, index,arr){
                    console.log(arr[1]);
                   
                    return <Cell props={ arr[index] } origin={maze} ></Cell>;
                  
                  })}
                
                </Grid>
            </Typography>
            </Container>
        </>
    )
}

export default Maze;
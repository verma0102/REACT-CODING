import { Grid, Button } from "@mui/material";
const Student = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h4><span>Name:</span> {props.name}</h4>
        <h4><span>RollNo:</span>{props.rollNo}</h4>
        <Button variant="contained" size='small' onClick={props.old}>x</Button>
      </Grid>
     
    </Grid>
  );
};

export default Student;

import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Student from "./Student";
import "./design.css";

const App = () => {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState({ name: "", rollNo: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })

  }

  const handleClick = () => {
    const rcds = [...records];
    rcds.push(data);
    setRecords(rcds);
    setData({ name: "", rollNo: "" })
  }

  const handleDel = (index) => {
    const rcds = [...records];
    rcds.splice(index, 1);
    setRecords(rcds);
    console.log(index);
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card style={{ maxWidth: 225, margin: '0 auto', padding: '5px 2px' }}>
          <CardContent>
            <TextField
              label="Enter Your Name"
              variant="outlined"
              size="small"
              name="name"
              value={data.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Enter Your RollNo"
              variant="outlined"
              size="small"
              name="rollNo"
              value={data.rollNo}
              onChange={handleChange}
              type="number"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" size="small" onClick={handleClick}>
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {records.map((row, i) => (
        <Grid item xs={12} key={row.rollNo}>
          <Card variant="contained">
            <CardContent>
              <div className="box">
                <Student name={row.name} rollNo={row.rollNo} old={() => handleDel(i)} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default App;

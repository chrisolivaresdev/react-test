import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material"

export const FormComponent = ({newPost, title, body, onInputChange}) => {

  
    return <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Form
        </Typography>
        <Stack spacing={2}>
          <TextField size='small' label="Title" variant="outlined" name='title' value={title} onChange={onInputChange}/>
          <TextField size='small' label="Body" variant="outlined" name='body' value={body} onChange={onInputChange}/>
          <Button variant="contained" onClick={newPost}>Add</Button>
        </Stack>
      </CardContent>
    </Card>
  }
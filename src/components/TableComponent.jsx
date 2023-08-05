import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export const TableComponent = ({posts = []}) => {
    return (
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Table
          </Typography>
          <TableContainer sx={{ width: 650 }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {
                    posts.map( post => (
                      <TableRow key={post.id}>
                        <TableCell>{post.userId}</TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.body}</TableCell>
                        </TableRow>
                    ) 
                    )
                  }
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    )
  }
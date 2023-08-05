import { Card, CardContent, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { Doughnut } from "react-chartjs-2"

export const CardChartComponent = ({posts = []}) => {

     const [doughnutData, setDoughnutData] = useState([])

        useEffect( ()=> {
        const counts = []
        
        posts.forEach(post => {
            if (counts[post.userId]) {
                counts[post.userId]++;
            } else {
                counts[post.userId] = 1;
            }
            });
           setDoughnutData(counts)
        }, [posts] )

    const getRandomColor = count => {
        var colors = [];
        for (var i = 0; i < count; i++) {
          var letters = '0123456789ABCDEF'.split('');
          var color = '#';
          for (var x = 0; x < 6; x++) color += letters[Math.floor(Math.random() * 16)];
          colors.push(color);
        }
        return colors;
      }


    return <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chart
        </Typography>
        <Doughnut data={{
          datasets: [{
            data: doughnutData,
            backgroundColor: getRandomColor(doughnutData.length)
          }]
        }} />
      </CardContent>
    </Card>
  }
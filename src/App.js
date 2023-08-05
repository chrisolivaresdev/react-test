
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Chart, ArcElement } from 'chart.js'
import './App.css';
import { CardChartComponent } from './components/CardChardComponent';
import { TableComponent } from './components/TableComponent';
import { FormComponent } from './components/FormComponent';
import { getPost, newPost } from './service/placeholderService';
import { useForm } from './hooks/useForm';

Chart.register(ArcElement);

const formPost= {
  title:'',
  body:''
}

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost().then((response) => setPosts(response))
  }, [])

  const { title, body, onInputChange, onResetForm  } = useForm(formPost)

  const sendPost = ( ) => {
    if(title.length < 1 || body.length < 1) return
    newPost({title,body}).then( response => {
      setPosts( (prevpost) => [{...response, id:prevpost.length+2}, ...prevpost ] )
    } )
    onResetForm()
  }

  return (
    <div className="App">
      <Stack spacing={2} direction="row">
        <FormComponent newPost={sendPost} title={title} body={body} onInputChange={onInputChange}/>
        <TableComponent posts={posts}/>
        <CardChartComponent posts={posts}/>
      </Stack>
    </div>
  );
}

export default App;
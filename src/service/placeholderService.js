const baseUrl = `https://jsonplaceholder.typicode.com/posts`

export const getPost = async () => {
    try {
        const resp = await fetch(baseUrl)

        if(!resp.ok){
            throw new Error(`data status : resp.status`)
        }
        const data = await resp.json()
        return data
    } catch (error) {
        throw new Error(`error : ${error}`)
    }
 
}


export const newPost = async({title,body}) => {
    try {
        const resp = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({
              title,
              body,
              userId:1
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
      
          if(!resp.ok) throw new Error(`data status : ${resp.status}`)
      
          const data = await resp.json()
          return data
    } catch (error) {
        throw new Error(`error : ${error}`)
    }
  }
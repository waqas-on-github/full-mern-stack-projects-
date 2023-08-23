import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const Post = () => {

const mutation = useMutation({
    mutationFn : () => {
        return  axios.post('https://jsonplaceholder.typicode.com/posts' , {
            
                title: "New Post",
                body: "This is the body of the new post.",
                userId: 1,
              
        })
    }
})

console.log(mutation);

const handleChange = (e) => {
    e.preventDefault() 
    mutation.mutate()
}


  return (
    <div> 

  <button onClick={handleChange} >Post Data</button>

    </div>
  )
}

export default Post
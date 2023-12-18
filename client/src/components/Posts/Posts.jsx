import Post from '../Post/Post'
import { useQuery } from '@tanstack/react-query'
import './posts.scss'
import { makeRequest } from '../../api/axios'
const Posts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts').then((res) => {
        return res.data
      })
  })

  console.log(data)

  return (
    <section className='posts'>
      {error
        ? 'An error has occurred: ' + error.message
        : isPending
        ? 'Loading...'
        : data?.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
    </section>
  )
}

export default Posts

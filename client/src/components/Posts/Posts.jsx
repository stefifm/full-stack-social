import Post from '../Post/Post'
import propTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import './posts.scss'
import { makeRequest } from '../../api/axios'

const Posts = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts?userId=' + userId).then((res) => {
        return res.data
      })
  })

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

Posts.propTypes = {
  userId: propTypes.number
}

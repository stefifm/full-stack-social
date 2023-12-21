import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './comments.scss'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../api/axios'
import moment from 'moment'
import propTypes from 'prop-types'

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState('')
  const { currentUser } = useContext(AuthContext)
  const queryClient = useQueryClient()

  const { isPending, error, data } = useQuery({
    queryKey: ['comments'],
    queryFn: () =>
      makeRequest.get(`/comments?postId=${postId}`).then((res) => {
        return res.data
      })
  })

  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post('/comments', newComment)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    }
  })

  const handleClick = async (e) => {
    e.preventDefault()
    mutation.mutate({ desc, postId })
    setDesc('')
  }

  return (
    <div className='comments'>
      <div className='write'>
        <img
          src={currentUser.profilePic}
          alt=''
        />
        <input
          type='text'
          placeholder='write a comment'
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isPending
        ? 'Loading...'
        : error
        ? 'An error has occurred: ' + error.message
        : data.map((comment) => (
            <div
              className='comment'
              key={comment.id}>
              <img
                src={comment.profilePic}
                alt=''
              />
              <div className='info'>
                <span> {comment.name} </span>
                <p> {comment.desc} </p>
              </div>
              <span className='date'>{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))}
    </div>
  )
}

export default Comments

Comments.propTypes = {
  postId: propTypes.number
}

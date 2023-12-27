import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import './post.scss'
import Comments from '../Comments/Comments'
import { useContext, useState } from 'react'
import moment from 'moment'
import { makeRequest } from '../../api/axios'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { AuthContext } from '../../context/AuthContext'

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const { isPending, error, data } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () =>
      makeRequest.get('/likes?postId=' + post.id).then((res) => {
        return res.data
      })
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete('/likes?postId=' + post.id)
      return makeRequest.post('/likes', { postId: post.id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['likes'])
    }
  })

  const handleLike = () => {
    mutation.mutate(data?.includes(currentUser.id))
  }

  return (
    <article className='post'>
      <div className='container'>
        {/* TOP */}
        <div className='user'>
          {/* USER INFO */}
          <div className='userInfo'>
            <img
              src={window.location.origin + '/upload/' + post.profilePic}
              alt=''
            />
            {/* USER DETAILS */}
            <div className='details'>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none' }}>
                <span className='name'>{post.name}</span>
              </Link>
              <span className='date'>{moment(post.createAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        {/* CONTENT */}
        <div className='content'>
          <p>{post.desc}</p>
          <img
            src={window.location.origin + '/upload/' + post.img}
            alt=''
          />
        </div>
        {/* INFO */}
        <div className='info'>
          <div className='item'>
            {isPending ? (
              'Loading...'
            ) : data?.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: 'red' }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
          </div>
          <div
            className='item'
            onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            See Comments
          </div>
          <div className='item'>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {/* COMMENTS */}
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </article>
  )
}

export default Post

Post.propTypes = {
  post: propTypes.object
}

import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import './post.scss'
import Comments from '../Comments/Comments'
import { useState } from 'react'

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

  // TEMPORARY
  const liked = false

  return (
    <article className='post'>
      <div className='container'>
        {/* TOP */}
        <div className='user'>
          {/* USER INFO */}
          <div className='userInfo'>
            <img
              src={post.profilePic}
              alt=''
            />
            {/* USER DETAILS */}
            <div className='details'>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none' }}>
                <span className='name'>{post.name}</span>
              </Link>
              <span className='date'>1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        {/* CONTENT */}
        <div className='content'>
          <p>{post.desc}</p>
          <img
            src={post.img}
            alt=''
          />
        </div>
        {/* INFO */}
        <div className='info'>
          <div className='item'>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className='item'
            onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className='item'>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {/* COMMENTS */}
        {commentOpen && <Comments />}
      </div>
    </article>
  )
}

export default Post

Post.propTypes = {
  post: propTypes.object
}

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import './profile.scss'
import Posts from '../../components/Posts/Posts'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../api/axios'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
const Profile = () => {
  const socialMedia = [
    { icon: <FacebookTwoToneIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <InstagramIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <TwitterIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <LinkedInIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <PinterestIcon fontSize='large' />, link: 'https://www.facebook.com' }
  ]

  const userId = parseInt(useLocation().pathname.split('/')[2])

  const { currentUser } = useContext(AuthContext)

  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get('/users/find/' + userId).then((res) => {
        return res.data
      })
  })

  return (
    <main className='profile'>
      {isPending ? (
        'Loading...'
      ) : error ? (
        error.message
      ) : (
        <>
          {/* IMAGES */}
          <div className='images'>
            <img
              src={data?.coverPic}
              alt=''
              className='cover'
            />
            <img
              src={data?.profilePic}
              alt=''
              className='profilePic'
            />
          </div>
          {/* PROFILE CONTAINER */}
          <div className='profileContainer'>
            <div className='uInfo'>
              {/* LEFT */}
              <div className='left'>
                {socialMedia.map((social, index) => (
                  <a
                    href={social.link}
                    key={index}>
                    {social.icon}
                  </a>
                ))}
              </div>
              {/* CENTER */}
              <div className='center'>
                <span>{data?.name}</span>
                <div className='info'>
                  <div className='item'>
                    <PlaceIcon />
                    <span>{data?.city}</span>
                  </div>
                  <div className='item'>
                    <LanguageIcon />
                    <span>{data?.website}</span>
                  </div>
                </div>
                {userId === currentUser.id ? <button>Update</button> : <button>Follow</button>}
              </div>
              {/* RIGHT */}
              <div className='right'>
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts />
          </div>
        </>
      )}
    </main>
  )
}

export default Profile

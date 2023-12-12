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
const Profile = () => {
  const socialMedia = [
    { icon: <FacebookTwoToneIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <InstagramIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <TwitterIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <LinkedInIcon fontSize='large' />, link: 'https://www.facebook.com' },
    { icon: <PinterestIcon fontSize='large' />, link: 'https://www.facebook.com' }
  ]
  return (
    <main className='profile'>
      {/* IMAGES */}
      <div className='images'>
        <img
          src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className='cover'
        />
        <img
          src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
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
            <span>Mark Kansas</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className='item'>
                <LanguageIcon />
                <span>stefifm.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          {/* RIGHT */}
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </main>
  )
}

export default Profile

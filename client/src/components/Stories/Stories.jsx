import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './stories.scss'
const Stories = () => {
  const { currentUser } = useContext(AuthContext)

  // DUMMY DATA
  const stories = [
    {
      id: 1,
      name: 'Mark Kansas',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 2,
      name: 'Mark Kansas',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 3,
      name: 'Mark Kansas',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 4,
      name: 'Mark Kansas',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    }
  ]
  return (
    <section className='stories'>
      <div className='story'>
        <img
          src={currentUser.profilePic}
          alt=''
        />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div
          className='story'
          key={story.id}>
          <img
            src={story.img}
            alt=''
          />
          <span>{story.name}</span>
        </div>
      ))}
    </section>
  )
}

export default Stories

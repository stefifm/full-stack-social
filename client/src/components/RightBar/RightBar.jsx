import './rightbar.scss'

const RightBar = () => {
  const userInfo = [
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'John Doe'
    }
  ]

  const latestActivities = [
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe',
      action: 'liked your post',
      date: '1 min ago'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe',
      action: 'liked your post',
      date: '1 min ago'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe',
      action: 'liked your post',
      date: '1 min ago'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe',
      action: 'liked your post',
      date: '1 min ago'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'John Doe',
      action: 'commented on your post',
      date: '2 min ago'
    }
  ]

  const onlineFriends = [
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    },
    {
      img: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'William Doe'
    }
  ]
  return (
    <aside className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          {userInfo.map((user, index) => (
            <div
              className='user'
              key={index}>
              <div className='userInfo'>
                <img
                  src={user.img}
                  alt=''
                />
                <span>{user.name}</span>
              </div>
              <div className='btn-group'>
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          ))}
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          {latestActivities.map((activity, index) => (
            <div
              className='user'
              key={index}>
              <div className='userInfo'>
                <img
                  src={activity.img}
                  alt=''
                />
                <p>
                  <span>{activity.name}</span> {activity.action}
                </p>
              </div>
              <span>{activity.date}</span>
            </div>
          ))}
        </div>
        <div className='item'>
          <span>Online Friends</span>
          {onlineFriends.map((friend, index) => (
            <div
              className='user'
              key={index}>
              <div className='userInfo'>
                <img
                  src={friend.img}
                  alt=''
                />
                <div className='online' />
                <span>{friend.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default RightBar

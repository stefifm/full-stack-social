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
      </div>
    </aside>
  )
}

export default RightBar

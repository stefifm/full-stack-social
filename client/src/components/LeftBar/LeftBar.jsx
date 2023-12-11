import Friends from '../../assets/1.png'
import Groups from '../../assets/2.png'
import Market from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Events from '../../assets/6.png'
import Gaming from '../../assets/7.png'
import Gallery from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Messages from '../../assets/10.png'
import Tutorials from '../../assets/11.png'
import Courses from '../../assets/12.png'
import Fund from '../../assets/13.png'
import './leftbar.scss'

const LeftBar = () => {
  const firstSection = [
    { name: 'Friends', icon: Friends },
    { name: 'Groups', icon: Groups },
    { name: 'Marketplace', icon: Market },
    { name: 'Watch', icon: Watch },
    { name: 'Memories', icon: Memories }
  ]

  const secondSection = [
    { name: 'Events', icon: Events },
    { name: 'Gaming', icon: Gaming },
    { name: 'Gallery', icon: Gallery },
    { name: 'Videos', icon: Videos },
    { name: 'Messages', icon: Messages }
  ]

  const thirdSection = [
    { name: 'Fundraisers', icon: Fund },
    { name: 'Tutorials', icon: Tutorials },
    { name: 'Courses', icon: Courses }
  ]
  return (
    <aside className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img
              src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <span>Mark Kansas</span>
          </div>
          {firstSection.map((item, index) => (
            <div
              className='item'
              key={index}>
              <img
                src={item.icon}
                alt=''
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className='menu'>
          <span>Your shortcuts</span>
          {secondSection.map((item, index) => (
            <div
              className='item'
              key={index}>
              <img
                src={item.icon}
                alt=''
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className='menu'>
          <span>Others</span>
          {thirdSection.map((item, index) => (
            <div
              className='item'
              key={index}>
              <img
                src={item.icon}
                alt=''
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default LeftBar

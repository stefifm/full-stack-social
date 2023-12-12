import Stories from '../../components/Stories/Stories'
import Posts from '../../components/Posts/Posts'
import './home.scss'
const Home = () => {
  return (
    <main className='home'>
      <Stories />
      <Posts />
    </main>
  )
}

export default Home

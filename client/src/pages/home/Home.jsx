import Stories from '../../components/Stories/Stories'
import Posts from '../../components/Posts/Posts'
import './home.scss'
import Share from '../../components/Share/Share'
const Home = () => {
  return (
    <main className='home'>
      <Stories />
      <Share />
      <Posts />
    </main>
  )
}

export default Home

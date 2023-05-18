import Header from './components/header/';
import Banner from './components/banner/';
import Line from './components/line';
import { Card } from './components/card/';
import Footer from './components/footer';

const news = [
  {
    descricao: "In quae eos placeat, architecto sint possimus veniam, similique id amet laborum at libero quis animi porro nulla. Deleniti nesciunt quae neque.",
    image: "https://fortaleza1918.com.br/wp-content/uploads/2023/05/PAL-X-FOR-9-1200x800.jpg"
  },
  {
    descricao: "In quae eos placeat, architecto sint possimus veniam, similique id amet laborum at libero quis animi porro nulla. Deleniti nesciunt quae neque.",
    image: "https://pbs.twimg.com/media/FwWUwtpX0AAZOJR?format=jpg&name=large"
  },
  {
    descricao: "In quae eos placeat, architecto sint possimus veniam, similique id amet laborum at libero quis animi porro nulla. Deleniti nesciunt quae neque.",
    image: "https://pbs.twimg.com/media/FwRrMVnX0B8l6Uj?format=jpg&name=360x360"
  },
  {
    descricao: "In quae eos placeat, architecto sint possimus veniam, similique id amet laborum at libero quis animi porro nulla. Deleniti nesciunt quae neque.",
    image: "https://pbs.twimg.com/media/FwXFfaQWcAIH23p?format=jpg&name=360x360"
  },
]

function App() {

  return (
    <>
      <Header />
      <Line />
      <Banner />
      <Line />
      <h1 style={{ marginTop: '1rem', padding: '0 2rem' }}>Últimas Notícias</h1>
      <div className='news'>
        {news.length > 0 && (
          news.map(item => (
            <Card
              descricao={item.descricao}
              image={item.image}
            />
          ))
        )}
      </div>
      <Line />
      <Footer />
    </>
  )
}

export default App

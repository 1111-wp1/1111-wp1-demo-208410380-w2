import './App_80.css';

const firstbook = {
  img : 'https://m.media-amazon.com/images/P/194563183X.01._SCLZZZZZZZ_SX500_.jpg',
  title : 'Things We Never Got Over',
  author : 'Lucy Score'
}

const secondbook ={
  img : 'https://m.media-amazon.com/images/P/1496731115.01._SCLZZZZZZZ_SX500_.jpg',
  title : 'The Wife Before: A Spellbinding Psychological Thriller with a Shocking Twist',
  author : 'Shanora Williams'
}

const thirdbook ={
  img : 'https://m.media-amazon.com/images/P/1629998958.01._SCLZZZZZZZ_SX500_.jpg',
  title : 'The Harbinger II',
  author : 'Cahn'
}

const App_80 = () => {
  return (
    <section className='bookList'>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={secondbook.img} title={secondbook.title} author={secondbook.author}/>
      <Book_80 img={thirdbook.img} title={thirdbook.title} author={thirdbook.author}/>
    
    </section>
  );
}

const Book_80 = (props) => {
  // console.log('props',props )
  // const {img, title, author } = props;
  return (
    <article className='book'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );

}


export default App_80;

import './App_80.css';

const firstbook = {
  img : 'https://m.media-amazon.com/images/I/71dDj1W87kL._AC_UY327_FMwebp_QL65_.jpg',
  title : 'Things We Never Got Over',
  author : 'Lucy Score'
}

const App_80 = () => {
  return (
    <section className='bookList'>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
    </section>
  );
}

const Book_80 = (props) => {
  console.log('props',props )
  const {img, title, author } = props;
  return (
    <article className='book'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );

}


export default App_80;

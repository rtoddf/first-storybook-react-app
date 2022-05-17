import Card from './Components/Card/default';

function App() {
  const social = [
    {
      icon: 'fab fa-facebook-f',
      link: 'https://www.facebook.com/',
    },
    {
      icon: 'fab fa-twitter',
      link: 'https://www.twitter.com/',
    },
    {
      icon: 'fas fa-share',
      link: '',
    },
    {
      icon: 'fas fa-thumbs-up',
      link: '',
    },
  ];

  return (
    <div className='container'>
      <Card
        image='./images/casey-cott.jpg'
        name='Casey Cott'
        show='Riverdale'
        social={social}
      />
    </div>
  );
}

export default App;

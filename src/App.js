import './scss/app.scss';
import Menu from './components/Menu';
import Title from './components/Title';
import MainButton from './components/MainButton';

function App() {
  return (
    <div className='main'>
      <Menu />
      <div className='main-block'>
        <div className='title-block'>
          <Title />
        </div>
        <div className='MainButton-block'>
          <MainButton />
        </div>
      </div>

    </div>
  );
}

export default App;

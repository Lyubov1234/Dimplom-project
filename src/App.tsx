import MainContext from '#store/context';
import Router from '#router/Router';

function App() {
  return (
    <MainContext>
      <Router />
    </MainContext>
  );
}

export default App;

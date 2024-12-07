import { Calculator } from './components/Calculator';

function App() {
  return (
    <div className="bg-gray-50 border-t-8 border-primary">
      <div className=" border-t-4 border-secondary"></div>
      <div className="mx-auto sm:py-4 sm:px-4">
        <Calculator />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;

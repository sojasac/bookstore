import './App.styles.css';
import { Navbar } from './features/navbar/navbar';
const array = [[], [], [], []];
const function_ = () => {
  return array.map((element) => {
    return element[0] >= 55 && element[1] >= 7
      ? element
        .splice(0, 2)
        .toString()
        .slice(0, element.length)
        .replace('', 'Senior')
      : element
        .splice(0, 2)
        .toString()
        .slice(0, element.length)
        .replace('', 'Open');
  });
};

export const App = () => {
  console.log(function_());
  return (
    <div className='container'>
      <Navbar />
    </div>
  );
};

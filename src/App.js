import React, { useState } from 'react';
import './App.css';
import './context/dark.css';
import { useDarkModeContext } from './context/DarkModeContext';

const App = () => {
  const [result, setResult] = useState('');
  const [displayResult1, setDisplayResult1] = useState('');
  const [IsClicked, setIsClicked] = useState(false);
  const { darkMode, setDarkMode } = useDarkModeContext();

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    setIsClicked(false);
  };
  const clear = () => {
    setResult('');
    setIsClicked(false);
  };

  const calculate = () => {
    if (IsClicked === false) {
      try {
        setResult(eval(result).toString());
        setDisplayResult1(result.toString());
      } catch (err) {
        setResult('error');
      }
    }
  };
  const displayResult = () => {
    setIsClicked(true);
  };

  const light = () => {
    setDarkMode(false);
  };
  const dark = () => {
    setDarkMode(true);
  };

  // const his = () => {
  //   console.log('clicked two');
  // };
  const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    return (
      <div className={darkMode ? 'Darkdropdown' : 'dropdown'}>
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className='menu'>
            {menu.map((menuItem, index) => (
              <li key={index} className='menu-item'>
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };
  return (
    <div>
      <div className={darkMode ? 'darknav' : 'nav'}>
        <div className='hamburger'>
          <Dropdown
            trigger={
              <button
                className={
                  darkMode ? 'darkhamburger-button' : 'hamburger-button'
                }
              >
                ☰
              </button>
            }
            menu={[
              <li className={darkMode ? 'darkli' : 'li'} onClick={light}>
                Dark mode
              </li>,
              <li className={darkMode ? 'darkli' : 'li'} onClick={dark}>
                Light mode
              </li>,
              <li
                className={darkMode ? 'darkli' : 'li'}
                onClick={displayResult}
              >
                Log
              </li>,
            ]}
          />
        </div>
      </div>
      <div className={darkMode ? 'containerDark' : 'container'}>
        <form>
          {!IsClicked ? (
            <input
              className={darkMode ? 'darkinput1' : 'input1'}
              type='text'
              value={result}
              maxLength='5'
            />
          ) : (
            <input
              className={darkMode ? 'darkinput2' : 'input2'}
              type='text'
              value={displayResult1}
              maxLength='5'
            />
          )}
        </form>

        <div className='key'>
          <button onClick={clear} id='clear'>
            C
          </button>
          <div className='empty'></div>
          <button
            className={darkMode ? 'darkhighlight' : 'highlight'}
            name='/'
            id='divide'
            onClick={handleClick}
          >
            &divide;
          </button>
          <button name='7' onClick={handleClick}>
            7
          </button>
          <button name='8' onClick={handleClick}>
            8
          </button>
          <button name='9' onClick={handleClick}>
            9
          </button>
          <button
            className={darkMode ? 'darkhighlight' : 'highlight'}
            name='*'
            id='times'
            onClick={handleClick}
          >
            &times;
          </button>
          <button name='4' onClick={handleClick}>
            4
          </button>
          <button name='5' onClick={handleClick}>
            5
          </button>
          <button name='6' onClick={handleClick}>
            6
          </button>
          <button
            className={darkMode ? 'darkhighlight' : 'highlight'}
            name='-'
            id='minus'
            onClick={handleClick}
          >
            &ndash;
          </button>
          <button name='1' onClick={handleClick}>
            1
          </button>
          <button name='2' onClick={handleClick}>
            2
          </button>
          <button name='3' onClick={handleClick}>
            3
          </button>
          <button
            className={darkMode ? 'darkhighlight' : 'highlight'}
            name='+'
            id='plus'
            onClick={handleClick}
          >
            +
          </button>
          <button name='0' onClick={handleClick} id='zero'>
            0
          </button>
          <button name='.' onClick={handleClick}>
            .
          </button>
          <button
            className={darkMode ? 'darkhighlight' : 'highlight'}
            onClick={calculate}
            id='result'
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

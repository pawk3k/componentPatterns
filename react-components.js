  const { useState } = React;

      class RootComponent extends React.Component {
        render() {
          return <Guy />;
        }
      }
      const EmotionalState = ({ render }) => {
        const [emotion, setEmotion] = useState('sad');

        return (
          <div className="absolute bg-white w-full flex flex-col text-center">
            <div className="flex mx-auto justify-center gap-5 w-40">
              <button type="button" onClick={() => setEmotion('happy')}>
                😃
              </button>
              <button type="button" onClick={() => setEmotion('sad')}>
                😭
              </button>
            </div>
            <div className="w-full">
              <span className="text-9xl">🏦</span>
            </div>
            {render(emotion)}
          </div>
        );
      };
      const Child = ({ emotion }) => (
        <span className="text-9xl">{emotion === 'happy' ? ' 💆🏻️' : '🙍🏻️'}</span>
      );
      function Parent({ renderWithState }) {
        const [parentEmotion, setEmotion] = useState('happy');
        return renderWithState(parentEmotion);
      }
      function Example() {
        return (
          <Parent
            renderWithState={(emotion) => (
              <>
                <Child emotion={emotion} />
                <Child emotion={!emotion} />
                <Child emotion={emotion} />
              </>
            )}
          />
        );
      }
      const Guy = () => <EmotionalState render={(emotion) => <div>{emotion}</div>} />;
      
      const Modal = () => {
       return (<span style="height: 50px;width: 50px; background-color: aliceblue;">
      <div style="display:flex;">
        <span style="background-color: green; height: 10px; width: 10px; border-radius: 100%;"></span>
      </div>
      :D
    </span>)
      }

      const ParentChild = () => {
        const [parentEmotion, setParentEmotion] = useState('happy');

        return (
          <div>
            <Child emotion={parentEmotion} />
            <button
              onClick={() =>
                setParentEmotion((prevEmotion) => (prevEmotion == 'happy' ? 'sad' : 'happy'))
              }
            >
              toggle emotion
            </button>
          </div>
        );
      };

      const domContainer1 = document.querySelector('#react-component-1');
      const domContainer2 = document.querySelector('#react-component-2');
      const domContainer3 = document.querySelector('#react-component-3');
      ReactDOM.render(React.createElement(Example), domContainer1);
      ReactDOM.render(React.createElement(ParentChild), domContainer2);
      ReactDOM.render(React.createElement(Modal), domContainer3);
    
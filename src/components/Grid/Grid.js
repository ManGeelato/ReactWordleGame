import Word from '../Word/Word';
import './Grid.scss';

function Grid() {
  // we create a state that we equalize with information coming from boardArray so we can supply our grid of words
  return (
    <div className="grid">
      <div className="row">
        {/* each row is tried 5 times but now remember, there are close about 5 positions that have to be 
        to be tried so at the first guess, the attempt will be set to 0 */}
        <Word letterPos={0} attemptVal={0} />
        <Word letterPos={1} attemptVal={0} />
        <Word letterPos={2} attemptVal={0} />
        <Word letterPos={3} attemptVal={0} />
        <Word letterPos={4} attemptVal={0} />
      </div>
      <div className="row">
        <Word letterPos={0} attemptVal={1} />
        <Word letterPos={1} attemptVal={1} />
        <Word letterPos={2} attemptVal={1} />
        <Word letterPos={3} attemptVal={1} />
        <Word letterPos={4} attemptVal={1} />
      </div>
      <div className="row">
        <Word letterPos={0} attemptVal={2} />
        <Word letterPos={1} attemptVal={2} />
        <Word letterPos={2} attemptVal={2} />
        <Word letterPos={3} attemptVal={2} />
        <Word letterPos={4} attemptVal={2} />
      </div>
      <div className="row">
        <Word letterPos={0} attemptVal={3} />
        <Word letterPos={1} attemptVal={3} />
        <Word letterPos={2} attemptVal={3} />
        <Word letterPos={3} attemptVal={3} />
        <Word letterPos={4} attemptVal={3} />
      </div>
      <div className="row">
        <Word letterPos={0} attemptVal={4} />
        <Word letterPos={1} attemptVal={4} />
        <Word letterPos={2} attemptVal={4} />
        <Word letterPos={3} attemptVal={4} />
        <Word letterPos={4} attemptVal={4} />
      </div>
      <div className="row">
        <Word letterPos={0} attemptVal={5} />
        <Word letterPos={1} attemptVal={5} />
        <Word letterPos={2} attemptVal={5} />
        <Word letterPos={3} attemptVal={5} />
        <Word letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default Grid;

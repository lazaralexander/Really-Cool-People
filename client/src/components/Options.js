function Options({ choices }) {
  return (
    <>
      {choices.map((choice) => {
        return (
          <option key={choice} value={choice}>
            {choice}
          </option>
        );
      })}
    </>
  );
}

export default Options;

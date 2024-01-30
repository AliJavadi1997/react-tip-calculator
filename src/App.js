function App() {
  const tip = 0;
  const bill = 0;
  return (
    <div>
      <BillInput />
      <SelectPercentage />
      <SelectPercentage />
      <Output tip={tip} bill={bill} />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input type="number" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage() {
  return (
    <div>
      <label htmlFor="service">How did you like the service?</label>
      <select id="service">
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was OK(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ tip, bill }) {
  return <div>{`You pay $${tip + bill}: $${bill} + $${tip}`}</div>;
}

function Reset() {
  return <button>Reset</button>;
}

export default App;

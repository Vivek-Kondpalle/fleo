import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <div>
            <h3>Tata Steel</h3>
            <p>50% complete</p>
            <div className='bottom'>
              <div className='left'>
                <p>Total Sales - 200 Crore</p>
                <p>Target Sales - 400 Crore</p>
              </div>
              <div className='right'>
                <p>Off Track</p>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <div>
                <h3>Factory a </h3>
                <p>20% Complete</p>
                <div className=''>
                  <div className='left'>
                    <p>Total Sales - 20 Crore</p>
                    <p>Target Sales - 100 Crore</p>
                  </div>
                  <div className='right'>
                    <p>Off Track</p>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <div>
                    <h3>Godown a</h3>
                    <p>20% Complete</p>
                    <div className=''>
                      <div className='left'>
                        <p>Total Sales - 10 Crore</p>
                        <p>Target Sales - 50 Crore</p>
                      </div>
                      <div className='right'>
                        <p>At risk</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Godown b</h3>
                    <p>20% Complete</p>
                    <div className=''>
                      <div className='left'>
                        <p>Total Sales - 10 Crore</p>
                        <p>Target Sales - 50 Crore</p>
                      </div>
                      <div className='right'>
                        <p>At risk</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <div>
                <h3>Factory b </h3>
                <p>75% Complete</p>
                <div className=''>
                  <div className='left'>
                    <p>Total Sales - 150 Crore</p>
                    <p>Target Sales - 200 Crore</p>
                  </div>
                  <div className='right'>
                    <p>on Track</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Factory c </h3>
                <p>30% Complete</p>
                <div className=''>
                  <div className='left'>
                    <p>Total Sales - 30 Crore</p>
                    <p>Target Sales - 100 Crore</p>
                  </div>
                  <div className='right'>
                    <p>off Track</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;

import React from 'react'
import CountUp from 'react-countup';

function Countup() {
  return (
    <div>
      <div className="flex justify-around py-10 text-center py-24">
      <div>
        <h2 className="border-b-1 pb-4" style={{ color:'#0ac6ae' ,borderColor: "#0ac6ae",fontSize:'45px',fontWeight:'600'  }}>
          <CountUp start={0} end={2} duration={1} /> years
        </h2>
        <p className="text-gray-600 pt-2">We have been working for you since 2023</p>
      </div>

      <div>
        <h2 className="border-b-1 pb-4" style={{ color:'#0ac6ae' ,borderColor: "#0ac6ae",fontSize:'45px',fontWeight:'600' }}>
          <CountUp start={0} end={1012} duration={2.5} />
        </h2>
        <p className="text-gray-600 pt-2">Customers satisfied with the service</p>
      </div>

      <div>
        <h2 className="border-b-1 pb-4" style={{ color:'#0ac6ae' ,borderColor: "#0ac6ae",fontSize:'45px',fontWeight:'600'  }}>
          <CountUp start={0} end={102} duration={3} />
        </h2>
        <p className="text-gray-600 pt-2">Countries covered with our service</p>
      </div>
    </div>

    </div>
  )
}

export default Countup

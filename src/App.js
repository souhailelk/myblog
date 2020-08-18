import React from 'react';
import Article from './components/Article'

function App() {
  let content = {}
  const e = <p>From Elecrow. I have two of their first CrowPi device and I use them in demonstrations and talks all the time, especially when talking to students.
  They have a Kickstarter ending this week for the new CrowPi2. It's an update of the original CrowPi which was basically a Raspberry Pi in a tiny suitcase...instead the CrowPi2 looks like a laptop! The magical part is that the full exploration and sensor board is hidden underneath a wireless keyboard with trackpad, held on with magnets!
  The CrowPi folks sent me an early CrowPi2 because I was a vocal supporter of the previous version, so I did a LIVE video unboxing on twitter as well as a follow up software video on the CrowPi2. I am not being paid for this review and I always am honest with y'all about the stuff I like. I plan on buying a few for my kids' public school science class.</p>
  content.title = "Reviewing the Elecrow CrowPi2 Raspberry Pi Laptop and STEM Education Platform"
  content.content = <div>{e}{e}{e}{e}{e}{e}</div>
  content.infos = "published on 20/08/2020"
  return (
    <div>
      <Article  content={content} />
    </div>
  );
}

export default App;

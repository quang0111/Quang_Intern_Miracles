import React from 'react';

import Banner from '../../layouts/Banner';
import SectionSale from '../../layouts/SectionSale';
import Sale from '../../layouts/Sale';
import Feelback from '../../Slider/Feelback';
import Intro from '../../layouts/Intro';
import Infor from '../../layouts/Infor';

function Homepage(props) {
 return (
  <div>
      <Banner />
      <Sale />
      <SectionSale />
      <Feelback />
      <Intro />
      <Infor />
  </div>
 );
}

export default Homepage;
import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [random, setRandom] = useState<number>();

  return (
      <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  );
};

export default Gallery;













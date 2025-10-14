import React from 'react'
import MyButton from '@/components/MyButton';
const Home = () => {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mt-4'>Home Page</h1>
      <p style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>
        Using Inline CSS in JSX
      </p>
      <input type="text" />
      <br />
      <hr />

      <img src="/next.svg" alt="" />

      <button className='global-btn'>Global Button</button>

    </div>
  )
}

export default Home;

// fontSize - camelCase
// font-size - kebab-case
// font_size - snake_case
// FontSize - PascalCase
import React from 'react'
import "./Home.css";
const Home = () => {
  return (
      <div className='main-container'>
          <div className='main'>
              <h3>Flex Business Pro </h3>
              <p>clean and modern bussiness theme</p>
         
          <div className='right-nav'>
              <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Styleguide</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
              </ul>
              </div>
              </div>
          <div className='img'>
              <div className='internal'>
              <h2>We Provide Business Solution</h2>
                  <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dicta id facilis nobis ducimus quo quasi culpa esse sequi vel perspiciatis suscipit, totam nulla iste corrupti numquam non dolores nam.</p>
                  <a href="/"><button className='btn'>Learn More</button></a>
              </div>
          </div>
          <div>
              <h1 style={{ marginLeft: "600px" }}>Our Feature</h1>
              <div className="data">
                  <div className="item1">
                      <h3>Fully Responsive</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe blanditiis deleniti repellat vero doloribus tempore sequi quas, commodi necessitatibus eius totam harum dolorum sunt.</p>
                      <a href="/">Read More</a>
                  </div>
                  <div className="item2">
                      <h3>Trusted Author</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe blanditiis deleniti repellat vero doloribus tempore sequi quas, commodi necessitatibus eius totam harum dolorum sunt.</p>
                      <a href="/">Read More</a>
                  </div>
                  <div className="item3">
                      <h3>Reusable Element</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe blanditiis deleniti repellat vero doloribus tempore sequi quas, commodi necessitatibus eius totam harum dolorum sunt.</p>
                      <a href="/">Read More</a>
                  </div>
                  
              </div>
          </div>
          <div >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVtNWjgApvAwIUQzM95WdB_dzgZ-oSblJWQ&usqp=CAU" alt="img" className='bottom-img'/>
                  </div>
    </div>
  )
}

export default Home
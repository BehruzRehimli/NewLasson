import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div>
        <section>
        <Carousel>
      <Carousel.Item>
        <img style={{width:"100%"}} src='https://avatars.mds.yandex.net/i?id=e48a9a02dc22e29e5dc6e11ae0fea817-3604407-images-thumbs&n=13' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%"}} src='https://avatars.mds.yandex.net/i?id=684abef3f56c588129dc20e60bc580443fc26e3d-10509529-images-thumbs&n=13' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%"}} src='https://avatars.mds.yandex.net/i?id=673aad55f4641cb7f2a0069abc300675a1583b1f-8399918-images-thumbs&n=13' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    </div>
  )
}

export default Home
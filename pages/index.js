import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <header className="header
                         bg-light">
        <Container>
          <div className="header__inner
                          d-flex
                          flex-row
                          align-items-center
                          py-4">
            HEADER
          </div>
        </Container>
      </header>

      <main className="main
                       d-flex
                       flex-column
                       h-100
                       align-items-center
                       py-4">

        <Container>

          <div className='main__inner'>

          <section class="greeting
                          w-100">
            <h1 className='fs-1
                           fw-normal'>
              <span className='text-primary
                               fw-semibold'>
                BuyBook
              </span> welcomes You!
            </h1>
          </section>

          </div>

        </Container>

      </main>

      <footer className="footer
                         mt-auto
                         bg-dark">
        <Container>
          <div className="footer__inner
                          d-flex
                          flex-column
                          align-items-center
                          justify-content-center
                          py-4
                          text-white">
            FOOTER
          </div>
        </Container>
      </footer>
    </>
  )
}

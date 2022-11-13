import Image from 'next/image'
import { Container } from 'react-bootstrap'
import cls from '../styles/Main.module.scss'

export default function Home() {
  return (
    <>
      <header className={ [cls.header,
                          'bg-light',
                          'fixed-top']
                            .join(' ')}>
        <Container className='h-100'>
          <div className='header__inner
                          d-flex
                          flex-row
                          align-items-center
                          h-100'>
            HEADER
          </div>
        </Container>
      </header>

      <main className={ [cls.main,
                        'd-flex',
                        'flex-column',
                        'h-100',
                        'align-items-center',
                        'py-4']
                          .join(' ') }>

        <Container>

          <div className='main__inner'>

            <section className={ cls.greeting + ' d-flex align-items-center position-relative'}>
              <h1 className='fs-1
                            fw-normal
                            text-center
                            flex-fill'>
                Welcome to<br></br>
                <span className='text-primary
                                fw-semibold'>
                  BuyBook
                </span>
              </h1>
              <Image
                  className='position-absolute
                            top-25
                            start-0'
                  src='/book-1.jpg'
                  width='128'
                  height='74'
                  alt='Book' />
              <Image
                  className='position-absolute
                            top-50
                            end-0'
                  src='/book-2.jpg'
                  width='160'
                  height='100'
                  alt='Book' />
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

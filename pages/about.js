import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function about() {
  return(
    <>
    <Head>
      <title>Welcome to NextJs</title>
    </Head>
    <header data-bs-theme="dark">
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Commission</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"Link href="/.">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"Link href="about">About</a>
          </li>
          <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle"Link href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Services
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item"Link href="serve">Services</a></li>
    <li><a className="dropdown-item"Link href="#">Another action</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item"Link href="#">Something else here</a></li>
  </ul>
</li>

          <li className="nav-item">
            <a className="nav-link "Link href="contact">Contact</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>

<main>
<div class="container my-5">
    <div class="bg-body-prinmary p-5 rounded">
    <Image src="/pvz.jpg" className="bd-placeholder-img rounded-circle" alt="image" width={180} height={180}/>
      <div class="col-sm-8 py-5 mx-auto">
        <h1 class="display-5 fw-normal">Yo yo yo!</h1>
        <p class="fs-5">Yo Yo Yo its hump day!  What I need you to do is tag 3 big dick ass niggas under this tweet right here. I need some more niggas to do this ‘Bust That Nut’ challenge with. And I’m also giving away another hunit free subscriptions to my only fans. Be looking out for that tweet later on today. Don’t forget to tag them 3 niggas out there. If you one of them big dick niggas, tag yaself! Hump Day! Fuck with ya boy! Nude Barber!</p>
    </div>
    </div>
  </div>
    </main>




  <div>
  <div className="b-example" />
  <div className="container">
    <footer className="py-5">
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link href="#" className="" >Home</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Features</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Pricing</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >FAQs</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >About</Link></li>
          </ul>
        </div>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="" >Home</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Features</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Pricing</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >FAQs</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >About</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="" >Home</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Features</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Pricing</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >FAQs</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >About</Link></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis"Link href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis"Link href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis"Link href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

    </>
  )
}
import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function index() {
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
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/gay.jpg" className="d-block w-100" alt="view" width={2000} height={800}/>
    </div>
    <div className="carousel-item">
      <Image src="/gay0.jpg" className="d-block w-100" alt="view2" width={2000} height={800}/>
    </div>
    <div className="carousel-item">
      <Image src="/gay1.jpg" className="d-block w-100" alt="view3" width={2000} height={800}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</main>

<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"></div>
  <div className="row">
    <div className="col-lg-4">
    <Image src="/00.jpg" className="bd-placeholder-img rounded-circle" alt="11" width={140} height={140}/>
      <h2 className="fw-normal">กล้องถ่ายรูปพิเศษ</h2>
      <p>ความสวยงามและเลนส์กล้องที่คมชัดยิ่งกว่าภาพจนทุละกระบานของคุณ</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <Image src="/38.jpg" className="bd-placeholder-img rounded-circle" alt="12" width={140} height={140}/>
      <h2 className="fw-normal">38.4</h2>
      <p>พระองค์ทรงสถิตในใจทุกคน</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <Image src="/cp.jpg" className="bd-placeholder-img rounded-circle" alt="13" width={140} height={140}/>
      <h2 className="fw-normal">แมว</h2>
      <p>คุณเคยเห็นแมวรึเปลา?</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}</div>

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
          <li className="ms-3"><Link className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></Link></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

    </>
  )
}
// import React from 'react'

function Home() {
  return (
    <div>
        <header>
        <div class="header-top">
            <div class="container">
                <div class="row" style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:'0px 20px'}}>
                    <div class="col-md-5 col-sm-12 right_info">
                        <p><i class="fa fa-map-marker"></i> 10 Praed Street / Abc road Xyz</p>
                    </div>
                    <div class="col-md-7 col-sm-12 left_info">
                        <ul>
                            <li><i class="fa fa-mobile-alt"></i><a href="#">+123456789 0987</a></li>
                            <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="#">Testexample@gmail.com</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="header-main">
            <div class="container">
                <nav id='cssmenu'>
                    <div class="logo">
                        <a href="#"><img src="https://i.ibb.co/QDy827D/ak-logo.png"></img></a>
                    </div>
                    <div id="head-mobile"></div>
                    <div class="button"></div>
                    <ul>
                        <li class='active'><a href='#'>Home</a></li>
                        <li><a href='#'>Services</a>
                            <ul>
                                <li><a href='#'>Services 1</a></li>
                                <li><a href='#'>Services 2</a>
                                    <ul>
                                        <li><a href='#'>Services 21</a></li>
                                    </ul>
                                </li>

                                <li><a href='#'>Services 3</a></li>
                                <li><a href='#'>Services 4</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Reviews</a></li>
                        <li><a href='#'>Special Offers</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Book Online</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Home

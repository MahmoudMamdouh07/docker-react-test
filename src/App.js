import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <h1>قريباً</h1>
      </main>
      <footer className="footer p-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5>Cairo1</h5>
                    <p>جميع الحقوق مملوكة لشركة متاجر كايرو للتسويق الالكتروني</p>
                    <p>رقم التسجيل الضريبي 769-117-678</p>   
                </div>
                <div className="col-md-3">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                      <li>Email: Support@cairo1.com</li>
                      <li>Phone: +201116064666</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Follow Us</h5>
                    <ul class="list-inline footer-links">
                        <li class="list-inline-item">
                            <a href="#">
                            <i class="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="bi bi-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="bi bi-tiktok"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <i class="bi bi-linkedin"></i>
                          </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>&copy; 2025 Cairo1. All rights reserved.</p>
                </div>
                <div className="col-md-3">
                    <ul className="list-inline footer-links">
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;

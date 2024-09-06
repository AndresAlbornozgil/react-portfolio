import './Contact.css';

function Contact() {
  

    return (
      <div>
        <main id='contactForm' className="form-signin w-50 m-auto">
        <h1 id='contactMe' className="h3 mb-3 fw-normal">Contact me</h1>
  <form>
    <div className="form-floating">
      <input type="name" className="form-control" id="floatingInput" placeholder="Name" />
      <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com" />
      <label for="floatingPassword">Email address</label>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label"></label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
</div>
    <button id='SubmitButton' className="btn btn-primary w-100 py-2 align-items-center" type="submit">Submit</button>
  </form>
</main>
      </div>
    )
  }
  
  export default Contact
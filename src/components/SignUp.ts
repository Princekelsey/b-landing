const SignUp = (): string => {
  const template = `
        <div class="col-md-6 signup-container">
            <div class="input-container">
                <h3>Signup as a driver </h3>
                <span class="text-muted signup-info">
                    Sign up here if you are a driver who would like to use Taxify platform. 
                </span>
                
                <form action="#" class="mt-3">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                    />
                    <small id="emailHelpBlock" class="form-text text-muted">
                        Will be using as your username
                    </small>
                  </div>

                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text pr-5">+372</span>
                        </div>
                        <input type="text" id="phone" class="form-control" placeholder="555-555-33">
                    
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="city">City</label>
                    <input
                      type="email"
                      class="form-control"
                      id="city"
                    />
                  </div>

                 <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="terms">
                         <label class="form-check-label" for="terms">
                            By signing up, you accept our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                        </label>
                    </div>
                </div>

                 <button type="button" class="btn btn-success btn-block text-uppercase text-white">
                        Proceed
                 </button>

                 <div class="text-center mt-2">
                    <p class="m-0">Have multiple cars and drivers? </p>
                    <span class="text-success">Signup as a fleet owner </span>
                 </div>
                 
              </form>
            </div>
        </div>
    
    `;

  return template;
};

export default SignUp;

import footer from "../component/footer";
import header from "../component/header";

const Signup = {
    print(){
        return`
        <header>${header.print()}</header>
      <div class="con">
        <div class="aa">
          <div>
            <h2 class="tt">
              Sign up 
            </h2>
            <p class="pp">
              Or
              <a href="#" class="ss">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form class="form" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="xx">
              <div>
                <label for="email-address" class="label">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="ii" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="label">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="ii" placeholder="Password">
              </div>
            </div>
      
      
            <div>
              <button type="submit" class="vv">
                <span class="abc">
                  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      ${footer.print()}
        `;
    }
}
export default Signup;
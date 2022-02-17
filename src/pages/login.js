import footer from "../component/footer";
import header from "../component/header";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { signin } from "../api/user";

const Login = {
    print(){
        return/*html*/`
        <header>${header.print()}</header>
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" id="formSignin" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email" name="email" type="email" autocomplete="email" required class="ii" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="ii" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
      
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="vv">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    },
    afterRender() {
      const formSignin = document.querySelector("#formSignin");
      formSignin.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            // call api
          const { data } = await signin({
              email: document.querySelector("#email").value,
              password: document.querySelector("#password").value,
          });
          localStorage.setItem('user', JSON.stringify(data.user))
          // if(data.user.id == 1){
          //     document.location.href="/"
          // } else {
          //     document.location.href="/"
          // }
          setTimeout(() => {
            document.location.href="/";
          },2000)

          toastr.success("Đăng nhập thành công");
        } catch (error) {
          toastr.error(error.response.data);
        }
        
      });
    },
}
export default Login;
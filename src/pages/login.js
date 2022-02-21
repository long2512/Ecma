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
              Sign in to account
            </h2>
          </div>
          <form class="mt-8 space-y-6" id="formSignin" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only text-black">Email address</label>
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
                <a href="#" class="font-medium text-gray-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="vv">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      
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
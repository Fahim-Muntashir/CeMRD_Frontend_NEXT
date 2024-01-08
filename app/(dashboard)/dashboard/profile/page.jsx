const page = () => {
  return (
    <div>
      <section class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">My account</h6>
                <button
                  class="bg-primary text-white 
                  bg-blue-700 active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Edit Account
                </button>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        // value={user.displayName}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        // value={user.email}
                      />
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value="Rangpur Bangladsh"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        City
                      </label>
                      <input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value="New York"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Rangpur
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value="United States"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value="Postal Code"
                      />
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        About me
                      </label>
                      <textarea
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="yourTextarea"
                        id="yourTextarea"
                        cols="30"
                        rows="10"
                        maxlength="400"
                      >
                        Default text goes here...
                      </textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
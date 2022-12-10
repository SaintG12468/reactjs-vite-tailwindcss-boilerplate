import { classNames } from '../utils/index'
import Avatar from './Avatar'

import '../style/App.css'
function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-base font-extrabold uppercase tracking-wide text-blue-700">
            Welcome to
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <p className="text-xl text-gray-400">Start building for free. </p>
          <div className="flex flex-col items-center">
          <Avatar
              size="large"
              src="https://avatars.githubusercontent.com/u/5478909?v=4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

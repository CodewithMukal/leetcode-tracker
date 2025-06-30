import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./Home"
import { Leaderboard } from "./Leaderboard"

function App() {
  const router = createBrowserRouter([
     {
      path:"/",
      element: <Home/>
     },
     {
      path:'/leaderboard',
      element:<Leaderboard/>
     }
  ])
  const users = ["thedevsumit","krishN_99","mukalcode","vedant_8075"]
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

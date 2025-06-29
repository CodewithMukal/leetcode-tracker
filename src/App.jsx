import { Card } from "./Card"

function App() {

  const users = ["thedevsumit","krishN_99","mukalcode","vedant_8075"]
  return (
    <>
      <div className="flex justify-center items-center gap-12 my-6">
        <Card user="mukalcode"/>
        <Card user="thedevsumit"/>
      </div>
      <div className="flex justify-center items-center gap-12 my-6">
        <Card user="krishN_99"/>
        <Card user="vedant_8075"/>
      </div>
    </>
  )
}

export default App

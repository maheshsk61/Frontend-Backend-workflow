import React from "react"
import DummydataGET from "./dummydata-GET"
import Post from "./post"
import PosteddataGET from "./posteddata-GET"
function App() {
  return (
    <div className="App">
      <DummydataGET />
      <Post />
      <PosteddataGET />
    </div>
  )
}
export default App
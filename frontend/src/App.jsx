import { useState } from 'react'
import MyButton from './MyButton'
import Sign from './Sign'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sign title='STEM'> </Sign>
        <p class="text-5xl text-gray-900 dark:text-white italic">Made Simple</p>
        <br></br>
        <br></br>
        <MyButton title="Book Now" link="https://calendly.com/alejandro-pelcas/introduction-tell-me-what-i-can-help-you-with"></MyButton>
      </div>
      <br></br>
      <div>
        <MyButton title="LinkedIn" link="https://www.linkedin.com/in/alejandro-pelcastre/"> </MyButton>
    
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      {/* About me and profile photo */}
      <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHZLbdwyxFrwg/profile-displayphoto-shrink_800_800/B56ZTykKSuHoAg-/0/1739236359457?e=1755734400&v=beta&t=Hg--frPTbW5qU3CJlNApaxl2mNfBnra6PlhcVTN81qc"
          alt="Profile"
          className="w-100 h-100 rounded-full object-cover"
        />
        
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Alejandro Pelcastre-Ramirez</h2>
          <p className="text-sm text-gray-600">
          Hi! I'm Alejandro. I'm an educator and life learner specializing in tutoring introductory Physics, Data Sciece, and Calculus.
          I graduated from UC Berkeley with a B.A. in Applied Mathematics and Physics and a
          Masters in Data Science. I've been tutoring and teaching math and science for nearly 10 years now as well as 
          teaching chess, working as a preK teacher, and graduate student instructor at UC Berkeley.           </p>
        </div>
      </div>
    </>
  )
}

export default App

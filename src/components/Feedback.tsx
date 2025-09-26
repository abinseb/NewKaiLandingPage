import React from 'react'

const Feedback = () => {
  return (

<div className='    py-10 bg-gradient-to-t from-kai-purple/10 to-background'>
<div className='text-center'>
  <h2 className='text-2xl font-bold text-white mb-3'>We value your feedback!</h2>
  <p className='text-white mb-3'>Your insights help us improve. Please take a moment to share your thoughts.</p>
  <button
    // onClick={() => setFeedbackFormOpen(true)}
   // className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark text-black font-semibold'
   className='px-6 py-3 bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300'
  >
    Give Feedback
  </button>
</div>
</div>
  )
}

export default Feedback
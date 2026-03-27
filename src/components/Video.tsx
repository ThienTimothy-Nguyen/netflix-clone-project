import type { ShowVideo } from '@/types'
import { X } from 'lucide-react'

function Video( { showVideo, setShowVideo }: ShowVideo) {
    
  return (
    <div>
            <div className='z-100 w-full absolute top-[50%] translate-y-[-50%] left-0 '>
              <button onClick={() => setShowVideo(!showVideo)} className='right-4 top-6 absolute z-15 w-[50px]'>
                <X size={32} />
              </button>
              <video className='w-full relative' controls width="full">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div onClick={() => setShowVideo(!showVideo)} className='absolute bg-black/95 inset-0'>
              
            </div>
          </div>
  )
}

export default Video
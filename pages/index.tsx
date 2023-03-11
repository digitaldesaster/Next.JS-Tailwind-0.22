import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
      <Head>
        <title>Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 <header class="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
  <div class="flex items-center justify-between px-4 py-5">
    <div class="relative flex items-center">
      <div class="absolute top-1/2 transform -translate-y-1/2 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
        <span class="text-white font-bold text-2xl">C</span>
      </div>
      <span class="z-10 ml-16 font-medium text-gray-700 text-2xl">chatGPT</span>
    </div>
    <div class="flex items-center space-x-4">
      <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">Contact</a>
    </div>
  </div>
</header>

<main class="flex w-full flex-1 flex-col justify-start px-20 py-8 pt-16 justify-start">
  <div class="flex justify-start mt-8">
    <div class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-2">
      <span class="text-white font-bold text-2xl">B</span>
    </div>
    <div class="flex-grow">
      <p class="text-sm text-gray-500 text-left max-w-2xl">LLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id diam ante. Morbi eget bibendum ipsum. Aenean volutpat ligula vel nibh tristique ullamcorper. Nam ultrices quam ut aliquet venenatis. </p>
    </div>
  </div>

  <div class="flex justify-end mt-8">
    
      <p class="text-sm text-gray-500 mr-2 text-right max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id diam ante. Morbi eget bibendum ipsum. Aenean volutpat ligula vel nibh tristique ullamcorper. Nam ultrices quam ut aliquet venenatis. Proin vitae felis ut ex gravida bibendum. Quisque vel felis eu nulla euismod convallis a quis neque. Suspendisse quis velit velit. . </p>
    
    <div class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-2">
      <span class="text-white font-bold text-2xl">B</span>
    </div>
  </div>
  {/* Rest of the content goes here */}


  <div class="fixed bottom-0 left-0 w-full flex items-end justify-center mb-16">
  <div class="flex w-3/5 items-center">
    <textarea
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
      placeholder="Enter your message here"
      onInput={(event) => {
        event.target.rows = 1;
        const rowsNeeded = Math.ceil(event.target.scrollHeight / 16);
        if (rowsNeeded <= 6) {
          event.target.rows = rowsNeeded;
        } else {
          event.target.rows = 6;
          event.target.scrollTop = event.target.scrollHeight;
        }
      }}
    ></textarea>
    <button class="flex-shrink-0 w-12 h-full rounded-r-md bg-blue-500 hover:bg-blue-600 text-white" type="button">
      Send
    </button>
  </div>
</div>



  
</main>








      
<footer className="fixed bottom-0 flex h-10 w-full items-center justify-center border-t bg-zinc-50">
        <a
          className="flex items-center justify-center gap-2"
          href="https://replit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/replit.svg" alt="Replit Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
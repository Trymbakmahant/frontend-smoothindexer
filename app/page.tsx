import Link from 'next/link';
import Image from 'next/image';
import { AnimatedWave } from '@/components/animated-wave';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <header className="sticky top-0 z-50 flex items-center justify-center py-3 px-4 sm:px-8 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-center w-full max-w-6xl">
          <div className="flex items-center gap-4">
            <Image 
              src="/logo.png" 
              alt="SmoothIndexer Logo" 
              width={32} 
              height={32}
              className="h-8 w-8"
            />
            <h2 className="text-xl font-bold">SmoothIndexer</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-blue-900/20 dark:to-background-dark">
          <div className="absolute inset-0 z-0">
            <AnimatedWave />
          </div>
          <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-68px)] max-w-6xl items-center px-4 py-20 text-center sm:px-8 md:py-32 lg:py-40">
            <div className="grid w-full grid-cols-12 gap-8">
              <div className="col-span-12 flex flex-col items-center justify-center lg:col-span-7">
                <div className="flex max-w-xl flex-col items-center gap-6">
                  <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-6xl lg:text-7xl">SmoothIndexer</h1>
                  <p className="text-lg text-text-light/80 dark:text-text-dark/80 md:text-xl">Index EVM contracts with just an ABI.</p>
                  <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
                    <Link href="/abi-test" className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary-light to-primary-dark px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40">
                      <span className="truncate">Follow the Build</span>
                    </Link>
                    <a className="text-sm font-medium text-primary-dark transition-colors hover:text-primary-light dark:text-primary-light dark:hover:text-primary" href="#">View Progress @smoothindexer</a>
                  </div>
                </div>
              </div>
              <div className="col-span-12 hidden items-center justify-center lg:col-span-5 lg:flex">
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/50 shadow-2xl shadow-primary/20 backdrop-blur-lg dark:bg-neutral-dark/30">
                  <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-white/40 backdrop-blur-sm dark:bg-neutral-dark/20"></div>
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/40 backdrop-blur-sm dark:bg-neutral-dark/20"></div>
                  <span className="z-10 font-black text-8xl text-primary-dark dark:text-primary-light">SI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-neutral-light/50 dark:bg-neutral-dark/20">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-col gap-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">Powerful Features Built for Developers</h2>
                <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">
                  Our platform is packed with features designed to streamline your development workflow and deliver reliable, real-time data.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4 rounded-xl border border-neutral-light dark:border-neutral-dark/50 bg-background-light dark:bg-neutral-dark p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary-light">
                    <span className="material-symbols-outlined text-3xl">bolt</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Real-time Indexing</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70">Access up-to-the-second data from multiple blockchains without delay.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-neutral-light dark:border-neutral-dark/50 bg-background-light dark:bg-neutral-dark p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary-light">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Multi-Chain Support</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70">Seamlessly integrate with Ethereum, Polygon, Solana, and more from a single point.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-neutral-light dark:border-neutral-dark/50 bg-background-light dark:bg-neutral-dark p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary-light">
                    <span className="material-symbols-outlined text-3xl">code</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Simple & Powerful API</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70">Get started in minutes with our developer-friendly GraphQL API and extensive documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">Get Running in Minutes</h2>
              <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">
                Follow our simple three-step process to start querying blockchain data instantly.
              </p>
            </div>
            <div className="relative mt-16">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl">1</div>
                  <h3 className="text-xl font-bold mt-2">Connect Your Source</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70">Link your dApp or data source to WaveIndex with just a few clicks.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl">2</div>
                  <h3 className="text-xl font-bold mt-2">Define Your Schema</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70">Specify the data you need using our intuitive schema builder.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl">3</div>
                  <h3 className="text-xl font-bold mt-2">Query Your Data</h3>
                  <p className="text-text-light/70 dark:text-text-dark/70">Instantly access real-time, structured data through our powerful API.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-blue-50/50 dark:bg-blue-900/10 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fuel the Build ☕🌊</h2>
                <p className="max-w-md text-lg text-text-light/70 dark:text-text-dark/70">
                  If you're vibing with SmoothIndexer, buy me a coffee and keep the waves flowing.
                </p>
                <a className="inline-flex items-center justify-center h-14 px-8 bg-[#FFD966] text-gray-800 font-bold text-lg rounded-full shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105" href="#">
                  Buy Me a Coffee
                </a>
              </div>
              <div className="relative flex items-center justify-center h-64 lg:h-80">
                <svg className="absolute w-full h-auto -bottom-16 md:-bottom-24 text-blue-200/50 dark:text-blue-500/10" fill="currentColor" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 70C100 20, 200 100, 300 60C400 20, 400 80, 400 80V100H0V70Z"></path>
                </svg>
                <div className="relative w-48 h-48">
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-white dark:bg-neutral-light/80 rounded-full shadow-lg rotate-[10deg]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1.5 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-28 bg-gradient-to-b from-blue-400 to-primary-light rounded-t-[60px] rounded-b-[40px] shadow-md">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-3">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-8 -right-4 w-10 h-8 bg-amber-100 dark:bg-amber-200 rounded-lg rounded-br-2xl shadow-sm">
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-amber-100 dark:border-amber-200 rounded-full"></div>
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-700/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-transparent">
            <svg className="w-full h-full text-background-light dark:text-background-dark" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1440 100">
              <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z"></path>
            </svg>
          </div>
        </section>
      </main>

      <footer className="bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo.png" 
                alt="SmoothIndexer Logo" 
                width={24} 
                height={24}
                className="h-6 w-6"
              />
              <span className="text-sm text-text-light/70 dark:text-text-dark/70">© 2024 SmoothIndexer. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary transition-colors" href="#">Terms</a>
              <a className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary transition-colors" href="#">Privacy</a>
              <a className="text-sm font-medium text-text-light/70 dark:text-text-dark/70 hover:text-primary transition-colors" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

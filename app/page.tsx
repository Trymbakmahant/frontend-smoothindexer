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

        <section id="features" className="py-24 md:py-32 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-col gap-16 md:gap-24">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Powerful Features Built For Developers</h2>
                <p className="mt-6 text-lg text-text-light/70 dark:text-text-dark/70">Our platform is packed with features designed to streamline your development workflow and deliver reliable, real-time data from the blockchain.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-lg shadow-primary/5 dark:bg-neutral-dark">
                  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/20"></div>
                  <div className="relative z-10 flex h-full flex-col gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary-light to-primary-dark text-white shadow-md shadow-primary/30">
                      <span className="material-symbols-outlined text-3xl">bolt</span>
                    </div>
                    <h3 className="text-2xl font-bold">Real-time Indexing</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70">Access up-to-the-second data from multiple blockchains without delay, ensuring your dApp is always in sync.</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-lg shadow-primary/5 dark:bg-neutral-dark">
                  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/20"></div>
                  <div className="relative z-10 flex h-full flex-col gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary-light to-primary-dark text-white shadow-md shadow-primary/30">
                      <span className="material-symbols-outlined text-3xl">hub</span>
                    </div>
                    <h3 className="text-2xl font-bold">Multi-Chain Support</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70">Seamlessly integrate with Ethereum, Polygon, Solana, and more from a single, unified API endpoint.</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-lg shadow-primary/5 dark:bg-neutral-dark">
                  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/20"></div>
                  <div className="relative z-10 flex h-full flex-col gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary-light to-primary-dark text-white shadow-md shadow-primary/30">
                      <span className="material-symbols-outlined text-3xl">api</span>
                    </div>
                    <h3 className="text-2xl font-bold">GraphQL API</h3>
                    <p className="text-text-light/70 dark:text-text-dark/70">Get started in minutes with our developer-friendly GraphQL API. Query exactly what you need, nothing more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/10 dark:to-background-dark">
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Get Running in Minutes</h2>
              <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">
                It's as easy as dropping a shell in the ocean. Our streamlined process gets you from setup to querying in no time.
              </p>
            </div>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="flex-1 flex flex-col gap-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark text-white font-bold text-xl shadow-lg shadow-primary/20">
                      <span>1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Upload Your ABI</h3>
                      <p className="mt-1 text-text-light/70 dark:text-text-dark/70">Simply provide your contract's ABI. No complex configurations needed. Our system handles the rest.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark text-white font-bold text-xl shadow-lg shadow-primary/20">
                      <span>2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sync Your Data</h3>
                      <p className="mt-1 text-text-light/70 dark:text-text-dark/70">SmoothIndexer automatically syncs and indexes your contract events, providing real-time data access.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark text-white font-bold text-xl shadow-lg shadow-primary/20">
                      <span>3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Start Querying</h3>
                      <p className="mt-1 text-text-light/70 dark:text-text-dark/70">Use our intuitive GraphQL API to start querying your indexed data immediately. It's that simple.</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-8 bg-white/50 dark:bg-neutral-dark/30 rounded-2xl shadow-xl shadow-primary/10 backdrop-blur-lg border border-white/50 dark:border-neutral-dark/50">
                  <div className="w-full h-80 rounded-lg bg-neutral-dark flex flex-col font-mono text-sm text-neutral-300 shadow-2xl">
                    <div className="flex-shrink-0 p-3 bg-neutral-dark/80 rounded-t-lg flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-4 overflow-auto">
                      <pre><code><span className="text-purple-400">query</span> <span className="text-yellow-300">MyQuery</span> {'{'}{'\n'}
  <span className="text-blue-400">transfers</span>({'\n'}
    <span className="text-red-400">orderBy</span>: <span className="text-green-400">blockTimestamp</span>,{'\n'}
    <span className="text-red-400">orderDirection</span>: <span className="text-green-400">desc</span>{'\n'}
  ) {'{'}{'\n'}
    <span className="text-blue-400">id</span>{'\n'}
    <span className="text-blue-400">from</span>{'\n'}
    <span className="text-blue-400">to</span>{'\n'}
    <span className="text-blue-400">value</span>{'\n'}
  {'}'}{'\n'}
{'}'}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white dark:bg-background-dark pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden">
          {/* Subtle wave divider in background */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" fill="none" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 C360,50 720,150 1080,100 C1260,75 1380,125 1440,100 L1440,200 L0,200 Z" fill="url(#wave-gradient-divider)" />
              <defs>
                <linearGradient id="wave-gradient-divider" x1="0" y1="0" x2="1440" y2="200">
                  <stop offset="0%" stopColor="#0094FF" />
                  <stop offset="100%" stopColor="#003E8F" />
                </linearGradient>
              </defs>
            </svg>
        </div>

          <div className="container mx-auto px-4 sm:px-8 relative z-10">
            <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-light dark:text-text-dark">
                Follow the Build
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-text-dark/70 leading-relaxed">
                Stay updated with our latest progress, features, and updates as we build SmoothIndexer. Join our community and be part of the journey.
              </p>
              <a 
                href="https://twitter.com/smoothindexer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0094FF] text-white font-semibold text-base rounded-full shadow-lg shadow-[#0094FF]/30 hover:shadow-xl hover:shadow-[#0094FF]/40 transition-all duration-300 hover:scale-105"
              >
                Follow @smoothindexer
              </a>
            </div>
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

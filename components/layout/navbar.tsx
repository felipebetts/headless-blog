import React, { FormEvent, Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import NextLink from 'next/link'
import classNames from '@/utils/classnames'
import { navigation } from '@/utils/contants'
import useTags from '@/hooks/use-tags'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {

  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const { navigationTags } = useTags()
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchValue.length > 0) {
      setSearchValue('')
      router.push(`/search?q=${searchValue}`)
    }
  }

  return (
    <Disclosure as="nav" className="bg-white dark:bg-slate-800 dark:text-white drop-shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 h-16 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <NextLink className='text-slate-500 dark:text-slate-200 hover:text-indigo-700 text-xl font-semibold h-16 flex justify-center items-center' href='/'>
                    <Image
                      className="block lg:hidden h-8 w-auto"
                      width={64}
                      height={48}
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <div className="hidden lg:flex items-center">
                      <Image
                        width={64}
                        height={48}
                        className="h-8 w-auto mr-4"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                        />
                        Home
                    </div>
                </NextLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 my-auto">
                    {navigationTags && navigationTags.map((item) => (
                      <NextLink
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'border-b-2 border-b-indigo-500' : 'text-slate-500 dark:text-slate-200 hover:text-indigo-700',
                          'px-3 py-2 text-sm font-medium h-16 flex justify-center items-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NextLink>
                    ))}
                  </div>
                </div>
              </div>
              <form
                className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                onSubmit={handleSearch}
              >
                  <input
                    type="text"
                    className={`${searchOpen ? 'w-48 py-2 px-4' : 'w-0'} h-full mr-2 ml-4 rounded-md text-black transition-all duration-500`}
                    placeholder='Pesquise posts'
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                  />
                  <button
                    type={searchOpen ? 'submit' : 'button'}
                    className={`rounded-md bg-white dark:bg-slate-800 p-1 text-slate-400 dark:hover:text-indigo-700 hover:text-black  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                    onClick={searchOpen ? undefined  : () => setSearchOpen(true)}
                  >
                    <span className="sr-only">Search</span>
                    
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
              </form>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <form onSubmit={handleSearch}>
                  <div className="flex">
                    <input
                      type="text"
                      className='w-full py-2 px-4 rounded-md text-black'
                      placeholder='Pesquise posts'
                      value={searchValue}
                      onChange={e => setSearchValue(e.target.value)}
                    />
                    <Disclosure.Button
                      as='button'
                      type="submit"
                      className="px-3 rounded-md bg-white dark:bg-slate-800 text-slate-400 dark:hover:text-indigo-700 hover:text-black  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">Search</span>
                  
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </Disclosure.Button>
                  </div>
                </form>
                {navigationTags && navigationTags.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NextLink}
                    href={item.href}
                    className={classNames(
                      item.current ? ' text-black border-l-2 border-l-indigo-500' : 'text-slate-400 hover:text-black',
                      'block px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>

  )
}

export default Navbar
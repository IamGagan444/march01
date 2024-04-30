"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import "./global.css"
const Header = () => {
const paths=[
  {
    href:"/about",name:"abouts"
  },
{
  href:"/blog",name:"blogs"

}
,{
  href:"/products",name:"Product"
}


]
const pathNames=usePathname()


  return (
    <div className=''>
      <h2>practice</h2>
     {
      paths.map((item)=>{
const activeLink=pathNames.startsWith(item.href)
console.log(item.href,pathNames,activeLink)
        return(
          <Link href={item.href} key={item.href} className={activeLink?"font-bold text-teal-500 mr-4":"mr-4"}>{item.name} </Link>
        )
      })
     }


    </div>
  )
}

export default Header


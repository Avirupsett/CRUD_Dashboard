import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './searchresult.css'
import './helpfile.css'

export default function Searchresult() {
    const location = useLocation();
    const { searchResult, search } = location.state
    const makeBold=(item)=>{
        let changedtext=item
        search.split(" ").forEach((e)=>
            changedtext=changedtext.toLowerCase().replace(e.toLowerCase(), '<b>' + e + '</b>')
        )
        return changedtext
    }
    return (
        <section className='home-section'>
            <div className='container'>
                <h2 className='mb-4' style={{ color: "var(--text-color)" }}>Search Results for "{search}"</h2>

                {searchResult.length !== 0 ? searchResult.map((item, index) => {
                    return (
                        <Link key={index} to={item.item.route} style={{textDecoration:"none"}}>
                            <li className="search-result" >
                                <h5 className="result-title">{index + 1}) {item.item.title}</h5>
                                <div className="result-content" dangerouslySetInnerHTML={{
                                                __html: makeBold(`${item.item.content.substring(item.item.content.indexOf(search) - 100, item.item.content.indexOf(search) + 200)}...`)
                                            }}></div>
                            </li>
                        </Link>
                    )
                }) : <h2 style={{ color: "var(--blue-color)" }}>No Result Found!</h2>}
            </div>
        </section>
    )
}

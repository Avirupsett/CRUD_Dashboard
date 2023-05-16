import React, { useState } from 'react'
import './searchbox.css'
import searchpattern from '../services/handlesearch'
import { MdOutlineSearch } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

export default function Searchbox() {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])


    function openSearch() {
        setIsOpen(!isOpen)
    }
    const history = useHistory()

    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    function handleSearch() {
        history.push({
            pathname: '/search',
            state: {  // location state
                searchResult: searchResult,
                search: search
            },
        });
        setIsOpen(false)
    }

    const handlesearch = (e) => {
        setSearch(e.target.value)
        setSearchResult(searchpattern(e.target.value))
    }
    const makeBold=(item)=>{
        let changedtext=item
        search.split(" ").forEach((e)=>
            changedtext=changedtext.toLowerCase().replace(e.toLowerCase(), '<b>' + e + '</b>')
        )
        return changedtext
    }

    return (
        <div>
            <div id="myOverlay" className="overlay" style={{ display: isOpen ? 'block' : 'none' }}>

                <span className="closebtn" onClick={() => openSearch()} title="Close Overlay">×</span>
                <div className="overlay-content justify-content-center align-items-center">
                    <div className='d-flex flex-column align-items-center' >
                        <div className="d-flex overlay-content-inside" style={{backgroundColor: "var(--primary-color)", borderTopLeftRadius: "0.375rem", borderTopRightRadius: "0.375rem", borderBottomLeftRadius: search ? '' : '0.375rem', borderBottomRightRadius: search ? '' : '0.375rem' }}>
                            <input type="text" autoComplete='off' value={search} onKeyDown={(e) => handleEnter(e)} onChange={(e) => handlesearch(e)} className='form-control' placeholder="Search.." name="search" />
                            <div className="input-group-append">
                                <button className='btn btn-outline-secondary' onClick={() => handleSearch()} type="button"><i className="bx bx-search"></i></button>
                            </div>
                        </div>
                        {search && <div className='overlay-content-inside' style={{ borderBottomLeftRadius: "0.375rem", borderBottomRightRadius: "0.375rem", background: "var(--primary-color)" }}>
                            <hr className='my-0' />
                            <div style={{ height: "300px", overflowY: "auto", borderBottomLeftRadius: "0.375rem", borderBottomRightRadius: "0.375rem" }}>
                                {searchResult.length !== 0 ? searchResult.map((item, index) => {
                                    return (

                                        <li className="search-list" key={index} onClick={() => { setIsOpen(false); history.push(item.item.route) }}>
                                            <div className="item-title">{item.item.title}</div>
                                            <div className="item-content" dangerouslySetInnerHTML={{
                                                __html: makeBold(`${item.item.content.substring(item.item.content.indexOf(search), item.item.content.indexOf(search) + 200)}...`)
                                            }}></div>
                                        </li>

                                    )
                                }) : <li className="search-list d-flex justify-content-center">
                                    <strong className="item-title">No Result found !</strong>
                                </li>}

                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <button className="openBtn me-3" onClick={() => openSearch()}><MdOutlineSearch size={22} /> Search...</button>
        </div>
    )
}

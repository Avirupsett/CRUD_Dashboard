import { useEffect, useRef} from 'react';
import {FaListUl} from 'react-icons/fa'
import {RxCrossCircled} from 'react-icons/rx'

export function InfoBox(props) {


  const ref = useRef(null);
  const { onClickOutside,foundUsers,onChangeName,align,title,matched,name,filter } = props;


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
        if(matched.length===0){
          onChangeName("")
        }
        else if(name){
          onChangeName(matched[0]["name"])
        }
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside,matched,onChangeName,name]);


  if(!props.show)
    return null;

  return (
    <div ref={ref} className='info-box'>
        <div className={`user-list-${align}`}>
        <h3 className='pt-3 pb-1 px-2 d-flex align-items-center justify-content-between' style={{ color: 'var(--text-color)' }}><FaListUl className='me-3'/>{title}<RxCrossCircled color='var(--blue-color)' onClick={()=>onClickOutside()} style={{marginLeft:"1rem"}}/></h3>
        {/* <hr className='mb-0' style={{ color: 'var(--text-color)' }}/> */}
        <input type="text" className="form-control input-box my-1" autoComplete='off' placeholder="Search.." value={name}  onChange={(e)=>{filter(e);onChangeName(e.target.value)}}/>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user,index) => (
            <li key={user.id} className="user" onClick={()=>{onChangeName(user.name);onClickOutside()}}>
              <span className="user-id">{index+1}.</span>
              <span className="user-name" >{user.name}</span>
            </li>
          ))
        ) : (
          <h6 className='pt-3 px-3' style={{ color: 'var(--text-color)' }}>No Results Found!</h6>
        )}
      </div>
    </div> 
    );
}
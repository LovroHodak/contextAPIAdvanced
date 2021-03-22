import React, {useContext} from 'react'
import './Nav.css'
import {NewsContext} from '../NewsContext'


export default function Nav() {

    const [news] = useContext(NewsContext)

    return (
        <div className='Nav'>
            <h1>Nav.js</h1>
            <div className="onee">{news.map((nnew) => {
        return (
          <div key={nnew.id}>
            <p>Title: {nnew.title}</p>
            <p>Author: {nnew.author}</p>
            <div>
              {nnew.comments.map((com) => {
                return (
                  <div key={com.id}>
                    <p>
                      COMMENT: <b>{com.value}</b>
                    </p>
                    <p>
                      COMMENT-LIKES: <b style={{color: 'red'}}>{com.likes}</b>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}</div>
        </div>
    )
}

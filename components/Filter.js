import React from 'react'
import styles from './filter.module.css'
function Filter({check,label,onClick}) {

  return (
   <div className={`${styles['filter-btn']} ${check ? styles['check'] : ''}`} onClick={onClick}>
			{label}
		</div>
  )
}




export default Filter
import { useState } from 'react'

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
//   const state = useState(false)
//   const isFollowing =   state[0]
//   const setIsFollowing = state[1]

  console.log('[TwitterFollowCard] render with userName: ', userName)

  // text es el texto que muestra el boton 
  // op1: cuando  se hace clic en el botón se mira siguiendo en caso contrario se mira seguir
  // op2: si isFollowin en true el valor es  "Siguiendo", si es false el valor es 'seguir'
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  //  buttonClass Name es la clase del boton, la cual cambia segun el estado, es la misma comparativa segun rl valor de text
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  // handlerClick es la funcion que asigna al estado el valor del text 
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

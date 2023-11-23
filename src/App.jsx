import './App.css'
import useDarkMode from './hook/useDarkMode/useDarkMode'

const App = () => {
  const {isLight, changeThemeeMode} = useDarkMode()



  return (
    <div>
      <i className={`fa-solid ${isLight ? 'fa-sun' : 'fa-moon'} `} onClick={changeThemeeMode}></i>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab excepturi dicta numquam asperiores quasi! Repellat corporis odit sunt, natus vero fuga, aut expedita ab quisquam temporibus commodi deleniti saepe sequi laudantium ipsam nostrum id? Tenetur esse assumenda molestias, harum iure nemo nihil? Asperiores dolores nesciunt nostrum saepe aliquam optio quae beatae. Libero illo totam dolorem atque amet quidem, voluptate molestias eos cupiditate ducimus natus facere minus error, unde et modi praesentium? Assumenda id nesciunt cum dolore odit velit, unde ullam dolores quod totam delectus harum iste recusandae, corrupti aliquid deleniti nemo molestias ad minima veritatis minus. Beatae, nihil! Labore accusamus odio sapiente nam temporibus ipsum molestiae aspernatur consectetur quis est. Iure quibusdam vel voluptatum est provident numquam vitae ipsum facilis sint, et esse hic ratione amet architecto id assumenda reprehenderit. Qui quas, ipsa saepe unde tempore assumenda quos? Laudantium iste omnis, sequi, officia repudiandae commodi aliquid exercitationem, magni molestiae beatae ratione voluptatem velit! Dolorum ex ut reprehenderit exercitationem similique vel quos magnam illum perspiciatis cum? Officia recusandae reiciendis dolorum a laudantium quidem delectus illum impedit voluptates voluptatum, aliquam esse earum asperiores fugiat non aut animi, corrupti eius repellendus perferendis similique officiis maxime? Accusamus officiis voluptatem modi aliquam explicabo, maxime minima!</p>
      <hr />
      <div className='card'>
        <ul>
          <li>Turkey</li>
          <li>America</li>
          <li>Azerbaijan</li>
          {/* <button onClick={changer}>Click me!</button> */}
        </ul>
      </div>

      
    </div>

  )
}

export default App


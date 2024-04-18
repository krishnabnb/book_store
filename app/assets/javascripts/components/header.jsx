const Header = () => {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontWeight: 'bold', marginLeft: '30px' }}>Website Name</h2>

        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '50px' }}><a href="#">Home</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">About</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">Contact-us</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">Services</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">Product</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">Cart</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">Salers</a></li>
          <li style={{ marginRight: '50px' }}><a href="#">Customer</a></li>
           <li style={{ marginRight: '50px' }}><a href="#">Payment</a></li>

          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

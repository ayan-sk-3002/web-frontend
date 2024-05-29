import React, { useState } from 'react'
import '../Checkout/Checkout.css'

const Checkout = () => {
    const [isPurchased, setIsPurchased] = useState(false);

    const handlePurchase = () => {
      setIsPurchased(true);
    };
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you would typically handle the form submission,
      // such as sending data to a server.
      handlePurchase()
    };

    
  return (
    <div className='checkout'>
        {isPurchased ?
     <div>
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been successfully placed.</p>
    </div>:<form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Purchase</button>
    </form>}
    </div>
  )
}

export default Checkout
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Fetch = () => {

  const [data, setData] = useState([])
  const [loading, isLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [cart, setCart] = useState([])
  const [category, setCategroy] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data)
      isLoading(false)
      const unique = [...new Set(result.data.map(item => item.category))]
      setCategroy(unique);
    } catch (e) {
      console.log("error>>>", e);
    }
    // fetch("https://dummyjson.com/products")
    //   // .then(res=>{console.log(">>res",res)})
    //   .then(res => res.json())
    //   .then(result => setData(result))
  }

  // const toggleEvent = () => {
  //   setToggle(!toggle)
  //   if (toggle) {
  //     navigate('/')
  //   } else {
  //     navigate('/header')
  //   }
  // }

  const searchingandSorting = data
    .filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    ).filter(item =>
      selectedCategory ? item.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sort == "lowToHigh") return a.price - b.price;
      if (sort == "highToLow") return b.price - a.price;
      if (sort == "ascen") return a.title.localeCompare(b.title)
      if (sort == "desc") return b.title.localeCompare(a.title)
      return 0;
    })

  const addToCart = (product) => {
    const exists = cart.some(item => item.id === product.id)
    if (!exists) {
      setCart([...cart, product]);
    }
  }

  const inCart = (productId) => {
    return cart.some(item => item.id === productId);
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  useEffect(() => {
    fetchData()
  }, []);

  console.log(">>>data ", data)
  console.log(">>>cart ", cart)
  console.log(">>>uniquecategory", category)
  console.log(">>>selectedCatrogry", selectedCategory)

  return (
    <div style={{ margin: "80px 0px" }}>
      {/* <button onClick={toggleEvent}>Change</button> */}
      <input style={{ width: "60%", padding: "20px", border: "none", margin: "0 30px 20px 0" }}
        type="text"
        placeholder='Search any item or category'
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
      />

      <select style={{ padding: "10px", marginRight: "10px" }} value={sort} onChange={(e) => { setSort(e.target.value) }}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="ascen">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select style={{ padding: "10px" }} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Category</option>
        {category.map(cat => (
          <option value={cat}>{cat}</option>
        ))}
      </select>



      <h3>Cart Items = {cart.length}</h3>

      {loading ? <p>data is loading...</p> :

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {searchingandSorting.map((item) => (
            <div style={{ border: "2px solid black", padding: "20px", width: "380px", boxSizing: "border-box", }}>
              <img src={item.image} style={{ height: "150px" }} />
              <p><b>Title: </b>{item.title}</p>
              <p><b>Description: </b>{item.description}</p>
              <p><b>Category: </b>{item.category}</p>
              <p>Price: ${item.price}</p>

              {inCart(item.id) ? (
                <button onClick={() => removeFromCart(item.id)}>
                  Remove From Cart
                </button>
              ) : (
                <button onClick={() => addToCart(item)}>
                  Add To Cart
                </button>
              )}
              <button type='button'
              onClick={()=> navigate(`/product/${item.id}`)}
              >View Details</button>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Fetch

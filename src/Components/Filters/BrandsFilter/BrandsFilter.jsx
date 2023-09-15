

const BrandsFilter = ({brandNames,selectedBrand, handleBrandChange })=>{

    return(
        <div className='bottomContainer'>

        <legend className='BrandTitle'> Brands</legend> 
           
       
       <div>  {brandNames.map((brand) => (
          <div key={brand} className='BrandSelection'>
           
            <label className='brandsLabel'>
              <input
               type='checkbox'
                name='brand'
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => handleBrandChange(brand)}   
              />
              {brand}
            </label>
          </div>
        ))}
        </div>
      </div>
    )
}


export default BrandsFilter;